"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import cookieimg from '../../assets/cookies.svg'

const CookieConsentContext = createContext(null);
const STORAGE_KEY = "cookieConsent";

const defaultPrefs = {
  essential: true,
  analytics: false,
  marketing: false,
  saved: false,
};

export function CookieConsentProvider({ children }) {
  const [prefs, setPrefs] = useState(defaultPrefs);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Load saved preferences on page load
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setPrefs({ ...defaultPrefs, ...parsed });
        setShowBanner(!parsed.saved);
      } else {
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  // Save user preferences
  const savePrefs = (next) => {
    const updated = { ...next, essential: true, saved: true };
    setPrefs(updated);

    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  };

  const acceptAll = () => {
    savePrefs({ analytics: true, marketing: true });
    setShowBanner(false);
    setShowModal(false);
  };

  const rejectAll = () => {
    savePrefs({ analytics: false, marketing: false });
    setShowBanner(false);
    setShowModal(false);
  };

  const updateCategory = (key, value) => {
    if (key === "essential") return; // Required cookie
    setPrefs((prev) => ({ ...prev, [key]: value }));
  };

  const saveFromModal = () => {
    savePrefs(prefs);
    setShowBanner(false);
    setShowModal(false);
  };

  // Initialize analytics only if allowed
  useEffect(() => {
    if (prefs.analytics) {
      // Example:
      // loadGoogleAnalytics();
    }
  }, [prefs.analytics]);

  return (
    <CookieConsentContext.Provider
      value={{
        prefs,
        acceptAll,
        rejectAll,
        updateCategory,
        openSettings: () => setShowModal(true),
      }}
    >
      {children}

      {/* Banner */}
      {showBanner && (
        <CookieBanner
          onAcceptAll={acceptAll}
          onRejectAll={rejectAll}
          onManage={() => setShowModal(true)}
        />
      )}

      {/* Modal */}
      {showModal && (
        <CookieSettingsModal
          prefs={prefs}
          onToggle={updateCategory}
          onAcceptAll={acceptAll}
          onRejectAll={rejectAll}
          onSave={saveFromModal}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Floating Button — only if user accepts analytics */}
     
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}

/* ---------------- ICON ---------------- */

function CookieIcon() {
  return (
    <img src={cookieimg} className="h-14 w-14"/>
  );
}

/* ---------------- BANNER ---------------- */

function CookieBanner({ onAcceptAll, onRejectAll, onManage }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl border p-5 flex flex-col md:flex-row md:items-center gap-5">
        
        <div className="flex items-start gap-3">
          <CookieIcon />
          <div>
            <h2 className="font-semibold text-gray-800 text-sm md:text-base">
              We use cookies to improve your experience
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mt-1">
              Essential cookies are always on. You can enable analytics cookies to help us improve
              the site.
            </p>
          </div>
        </div>

        <div className="flex  md:flex-col  lg:flex-row gap-2 md:ml-auto">
          <button
            onClick={onManage}
            className="px-3 py-2 w-[150px] rounded-full border text-gray-700 text-xs md:text-sm hover:bg-gray-100"
          >
            Manage cookies
          </button>

          <button
            onClick={onRejectAll}
            className="px-3 py-2 w-[150px] rounded-full border text-gray-700 text-xs md:text-sm hover:bg-gray-100"
          >
            Reject <br/> non-essential
          </button>

          <button
            onClick={onAcceptAll}
            className="px-4 py-2 w-[150px] rounded-full bg-[#009EE3] text-white text-xs md:text-sm hover:bg-[#007bb8]"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- MODAL ---------------- */

function CookieSettingsModal({
  prefs,
  onToggle,
  onAcceptAll,
  onRejectAll,
  onSave,
  onClose,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl border p-6 space-y-5">
        
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <CookieIcon /> Cookie Preferences
        </h2>

        <p className="text-sm text-gray-600">
          Essential cookies are required for this website. You can enable or disable other types.
        </p>

        <div className="space-y-4">
          {/* Essential */}
          <div className="flex justify-between items-start gap-3">
            <div>
              <h3 className="font-semibold text-gray-800 text-sm">Essential cookies</h3>
              <p className="text-xs text-gray-600">
                Necessary for navigation, security and core features.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-[11px] text-gray-700">
              Always on
            </span>
          </div>

          {/* Analytics */}
          <ToggleRow
            label="Analytics cookies"
            description="Help us understand how our website is used."
            checked={prefs.analytics}
            onChange={(v) => onToggle("analytics", v)}
          />

          {/* Marketing */}
          <ToggleRow
            label="Marketing cookies"
            description="Used for minimal personalised improvements."
            checked={prefs.marketing}
            onChange={(v) => onToggle("marketing", v)}
          />
        </div>

        <div className="flex justify-between gap-2 pt-2 flex-wrap">
          <div className="flex gap-2">
            <button
              onClick={onRejectAll}
              className="px-3 py-2 rounded-full border text-xs hover:bg-gray-100"
            >
              Reject all
            </button>
            <button
              onClick={onAcceptAll}
              className="px-3 py-2 rounded-full bg-[#009EE3] text-white text-xs hover:bg-[#007bb8]"
            >
              Accept all
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-3 py-2 rounded-full border text-xs hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              className="px-4 py-2 rounded-full bg-gray-800 text-white text-xs hover:bg-gray-700"
            >
              Save preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleRow({ label, description, checked, onChange }) {
  return (
    <div className="flex justify-between items-start gap-3">
      <div>
        <h3 className="font-semibold text-gray-800 text-sm">{label}</h3>
        <p className="text-xs text-gray-600">{description}</p>
      </div>

      <button
        onClick={() => onChange(!checked)}
        className={`relative inline-flex w-10 h-6 rounded-full transition ${
          checked ? "bg-[#009EE3]" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transform transition ${
            checked ? "translate-x-5" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

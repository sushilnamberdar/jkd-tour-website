import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="tabs">
      <div className="tab-header">
        {tabs.map(tab => (
          <button
            key={tab}
            className={active === tab ? "active" : ""}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <p>{active} content goes here…</p>
      </div>
    </div>
  );
};

export default Tabs;

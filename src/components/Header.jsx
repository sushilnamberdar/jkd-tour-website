import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Users,
  Heart,
  Mountain,
  Landmark,
  Snowflake,
  Plane,
  Footprints,
  Waves,
  Camera,
  Map,
  Compass,
  MapPin,
  Phone,
} from "lucide-react";
import MobileMenu from "./MobileMenu";
import Logo from "./assets/logo.webp";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport
} from "./ui/navigation-menu";

import { ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 20); // shrink on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 bg-white backdrop-blur shadow-sm z-40
        transition-all duration-300
        ${shrink ? "py-1" : "py-1"}
      `}
    >
      {/* Top email bar */}
      <div className="flex items-center  max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  justify-between space-x-6">
        <div className="flex items-center space-x-3 py-1">
          <div className="flex items-center space-x-2 text-primary">
            <a href="https://www.instagram.com/jkdtour/" target="_blank" rel="noopener noreferrer" className="text-center flex hover:text-black ">
              <Instagram className="w-4 h-4" /> </a>
            <Linkedin className="w-4 h-4" />
            <Twitter className="w-4 h-4" />
            <Facebook className="w-4 h-4" />
          </div>
          <a
            href="mailto:info@jkdtour.com"
            className="text-center flex space-x-2 items-center  text-sm text-primary py-1 hover:text-primary-dark transition"
          >
            <p> <Mail className="w-4 h-4 hover:text-black" /> </p> | <p> info@jkdtour.com</p>
          </a>
        </div>

          <a href="tel:+913333344456" target="_blank" rel="noopener noreferrer" className="text-center flex space-x-2 items-center text-sm text-primary py-1 hover:text-primary-dark transition"> <Phone className="w-4 h-4 text-primary hover:text-black" /> +913333344456</a>
      </div>
      <hr className="border-t border-gray-100/2 mb-1 w-full " />

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 bg-gradient-to-r from-primary  to-secondary rounded-full  sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300">

        {/* Logo */}
        <Link
          to="/"
          className={`
            flex items-center gap-3 transition-all duration-300
            ${shrink ? "scale-90" : "scale-100"}
          `}
        >
          <img
            src={Logo}
            alt="logo"
            className={`
              rounded-full object-contain transition-all duration-300
              ${shrink ? "w-14 h-14" : "w-16 h-16"}
            `}
          />

          <div className="transition-all duration-300">
            <div
              className={`
                font-semibold text-navitems-color
                transition-all duration-300
                ${shrink ? "text-sm" : "text-base"}
              `}
            >
              JKD Tour
            </div>

            <div
              className={`
                 text-navitems-color   transition-all duration-300
                ${shrink ? "text-[14px]" : "text-xs"}
              `}
            >
              Travel | Explore | Experience
            </div>
          </div>
        </Link>



        {/* Desktop Navbar */}
        <nav className="hidden   md:hidden  lg:flex items-center gap-6 text-sm">
          <Link to="/" className=" text-navitems-color hover:text-accent">Home</Link>
          {/* Tours DROPDOWN */}
          <NavigationMenu className="relative">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="group flex text-navitems-color items-center text-lg gap-1  hover:text-accent data-[state=open]:text-accent">
                  Tours
                  <span className="ml-1 transition">
                    <ChevronDown className="h-4 w-4 block group-data-[state=open]:hidden" />
                    <ChevronUp className="h-4 w-4 hidden group-data-[state=open]:block" />
                  </span>
                </NavigationMenuTrigger>

                <NavigationMenuContent className="nav-menu-content">

                  <ul className="grid gap-1 m-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/tours/kashmir"
                          className="nav-menu-item"
                        >
                          <Map className="w-5 h-5 text-primary" />
                          <span className="font-lg">Kashmir Tour Packages</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/tours/himachal"
                          className="nav-menu-item"
                        >
                          <Mountain className="w-5 h-5 text-accent" />
                          <span className="font-lg">Himachal Tour Packages</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/tours/adventure"
                          className="nav-menu-item"
                        >
                          <Compass className="w-5 h-5 text-accent" />
                          <span className="font-lg">Adventure Tours</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/tours/honeymoon"
                          className="nav-menu-item"
                        >
                          <Heart className="w-5 h-5 text-accent" />
                          <span className="font-lg">Honeymoon Packages</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>

              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport className="absolute top-full left-0 w-full z-50" />
          </NavigationMenu>

          {/* Destinations DROPDOWN */}
          <NavigationMenu className="relative">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="group text-navitems-color  flex items-center gap-1 text-lg  hover:text-accent data-[state=open]:text-accent">
                  Destinations
                  <span className="ml-1 transition">
                    <ChevronDown className="h-4 w-4 block group-data-[state=open]:hidden" />
                    <ChevronUp className="h-4 w-4 hidden group-data-[state=open]:block" />
                  </span>
                </NavigationMenuTrigger>

                <NavigationMenuContent className="nav-menu-content left-0 translate-x-0">
                  <ul className="grid gap-1 m-2 ">
                    <li >
                      <NavigationMenuLink asChild>
                        <Link
                          to="/tours/kashmir"
                          className="nav-menu-item"
                        >
                          <MapPin className="w-5 h-5 text-primary" />
                          <span className="font-lg">Kashmir</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/tours/himachal"
                          className="nav-menu-item"
                        >
                          <Mountain className="w-5 h-5 text-accent" />
                          <span className="font-lg">Himachal Pradesh</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/tours/ladakh"
                          className="nav-menu-item"
                        >
                          <Compass className="w-5 h-5 text-accent" />
                          <span className="font-lg">Ladakh</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>

              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport className="absolute  top-full left-0 w-full z-50" />
          </NavigationMenu>

          {/* Activities DROPDOWN */}
          <NavigationMenu className="relative">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="group text-navitems-color flex items-center gap-1  hover:text-accent data-[state=open]:text-accent">
                  Activities
                  <span className="ml-1 transition">
                    <ChevronDown className="h-4 w-4 block group-data-[state=open]:hidden" />
                    <ChevronUp className="h-4 w-4 hidden group-data-[state=open]:block" />
                  </span>
                </NavigationMenuTrigger>

                <NavigationMenuContent className="nav-menu-content">

                  <ul className="grid gap-1 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/activities/trekking"
                          className="nav-menu-item"
                        >
                          <Landmark className="w-5 h-5 text-primary" />
                          <span className="font-lg">Cultural Heritage</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/activities/skiing"
                          className="nav-menu-item"
                        >
                          <Snowflake className="w-5 h-5 text-accent" />
                          <span className="font-lg">Skiing</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/activities/sky-diving"
                          className="nav-menu-item"
                        >
                          <Plane className="w-5 h-5 text-accent" />
                          <span className="font-lg">Sky Diving</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/activities/tracking"
                          className="nav-menu-item"
                        >
                          <Footprints className="w-5 h-5 text-accent" />
                          <span className="font-lg">Trekking</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/activities/river-rafting"
                          className="nav-menu-item"
                        >
                          <Waves className="w-5 h-5 text-primary" />
                          <span className="font-lg">River Rafting</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/activities/photography"
                          className="nav-menu-item"
                        >
                          <Camera className="w-5 h-5 text-accent" />
                          <span className="font-lg">Photography</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>

              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport className="absolute top-full left-0 w-full z-50" />
          </NavigationMenu>

          {/* trip types DROPDOWN */}
          <NavigationMenu className="relative">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="group text-navitems-color flex items-center gap-1 text-lg  hover:text-accent data-[state=open]:text-accent">
                  Trip Types
                  <span className="ml-1 transition">
                    <ChevronDown className="h-4 w-4 block group-data-[state=open]:hidden" />
                    <ChevronUp className="h-4 w-4 hidden group-data-[state=open]:block" />
                  </span>
                </NavigationMenuTrigger>

                <NavigationMenuContent className="nav-menu-content">

                  <ul className="grid gap-2 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/trip-types/family"
                          className="nav-menu-item"
                        >
                          <Users className="w-5 h-5 text-accent" />
                          <span className="font-lg">Family Tours</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/trip-types/honeymoon"
                          className="nav-menu-item"
                        >
                          <Heart className="w-5 h-5 text-accent" />
                          <span className="font-lg">Solo & Honeymoon Tours</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/trip-types/adventure"
                          className="nav-menu-item"
                        >
                          <Mountain className="w-5 h-5 text-accent" />
                          <span className="font-lg">Adventure Tours</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/trip-types/cultural"
                          className="nav-menu-item"
                        >
                          <Landmark className="w-5 h-5 text-primary" />
                          <span className="font-lg">Cultural Tours</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>

              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport className="absolute top-full left-0 w-full z-50" />
          </NavigationMenu>


          {/* Standard Links */}
          <Link to="/Why-Choose-Us" className="hover:text-accent text-navitems-color ">Why Choose Us</Link>


          <Link to="/contact" className="bg-accent text-black hover:bg-secondary hover:text-white px-4 py-2 rounded-md shadow hover:opacity-95 transition">
            Contact
          </Link>
        </nav>

        {/* MOBILE MENU */}
        <MobileMenu />

      </div>
    </header>
  );
}

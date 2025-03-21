import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/theme";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useRef } from "react";
import { useEffect } from "react";
import './Navbar.css'

function navLinkClass(isActive, theme) {
  return clsx(
    "block mx-auto w-1/2 sm:w-full rounded-lg p-1 px-3 py-2 hover:bg-sky-500",
    theme.background === "#fff" ? "text-black hover:bg-sky-200" : "text-white",
    {
      "bg-sky-500": isActive,
    }
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [navbarShown, setNavbarShown] = useState(false);

  // To make the navbar (in mobile view) get hidden when the user clicks/scroll outside it...
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleMouseDown(event) {
      if (
        navbarShown &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setNavbarShown(!false);
        console.log("outside");
      }
    }
    function handleScroll() {
      if (navbarShown) {
        setNavbarShown(false);
      }
    }

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [navbarShown]);
  //

  const toggleNavbar = () => {
    setNavbarShown(!navbarShown);
  };

  return (
    <nav
      aria-label="Site Nav"
      className="flex items-center justify-between max-w-8xl p-4 mx-auto sticky top-0 bg-light z-10 "
    >
      <div className="mb-4 sm:mb-0 sm:ml-8 nav-item big">
        <div className="big1">
        <a href="/">
        <img
          src="https://user-images.githubusercontent.com/88102392/233238344-b05e3c5d-178e-4a7b-9757-60063fb0f969.png"
          className="inline-flex h-[1] w-10 items-center justify-center rounded-lg" 
          alt="Gym Junkies logo"
          loading="lazy"
        ></img>
        
      </a>
        </div>
        <div className="big2">
        <h3><strong>GYM BUDDIES</strong></h3>
        </div>
     
      </div>
      

      <ul
        ref={navbarRef}
        // className='flex flex-wrap items-center justify-center gap-2 text-[1rem]'
        className={clsx(
          `fixed sm:static top-20 z-10 gap-2 text-md w-full sm:flex flex-wrap items-center justify-center nav-menu`,
          theme.background === "#fff" ? "#fff" : "#fff",
          navbarShown ? "navbar-shown" : "navbar-hidden"
        )}
        onClick={toggleNavbar}
      >
        <li className="mb-4 sm:mb-0 sm:ml-8 nav-item text-center">
          <NavLink
            to="/GuidePage"
            className={({ isActive }) => navLinkClass(isActive, theme)}
          >
            Guide
          </NavLink>
        </li>
        <li className="mb-4 sm:mb-0 sm:ml-8 nav-item text-center">
          <NavLink
            to="/SchedulePage"
            className={({ isActive }) => navLinkClass(isActive, theme)}
          >
            Schedule
          </NavLink>
        </li>
        
      </ul>
      <button onClick={toggleTheme} className="text-2xl">
        {theme.icon}
      </button>

      <div
        className={clsx("hamburger", navbarShown && "active")}
        onClick={toggleNavbar}
      >
        <span
          className={clsx(
            "bar",
            theme.background === "#fff" ? "bg-black" : "bg-white"
          )}
        ></span>
        <span
          className={clsx(
            "bar",
            theme.background === "#fff" ? "bg-black" : "bg-white"
          )}
        ></span>
        <span
          className={clsx(
            "bar",
            theme.background === "#fff" ? "bg-black" : "bg-white"
          )}
        ></span>
      </div>
    </nav>
  );
}

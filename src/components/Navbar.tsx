"use client";
import { useState } from "react";

function Navlist() {
  return (
    <ul className="menu md:menu-horizontal menu-vertical px-1 2xl:text-lg">
      <li>
        <a href="/#home">Home</a>
      </li>
      <li>
        <a href="/#experience">My Experience</a>
      </li>
      <li>
        <a href="/Resume.pdf" target="_blank">
          Resume
        </a>
      </li>
    </ul>
  );
}

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function toggle() {
    setToggleMenu(!toggleMenu);
  }

  function toggleOn() {
    setToggleMenu(true);
  }

  function toggleOff() {
    setToggleMenu(false);
  }

  return (
    <div className="navbar sticky top-0 bg-white dark:bg-zinc-900 shadow-md h-16 z-50">
      <div className="navbar-start">
        <a
          href="/#home"
          className={
            "whitespace-nowrap md:text-2xl p-4 transition-all duration-1000"
          }
        >
          Kang-In Park
        </a>
      </div>
      <div className="navbar-end hidden md:flex">
        <Navlist />
      </div>
      <div className="navbar-end visible md:hidden">
        <div
          onClick={toggle}
          onMouseEnter={toggleOn}
          onMouseLeave={toggleOff}
          className={`dropdown dropdown-end ${
            toggleMenu ? "dropdown-open" : ""
          } transform md:-translate-x-5 md:opacity-0 transition-all duration-1000`}
        >
          <label
            className={`btn btn-ghost swap swap-rotate ${
              toggleMenu ? "swap-active" : ""
            }`}
          >
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 50 50"
            >
              <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
            </svg>
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 50 50"
            >
              <path d="M 7.7070312 6.2929688 L 6.2929688 7.7070312 L 23.585938 25 L 6.2929688 42.292969 L 7.7070312 43.707031 L 25 26.414062 L 42.292969 43.707031 L 43.707031 42.292969 L 26.414062 25 L 43.707031 7.7070312 L 42.292969 6.2929688 L 25 23.585938 L 7.7070312 6.2929688 z"></path>
            </svg>
          </label>
          <ul className="dropdown-content border border-gray-700 bg-white shadow-xl rounded-box w-40 dark:bg-zinc-900 dark:border-zinc-700">
            <Navlist />
          </ul>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from 'react';

function Navlist() {
  return (
    <ul className="menu md:menu-horizontal menu-vertical px-1">
      {/*<li><a>About</a></li>*/}
      <li><a href="/Resume.pdf" target="_blank">Resume</a></li>
      <li><a href="https://kangin.me/blog/" target="_blank">Blog</a></li>
    </ul>
  )
}

function Navbar() {
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
    <div className="navbar sticky top-0 bg-white shadow-md h-10 z-50">
      <div className="navbar-start">
        <div onClick={toggle} onMouseEnter={toggleOn} onMouseLeave={toggleOff} className={`dropdown ${toggleMenu?"dropdown-open":""} transform md:-translate-x-5 md:opacity-0 transition-all duration-1000`}>
          <label className={`btn btn-ghost swap swap-rotate ${toggleMenu?"swap-active":""}`}>
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50"><path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path></svg>
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50"><path d="M 7.7070312 6.2929688 L 6.2929688 7.7070312 L 23.585938 25 L 6.2929688 42.292969 L 7.7070312 43.707031 L 25 26.414062 L 42.292969 43.707031 L 43.707031 42.292969 L 26.414062 25 L 43.707031 7.7070312 L 42.292969 6.2929688 L 25 23.585938 L 7.7070312 6.2929688 z"></path></svg>      
          </label>
          <ul className="dropdown-content border border-grey-700 bg-white shadow-xl rounded-box w-40">
            <Navlist/>
          </ul>
        </div>
        <a href="/" className="font-sans font-bold text-xl p-2 transform md:-translate-x-12 transition-all duration-1000">Kang-In Park</a>
      </div>
      <div className="navbar-end hidden md:flex">
        <Navlist/>
      </div>
    </div>
  )
}

function Socials() {
  const [hoverLinkedin, setHoverLinkedin] = useState(false);
  const [hoverGithub, setHoverGithub] = useState(false);

  function toggleLinkedin() {
    setHoverLinkedin(!hoverLinkedin);
  }

  function toggleGithub() {
    setHoverGithub(!hoverGithub);
  }

  return (
    <ul className="flex pt-16">
      <li onMouseEnter={toggleLinkedin} onMouseLeave={toggleLinkedin} className="pr-2">
        <a href="https://www.linkedin.com/in/kanginpark" target="_blank" className={`btn btn-ghost content-center p-1 swap swap-rotate ${hoverLinkedin?"swap-active":""}`}>
          <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
          <svg className="swap-on fill-linkedin-blue w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
      </li>
      <li onMouseEnter={toggleGithub} onMouseLeave={toggleGithub} className="pr-2">
        <a href="https://github.com/kip218" target="_blank" className={`btn btn-ghost content-center p-1 swap swap-rotate ${hoverGithub?"swap-active":""}`}>
          <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <svg className="swap-on fill-white bg-black rounded-full border border-black w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </li>
    </ul>
  )
}

function TechStack() {

  return (
    <ul className="flex pt-16">
      <li className="pr-5">
        Python
      </li>
      <li className="pr-2">
        PostgreSQL
      </li>
    </ul>
  )
}

export { Navbar, Socials, TechStack };
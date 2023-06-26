"use client";
import { useState } from "react";
import { Kanit } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const listVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delayChildren: 0, // this will set a delay before the children start animating
      staggerChildren: 0.1, // this will set the time inbetween children animation
    },
  },
};

const itemVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      ease: "easeInOut",
      type: "spring",
    },
  },
};

function Navlist() {
  return (
    <ul className="menu md:menu-horizontal menu-vertical px-1 2xl:text-lg">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#experience">My Experience</a>
      </li>
      <li>
        <a href="/Resume.pdf" target="_blank">
          Resume
        </a>
      </li>
    </ul>
  );
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
    <div className="navbar sticky top-0 bg-white dark:bg-zinc-900 shadow-md h-28 z-50">
      <div className="navbar-start">
        <div
          onClick={toggle}
          onMouseEnter={toggleOn}
          onMouseLeave={toggleOff}
          className={`dropdown ${
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
        <a
          href="/#home"
          className={`${kanit.className} whitespace-nowrap md:text-2xl p-2 transform md:-translate-x-12 transition-all duration-1000`}
        >
          Kang-In Park
        </a>
      </div>
      <div className="navbar-end hidden md:flex">
        <Navlist />
      </div>
    </div>
  );
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
    <ul className="flex sm:pt-12">
      <li
        onMouseEnter={toggleLinkedin}
        onMouseLeave={toggleLinkedin}
        className="pr-2"
      >
        <a
          href="https://www.linkedin.com/in/kanginpark"
          target="_blank"
          className={`btn btn-ghost content-center p-1 swap swap-rotate ${
            hoverLinkedin ? "swap-active" : ""
          }`}
        >
          <svg
            className="swap-off fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
          <svg
            className="swap-on fill-linkedin-blue w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
      </li>
      <li
        onMouseEnter={toggleGithub}
        onMouseLeave={toggleGithub}
        className="pr-2"
      >
        <a
          href="https://github.com/kip218"
          target="_blank"
          className={`btn btn-ghost content-center p-1 swap swap-rotate ${
            hoverGithub ? "swap-active" : ""
          }`}
        >
          <svg
            className="swap-off fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <svg
            className="swap-on fill-white bg-black rounded-full border border-black w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </li>
    </ul>
  );
}

function TechStack() {
  return (
    <motion.ul
      className="flex flex-wrap justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={listVariants}
    >
      <motion.li
        className="pl-8 pr-2 md:pr-8 hover:!-translate-y-6 transition-all duration-700"
        variants={itemVariants}
      >
        <svg
          className="fill-current w-14 h-14 md:w-20 md:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <path
            fill="#0277BD"
            d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
          ></path>
          <path
            fill="#FFC107"
            d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
          ></path>
        </svg>
      </motion.li>
      <motion.li
        className="pr-2 md:pr-8 hover:!-translate-y-6 transition-all duration-700"
        variants={itemVariants}
      >
        <svg
          className="fill-current w-14 h-14 md:w-20 md:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <path
            fill="#fff"
            d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"
          ></path>
          <path
            fill="#0277bd"
            d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"
          ></path>
          <path
            fill="#0277bd"
            d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"
          ></path>
          <path
            fill="#0277bd"
            d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"
          ></path>
        </svg>
      </motion.li>
      <motion.li
        className="pr-2 md:pr-8 hover:!-translate-y-6 transition-all duration-700"
        variants={itemVariants}
      >
        <svg
          className="fill-current w-14 h-14 md:w-20 md:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <path
            fill="#ededed"
            fill-rule="evenodd"
            d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
            clip-rule="evenodd"
          ></path>
          <path
            fill="#434345"
            d="M23.987,46.221c-1.085,0-2.171-0.252-3.165-0.757c-2.22-1.127-5.118-2.899-7.921-4.613 c-1.973-1.206-3.836-2.346-5.297-3.157C5.381,36.458,4,34.113,4,31.572V16.627c0-2.59,1.417-4.955,3.699-6.173 c3.733-1.989,9.717-5.234,12.878-7.01h0c2.11-1.184,4.733-1.184,6.844,0c3.576,2.007,10.369,6.064,14.252,8.513 C43.13,12.874,44,14.453,44,16.182V32c0,2.4-0.859,4.048-2.553,4.895c-0.944,0.531-2.628,1.576-4.578,2.787 c-3.032,1.882-6.806,4.225-9.564,5.705C26.27,45.942,25.128,46.221,23.987,46.221z M21.556,5.188 C18.384,6.97,12.382,10.226,8.64,12.22C7.012,13.088,6,14.776,6,16.627v14.945c0,1.814,0.987,3.49,2.576,4.373 c1.498,0.832,3.378,1.981,5.369,3.199c2.77,1.693,5.634,3.445,7.783,4.536c1.458,0.739,3.188,0.717,4.631-0.056 c2.703-1.451,6.447-3.775,9.456-5.643c1.97-1.223,3.671-2.279,4.696-2.854C41.835,34.464,42,33.109,42,32V16.182 c0-1.037-0.521-1.983-1.392-2.532c-3.862-2.435-10.613-6.467-14.165-8.461C24.913,4.331,23.086,4.331,21.556,5.188L21.556,5.188z"
          ></path>
          <path
            fill="#434345"
            d="M22.977,41.654l-0.057-13.438c-0.011-2.594,1.413-4.981,3.701-6.204l12.01-6.416 c1.998-1.068,4.414,0.38,4.414,2.646v14.73c0,1.041-0.54,2.008-1.426,2.554l-14.068,8.668 C25.557,45.424,22.987,43.996,22.977,41.654z"
          ></path>
          <path
            fill="#ededed"
            d="M28.799,26.274c0.123-0.063,0.225,0.014,0.227,0.176l0.013,1.32 c0.552-0.219,1.032-0.278,1.467-0.177c0.095,0.024,0.136,0.153,0.098,0.306l-0.291,1.169c-0.024,0.089-0.072,0.178-0.132,0.233 c-0.026,0.025-0.052,0.044-0.077,0.057c-0.04,0.02-0.078,0.026-0.114,0.019c-0.199-0.045-0.671-0.148-1.413,0.228 c-0.778,0.395-1.051,1.071-1.046,1.573c0.007,0.601,0.315,0.783,1.377,0.802c1.416,0.023,2.027,0.643,2.042,2.067 c0.016,1.402-0.733,2.905-1.876,3.826l0.025,1.308c0.001,0.157-0.1,0.338-0.225,0.4l-0.775,0.445 c-0.123,0.063-0.225-0.014-0.227-0.172l-0.013-1.286c-0.664,0.276-1.334,0.342-1.763,0.17c-0.082-0.032-0.117-0.152-0.084-0.288 l0.28-1.181c0.022-0.092,0.071-0.186,0.138-0.246c0.023-0.023,0.048-0.04,0.072-0.053c0.044-0.022,0.087-0.027,0.124-0.013 c0.462,0.155,1.053,0.082,1.622-0.206c0.722-0.365,1.206-1.102,1.198-1.834c-0.007-0.664-0.366-0.939-1.241-0.946 c-1.113,0.002-2.151-0.216-2.168-1.855c-0.014-1.35,0.688-2.753,1.799-3.641l-0.013-1.319c-0.001-0.162,0.098-0.34,0.225-0.405 L28.799,26.274z"
          ></path>
          <path
            fill="#4da925"
            d="M37.226,34.857l-3.704,2.185c-0.109,0.061-0.244-0.019-0.244-0.143v-1.252 c0-0.113,0.061-0.217,0.16-0.273l3.704-2.185c0.111-0.061,0.246,0.019,0.246,0.145v1.248 C37.388,34.697,37.326,34.801,37.226,34.857"
          ></path>
        </svg>
      </motion.li>
      <motion.li
        className="pr-2 md:pr-8 hover:!-translate-y-6 transition-all duration-700"
        variants={itemVariants}
      >
        <svg
          className="fill-current w-14 h-14 md:w-20 md:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <defs>
            <linearGradient
              id="NX4qzaRknlkLIGuB5rRvAa_6RHskkZGRABM_gr1"
              x1="19.639"
              x2="28.361"
              y1="3.481"
              y2="44.519"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#636363"></stop>
              <stop offset="1" stop-color="#444"></stop>
            </linearGradient>
            <linearGradient
              id="NX4qzaRknlkLIGuB5rRvAb_6RHskkZGRABM_gr2"
              x1="13"
              x2="35"
              y1="30.684"
              y2="30.684"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ff9c0f"></stop>
              <stop offset=".813" stop-color="#d67e00"></stop>
            </linearGradient>
          </defs>
          <g data-name="Ð¡Ð»Ð¾Ð¹ 2">
            <rect
              width="36"
              height="36"
              x="6"
              y="6"
              fill="url(#NX4qzaRknlkLIGuB5rRvAa_6RHskkZGRABM_gr1)"
              rx="2"
            ></rect>
            <path
              fill="#1d1d1b"
              d="M14,39a2,2,0,0,1-2-2V31.1A2.5,2.5,0,0,1,13.4,28.825L19.131,27,13.4,25.175A1.993,1.993,0,0,1,12,23.269V16.731A1.993,1.993,0,0,1,13.4,14.825L33.4,8.1A2,2,0,0,1,36,10v6.265a1.993,1.993,0,0,1-1.4,1.906L28.869,20,34.6,21.825A1.993,1.993,0,0,1,36,23.731v6.538a1.993,1.993,0,0,1-1.4,1.906l-20,6.732A2,2,0,0,1,14,39ZM34,10,14,16.731v6.538L25.727,27,14,31.1V37l20-6.732V23.731L22.273,20,34,16.269Z"
              opacity=".05"
            ></path>
            <path
              d="M14,38.5A1.5,1.5,0,0,1,12.5,37V31.1a1.494,1.494,0,0,1,1.046-1.43L20.779,27l-7.233-2.3A1.493,1.493,0,0,1,12.5,23.269V16.731A1.493,1.493,0,0,1,13.546,15.3l20-6.728A1.5,1.5,0,0,1,35.5,10v6.265A1.493,1.493,0,0,1,34.454,17.7L27.221,20l7.233,2.3A1.493,1.493,0,0,1,35.5,23.731v6.538A1.493,1.493,0,0,1,34.454,31.7l-20,6.732A1.486,1.486,0,0,1,14,38.5ZM33.7,9.051l.152.476-20,6.728a.5.5,0,0,0-.349.476v6.538a.5.5,0,0,0,.349.476L24.078,27,13.849,30.623a.5.5,0,0,0-.349.477V37a.5.5,0,0,0,.205.4.489.489,0,0,0,.446.073l20-6.732a.5.5,0,0,0,.349-.476V23.731a.5.5,0,0,0-.349-.476L23.922,20l10.229-3.255a.5.5,0,0,0,.349-.476V10a.5.5,0,0,0-.651-.477Z"
              opacity=".07"
            ></path>
            <path
              fill="url(#NX4qzaRknlkLIGuB5rRvAb_6RHskkZGRABM_gr2)"
              d="M34.3,31.222l-20,6.732A1,1,0,0,1,13,37V31.1a1,1,0,0,1,.7-.952l20-6.732a1,1,0,0,1,1.3.953v5.9A1,1,0,0,1,34.3,31.222Z"
            ></path>
            <path
              fill="#ff9c0f"
              d="M33.7,9.051l-20,6.727a1,1,0,0,0-.7.953v6.538a1,1,0,0,0,.7.953l21.061,6.7a1.162,1.162,0,0,0,.216-.423A2.867,2.867,0,0,0,35,29.962V23.731a1,1,0,0,0-.7-.953L25.571,20,34.3,17.222a1,1,0,0,0,.7-.953V10A1,1,0,0,0,33.7,9.051Z"
            ></path>
          </g>
        </svg>
      </motion.li>
      <motion.li
        className="pr-2 md:pr-8 hover:!-translate-y-6 transition-all duration-700"
        variants={itemVariants}
      >
        <svg
          className="fill-current w-14 h-14 md:w-20 md:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <path
            fill="#F4511E"
            d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
          ></path>
        </svg>
      </motion.li>
    </motion.ul>
  );
}

function Experience() {
  return (
    <motion.ul
      className="flex flex-col justify-between w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={listVariants}
    >
      <p className="p-4 text-xl md:text-3xl font-bold transition-all duration-1000">
        Previously I have worked at
      </p>
      <motion.li
        className="py-2 md:py-4 transition-all duration-500"
        variants={itemVariants}
      >
        <div className="collapse collapse-arrow border border-gray-600 hover:bg-gray-100 bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:border-zinc-700 shadow-lg transition-all duration-500 ease-in-out">
          <input type="checkbox" />
          <div className="collapse-title lg:text-lg font-bold">
            <Image
              src="/securityscorecard.png"
              width={512}
              height={512}
              className="w-10 h-10 inline mr-4"
              alt=""
            />
            SecurityScorecard
          </div>
          <div className="collapse-content dark:bg-zinc-700">
            <p className="pt-4">as a Signal Intelligence Collections Intern</p>
          </div>
        </div>
      </motion.li>
      <motion.li
        className="py-2 md:py-4 transition-all duration-500"
        variants={itemVariants}
      >
        <div className="collapse collapse-arrow border border-gray-600 hover:bg-gray-100 bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:border-zinc-700 shadow-lg transition-all duration-500 ease-in-out">
          <input type="checkbox" />
          <div className="collapse-title lg:text-lg font-bold">
            <Image
              src="/rokaf.png"
              width={600}
              height={600}
              className="w-10 h-10 inline mr-4"
              alt=""
            />
            Republic of Korea Air Force
          </div>
          <div className="collapse-content dark:bg-zinc-700">
            <p className="pt-4">as an Enlisted Aircraft Mechanic</p>
          </div>
        </div>
      </motion.li>
      <motion.li
        className="py-2 md:py-4 transition-all duration-500"
        variants={itemVariants}
      >
        <div className="collapse collapse-arrow border border-gray-600 hover:bg-gray-100 bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:border-zinc-700 shadow-lg transition-all duration-500 ease-in-out">
          <input type="checkbox" />
          <div className="collapse-title lg:text-lg font-bold">
            <Image
              src="/nyu.png"
              width={450}
              height={450}
              className="w-10 h-10 inline mr-4"
              alt=""
            />
            NYU TRIO Scholars
          </div>
          <div className="collapse-content dark:bg-zinc-700">
            <p className="pt-4">as a Python Tutor</p>
          </div>
        </div>
      </motion.li>
    </motion.ul>
  );
}

export { Navbar, Socials, TechStack, Experience };

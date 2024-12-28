"use client";
import { motion } from "framer-motion";
import { listVariants, itemVariants } from "./MotionVariants";

export default function TechStack() {
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
        <svg className="fill-current w-14 h-14 md:w-20 md:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 140">
         <path fill="#29b5e8" d="M134.81,60.1l-16.47,9.49L134.81,79a8.65,8.65,0,1,1-8.67,15l-29.51-17a8.68,8.68,0,0,1-4.33-7.75,8.48,8.48,0,0,1,.31-2,8.68,8.68,0,0,1,4-5.19l29.51-16.94A8.69,8.69,0,0,1,138,48.31,8.58,8.58,0,0,1,134.81,60.1Zm-15.59,46L89.72,89.13a8.72,8.72,0,0,0-13.06,7.48v33.9a8.69,8.69,0,0,0,17.37,0v-19L110.54,121a8.66,8.66,0,1,0,8.68-15Zm-34-33.16L72.92,85.09a2.44,2.44,0,0,1-1.54.65H67.77a2.51,2.51,0,0,1-1.54-.65L54,72.9a2.45,2.45,0,0,1-.64-1.52v-3.6A2.5,2.5,0,0,1,54,66.25L66.23,54.06a2.5,2.5,0,0,1,1.54-.64h3.61a2.45,2.45,0,0,1,1.54.64L85.18,66.25a2.49,2.49,0,0,1,.63,1.53v3.6A2.44,2.44,0,0,1,85.18,72.9Zm-9.8-3.38A2.59,2.59,0,0,0,74.73,68l-3.55-3.51a2.51,2.51,0,0,0-1.54-.64h-.13a2.46,2.46,0,0,0-1.53.64L64.43,68a2.51,2.51,0,0,0-.63,1.55v.13a2.41,2.41,0,0,0,.63,1.52L68,74.7a2.48,2.48,0,0,0,1.53.64h.13a2.51,2.51,0,0,0,1.54-.64l3.55-3.53a2.49,2.49,0,0,0,.65-1.52ZM19.93,33.08,49.44,50a8.73,8.73,0,0,0,13.07-7.49V8.64a8.69,8.69,0,0,0-17.37,0v19l-16.53-9.5a8.65,8.65,0,1,0-8.68,15ZM84.69,51.16a8.64,8.64,0,0,0,5-1.13l29.5-17a8.65,8.65,0,1,0-8.68-15L94,27.61v-19a8.69,8.69,0,0,0-17.37,0v33.9A8.66,8.66,0,0,0,84.69,51.16ZM54.48,88a8.58,8.58,0,0,0-5,1.13L19.93,106.06a8.66,8.66,0,1,0,8.68,15l16.53-9.49v19a8.69,8.69,0,0,0,17.37,0V96.61A8.65,8.65,0,0,0,54.48,88Zm-8-15.87a8.61,8.61,0,0,0-4-10L13,45.14A8.69,8.69,0,0,0,1.17,48.31,8.59,8.59,0,0,0,4.35,60.1l16.47,9.49L4.35,79A8.65,8.65,0,1,0,13,94l29.48-17A8.59,8.59,0,0,0,46.47,72.13Zm93.15-56.22H138.3v1.63h1.32c.61,0,1-.28,1-.8S140.26,15.91,139.62,15.91Zm-2.94-1.5h3c1.62,0,2.7.89,2.7,2.27a2.16,2.16,0,0,1-1.08,1.9l1.17,1.68v.34h-1.69L139.62,19H138.3V20.6h-1.62Zm8.3,3.22a5.48,5.48,0,0,0-5.58-5.83c-3.31,0-5.51,2.39-5.51,5.83,0,3.28,2.2,5.82,5.51,5.82A5.47,5.47,0,0,0,145,17.63Zm1.38,0c0,3.89-2.6,7.14-7,7.14s-6.89-3.28-6.89-7.14,2.57-7.14,6.89-7.14S146.36,13.73,146.36,17.63Z">
         </path>
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

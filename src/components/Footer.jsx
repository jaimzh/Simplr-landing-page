import React from "react";

import githubIcon from "../assets/githubicon.svg";

function Footer() {
  return (
    <footer className="w-full bg-[var(--simplr-blue)] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-center gap-8 md:gap-0">
        <div className="flex flex-col items-center md:items-start gap-4 min-w-[220px] w-full md:w-auto text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold">Simplr</span>
          </div>
          <span className="text-base">
            Making the web easier to understand, one word at a time.
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 w-full md:w-auto">
          <a
            href="https://github.com/jaimzh/Simplr-fe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:underline"
          >
            <img src={githubIcon} alt="GitHub" className="w-7 h-7" />
            <span>Github Repository</span>
          </a>
        </div>

        <div className="flex flex-col items-center gap-2 w-full md:w-auto">
          <button
            className=" cursor-pointer rounded-full bg-white text-[var(--simplr-blue)] w-10 h-10 flex items-center justify-center mb-1 shadow hover:bg-[var(--simplr-blue-dark)] hover:text-white transition"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to Top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
          <a
            href="#privacy-policy"
            className="text-xs text-white underline hover:text-gray-200"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

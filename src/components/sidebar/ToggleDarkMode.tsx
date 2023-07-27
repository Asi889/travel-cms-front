import { useDarkMode, useSetDarkMode } from "@/src/services/darkmode.service";
import React, { useEffect, useState } from "react";

function DarkModeToggle() {
  const { mutateAsync: toggleDarkMode } = useSetDarkMode();
  const { data: darkMode } = useDarkMode();
  const checkUserPrefersDarkMode = () => {
    if (typeof window !== "undefined") {
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
    return false;
  };
  const isDarkMode =
    darkMode === "auto" ? checkUserPrefersDarkMode() : darkMode === "on";

  function toggle() {
    toggleDarkMode(isDarkMode ? "off" : "on");
  }

  useEffect(() => {
    switch (darkMode) {
      case "on":
        document.body.classList.add("dark");
        break;
      case "off":
        document.body.classList.remove("dark");
        break;
      case "auto":
        if (checkUserPrefersDarkMode()) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
        break;
      default:
        break;
    }
  }, [darkMode]);

  useEffect(() => {
    const onChange = (e: MediaQueryListEvent) => {
      if (darkMode !== "auto") {
        return;
      }
      if (e.matches) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    };
    if (darkMode === "auto") {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", onChange);
    } else {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", onChange);
    }
    return () => {
      window
        .matchMedia("(prfers-color-scheme: dark)")
        .removeEventListener("change", onChange);
    };
  }, [darkMode]);

  return (
    <button
      onClick={toggle}
      className={`cursor-pointer w-11 h-5 transition duration-300 lg:mb-6 ${
        isDarkMode ? "bg-blue-300" : "bg-blue-900"
      } rounded-full relative px-1.5 flex items-center ${
        isDarkMode ? "" : " justify-end"
      }`}
    >
      <div
        className={`w-4 h-4 rounded-full absolute transform duration-200 ease-out bg-white left-0.5 ${
          isDarkMode ? "translate-x-6" : "translate-x-0"
        }`}
      />
      {isDarkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}

export default DarkModeToggle;

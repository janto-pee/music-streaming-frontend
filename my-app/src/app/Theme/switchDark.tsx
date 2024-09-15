"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React from "react";
import ThemeMode from "./ThemeMode";

const SwitchDarkMode = () => {
  const { toggleDarkMode, isDark, toDark, toLight } = ThemeMode();

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="w-10 h-10  p-2 rounded-full shadow-md"
    >
      {isDark ? (
        <span className="text-primary-100">
          <SunIcon className="" />
        </span>
      ) : (
        <span className="text-primary-600">
          <MoonIcon className="" />
        </span>
      )}
    </button>
  );
};

export default SwitchDarkMode;

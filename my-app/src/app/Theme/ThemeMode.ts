"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { createGlobalState } from "react-hooks-global-state";
const initialState = { isDarkMode: false };
const { useGlobalState } = createGlobalState(initialState);

const ThemeMode = () => {
  const [isDark, setIsDark] = useGlobalState("isDarkMode");

  useEffect(() => {
    Aos.init({
      duration: 1400,
      once: true,
    });
  }, []);

  useEffect(() => {
    toggleDarkMode();
  }, []);

  const toggleDarkMode = () => {
    if (localStorage.theme === "dark") {
      toLight();
    } else {
      toDark();
    }
  };

  const toLight = () => {
    setIsDark(false);
    const root = document.querySelector("html");
    if (!root) return;
    root.classList.remove("dark");
    localStorage.theme = "light";
  };

  const toDark = () => {
    setIsDark(true);
    // const root = document.querySelector("html");
    // if (!root) return;
    // !root.classList.contains("dark") && root.classList.add("dark");
    // localStorage.theme = "dark";
  };

  return { toLight, toDark, isDark, toggleDarkMode };
};

export default ThemeMode;

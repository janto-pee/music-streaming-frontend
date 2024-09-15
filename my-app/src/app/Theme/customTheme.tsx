"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import ThemeMode from "./ThemeMode";

const CustomTheme = () => {
  ThemeMode();
  const pathname = usePathname();
  useEffect(() => {
    let themeBodyClass = "";

    const $body = document.querySelector("body");
    if (!$body) return;

    // if (pathname == "/") {
    //   themeBodyClass = "theme-cyan-blueGrey";
    // }
    if (pathname == "/institutes") {
      themeBodyClass = "theme-red-warmGrey";
    }
    if (pathname == "/dashboard") {
      themeBodyClass = "theme-purple-blueGrey";
    }

    themeBodyClass && $body.classList.add(themeBodyClass);
    return () => {
      themeBodyClass && $body.classList.remove(themeBodyClass);
    };
  }, [pathname]);

  return <></>;
};

export default CustomTheme;
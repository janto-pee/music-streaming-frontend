"use client"

import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {window.removeEventListener('scroll', toggleVisibility)}
  }, []);
  const toggleVisibility = () => {
    window.scrollY > 800 ? setIsVisible(true) : setIsVisible(false);
  };
  return (
    <>
    {isVisible && (
      <button
        type="button"
        className="p-2 fixed right-6 bottom-7 z-20 text-2xl rounded-full bg-primary-500 text-secondary-50 hover:bg-secondary-200 hover:text-secondary-700 shadow-md"
        onClick={scrollUp}
      >
        <ChevronUpIcon className="w-8 text-secondary-50" />
      </button>
    )}
  </>
  )
};

export default ScrollToTop;

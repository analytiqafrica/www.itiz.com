"use client";

import { useEffect } from "react";

export default function PagePreloader() {
  useEffect(() => {
    const hidePreloader = () => {
      document.body.classList.remove("active-preloader-ovh");
      const preloader = document.querySelector<HTMLElement>(".preloader");
      if (preloader) {
        preloader.style.display = "none";
      }
    };

    const timeoutId = window.setTimeout(hidePreloader, 1500);
    window.addEventListener("load", hidePreloader);
    hidePreloader();

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("load", hidePreloader);
    };
  }, []);

  return (
    <div className="preloader">
      <div className="spinner" />
    </div>
  );
}

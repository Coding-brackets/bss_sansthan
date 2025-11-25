"use client";
import { useEffect } from "react";

export default function OrientationBlock() {
  useEffect(() => {
    const check = () => {
      if (window.innerHeight < window.innerWidth && window.innerWidth < 900) {
        document.getElementById("rotate-message").style.display = "flex";
        document.body.style.overflow = "hidden";
      } else {
        document.getElementById("rotate-message").style.display = "none";
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);
    check();

    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, []);

  return (
    <div id="rotate-message">
      Please rotate your device to portrait mode 📱
    </div>
  );
}

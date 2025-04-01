"use client"; // This makes it a client component

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return null; // No UI, just initializes AOS
};

export default AOSInitializer;

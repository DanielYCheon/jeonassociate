import React from "react";
import { useState, useEffect } from "react";

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    /*
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const targetPosition =
        document.getElementById("target-element").offsetTop;

      if (scrollPosition > targetPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    */
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="h-[50vh] flex items-center justify-center">
      <p
        className={`text-xl font-semibold transition-opacity duration-[2000ms] ${
          showMessage ? "opacity-100" : "opacity-0"
        }`}
      >
        Hello world
      </p>
    </div>
  );
};
export default ContactUs;

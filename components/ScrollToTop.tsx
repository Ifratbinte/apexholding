import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-[#3ab898] text-white h-12 w-12 flex items-center justify-center rounded-full text-4xl ${
        isVisible ? 'visible' : 'invisible'
      }`}
    >
      <MdKeyboardArrowUp/>
    </button>
  );
};

export default ScrollToTopButton;

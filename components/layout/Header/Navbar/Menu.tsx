"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./menu.module.css";
import Navigation from "./NavComponent";
import { FiAlignRight } from "react-icons/fi";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Auth dialog
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="container mx-auto z-20 py-6 px-2 xl:px-0">
      <div className="flex items-center justify-between">
        <div className="logo md:w-[250px] lg:w-[280px] xl:w-[350px] w-[220px]">
          <img src="/images/logo/logo.png" alt="" className="" />
        </div>
        <div
          className={`${styles.header_menu} ${
            isVisible ? styles.responsive_menu : ""
          }`}
        >
          <button
            onClick={() => setIsVisible((prevState) => !prevState)}
            className="lg:hidden"
          >
            <FaTimes className="text-xl xl:relative absolute bg-base-green rounded-full text-black hover:bg-slate-100 p-1.5 h-7 w-7 top-4 right-4" />
          </button>
          <img
            src="/images/logo/logo.png"
            alt=""
            className="mb-5 lg:hidden block"
          />
          <Navigation />
        </div>
        <button
          className="btn visible lg:hidden"
          onClick={() => setIsVisible((prevState) => !prevState)}
        >
          <FiAlignRight className="text-2xl lg:relative text-primary" />
        </button>
      </div>
    </div>
  );
};

export default Menu;

"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavItem = ({ title, items, path }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  console.log({ items });

  return (
    <li className="relative inline-block text-left">
      <Link
        href={path}
        className="inline-flex justify-center items-center w-full rounded-md lg:px-2 py-2 xl:mx-2 mx-0 lg:text-base xl:text-lg font-medium text-gray-800 hover:text-cyan-600 hover:transition-all "
        onClick={toggleDropdown}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;

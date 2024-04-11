"use client";
import React from "react";
import { motion } from "framer-motion";
function Nav() {
  const links = [
    { name: "About", link: "about" },
    { name: "Experience", link: "experience" },
    { name: "Project", link: "project" },
    { name: "Reach Out", link: "contact" },
  ];
  return (
    <div className="bg-[#8c5be4] md:flex flex-col gap-3 relative  px-[21px] py-[33px] md:px-[84px] m-auto max-w-[1150px] overflow-hidden hidden">
      <div className="bg-[#ffd567] p-5 flex  justify-center gap-10 border-4 border-black items-center font-[400] text-2xl ">
        {links.map((link, i) => (
          <a
            key={i}
            href={`#${link.link}`}
            className=" hover:rotate-12 transition-all"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Nav;

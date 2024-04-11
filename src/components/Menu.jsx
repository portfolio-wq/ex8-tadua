"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const variants = {
  open: {
    x: 0,
  },
  closed: {
    x: "-100%",
  },
  exit: {
    x: "-100%",
  },
};
function Menu() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };
  const links = [
    { name: "About", link: "about" },
    { name: "Experience", link: "experience" },
    { name: "Project", link: "project" },
    { name: "Reach Out", link: "contact" },
  ];
  return (
    <div className="md:hidden fixed w-[100%] h-screen z-30 right-0 origin-right flex justify-end">
      <AnimatePresence>
        {" "}
        <button
          onClick={handleMenu}
          className="text-[3rem] rounded-md cursor-pointer  absolute top-[30px] right-[10px] bg-[#ffd567]  "
        >
          {!menu ? <CiBurger /> : <IoMdClose />}
        </button>
        {menu && (
          <motion.div
            className="bg-white w-full"
            animate="open"
            initial="closed"
            exit="exit"
            transition={{ type: "spring", duration: 0.8 }}
            variants={variants}
          >
            <div className="flex items-center justify-center h-full bg-[#ffd567] flex-col gap-6 origin-right">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={`#${link.link}`}
                  onClick={() => setMenu(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Menu;

"use client";
import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Textrevel from "./animation/Textrevel";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#8c5be4] text-white flex flex-col gap-3 relative  px-[21px] py-[33px] md:px-[84px] m-auto max-w-[1150px] overflow-hidde"
    >
      <div className="text-3xl font-[500] md:text-5xl">
        {" "}
        <Textrevel> Like What you see ?</Textrevel>
      </div>

      <div className=" flex items-center">
        <div className="text-xl font-[300] md:text-3xl ">
          <Textrevel>
            Let’s chat then! I’m open to new & exciting opportunities 🤍
          </Textrevel>
        </div>
      </div>
      <Textrevel>
        {" "}
        <div className="flex gap-4 mt-5">
          <button className="bg-[#ffd567] text-black text-xl md:text-4xl border-2 border-black p-2">
            <IoMailOutline />
          </button>
          <button className="bg-[#ffd567] text-black text-xl md:text-4xl border-2 border-black p-2">
            <AiOutlineLinkedin />
          </button>
          <button className="bg-[#ffd567] text-black text-xl md:text-4xl border-2 border-black p-2">
            <FaXTwitter />
          </button>
          <button className="bg-[#ffd567] text-black text-xl md:text-4xl border-2 border-black p-2">
            <FaInstagram />
          </button>
        </div>
      </Textrevel>
    </section>
  );
}

export default Contact;

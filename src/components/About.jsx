"use client";
import React from "react";
import Image from "next/image";
import hero from "../../public/hero.jpg";
import Reveal from "./animation/Reveal";
function About() {
  return (
    <section
      id="about"
      className=" bg-[#ff9aa2]   relative  px-[21px] py-[100px] md:px-[84px] m-auto max-w-[1150px] overflow-hidden border-b-4 border-black"
    >
      <div className="flex justify-center md:justify-between gap-3 flex-wrap md:flex-nowrap items-center ">
        <div className="md:w-[70%]">
          <Reveal>
            <div className="flex items-center  gap-3">
              <h1 className="md:text-[50px] text-[40px] font-[700]">
                Glad You&apos;re here{" "}
              </h1>{" "}
              <svg
                className="w-fit"
                width="40px"
                height="40px"
                viewBox="0 0 1024 1024"
                fill="#000000"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M324.8 440c34.4 0 62.4-28 62.4-62.4s-28-62.4-62.4-62.4-62.4 28-62.4 62.4 28 62.4 62.4 62.4z m374.4 0c34.4 0 62.4-28 62.4-62.4s-28-62.4-62.4-62.4-62.4 28-62.4 62.4 28 62.4 62.4 62.4zM340 709.6C384 744 440.8 764.8 512 764.8s128-20.8 172-55.2c26.4-21.6 42.4-42.4 50.4-58.4 6.4-12 0.8-27.2-11.2-33.6s-27.2-0.8-33.6 11.2c-0.8 1.6-3.2 6.4-8 12-7.2 10.4-17.6 20-28.8 29.6-34.4 28-80.8 44.8-140.8 44.8s-105.6-16.8-140.8-44.8c-12-9.6-21.6-20-28.8-29.6-4-5.6-7.2-9.6-8-12-6.4-12-20.8-17.6-33.6-11.2s-17.6 20.8-11.2 33.6c8 16 24 36.8 50.4 58.4z"
                  fill=""
                />
                <path
                  d="M512 1010.4c-276.8 0-502.4-225.6-502.4-502.4S235.2 5.6 512 5.6s502.4 225.6 502.4 502.4-225.6 502.4-502.4 502.4zM512 53.6C261.6 53.6 57.6 257.6 57.6 508s204 454.4 454.4 454.4 454.4-204 454.4-454.4S762.4 53.6 512 53.6z"
                  fill=""
                />
              </svg>
            </div>
          </Reveal>
          <Reveal>
            {" "}
            <div className="md:text-2xl font-[300] md:leading-10 text-lg leading-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti odit quibusdam sint? Officia nulla expedita dolores
                magni eligendi, numquam placeat esse culpa aliquid facilis.
                Ipsum provident magni nulla voluptatibus et!
              </p>
              <br />
              <p>Scroll down to check out some of my work</p>
              <div className=" border-2 border-black w-fit ">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6V18M12 18L7 13M12 18L17 13"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="">
          <div className="shadow2 bg-white relative w-[250px] h-[300px] border-4 border-black self-center ">
            <Image src={hero} alt="" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

"use client";
import React from "react";
import { motion } from "framer-motion";
function Exp() {
  const experience = [
    {
      id: 0,
      name: "Google",
      time: "2022 - present",
      role: "Software Engineer",
      place: "atlanta",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      desc: [
        `Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.`,
      ],
    },
    {
      id: 1,
      name: "Google",
      time: "2022 - present",
      role: "Software Engineer",
      place: "atlanta",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      desc: [
        `Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.`,
      ],
    },
    {
      id: 3,
      name: "Google",
      time: "2022 - present",
      role: "Software Engineer",
      place: "atlanta",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      desc: [
        `Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.`,
      ],
    },
  ];
  return (
    <section
      id="experience"
      className=" bg-[#FFAF45] relative  px-[21px] py-[100px] md:px-[84px] m-auto max-w-[1150px] overflow-hidden border-b-4 border-black"
    >
      {experience.map((exp, i) => (
        <motion.div
          initial={{ y: 40 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          key={i}
          className="flex justify-between border-2  border-black  relative bg-white shadow2 flex-col md:flex-row  "
        >
          <div className="md:border-r-2 border-b-2 border-black md:p-4 md:w-[30%] p-2 bg-[#ff9aa2] ">
            <h2 className="text-xl font-semibold">{exp.name}</h2>
            <span>{exp.role}</span>
          </div>
          <div className="md:w-[70%] p-4 flex flex-col ">
            <span className="md:self-end">{exp.time}</span>
            <span className=" md:self-end">{exp.place}</span>

            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              molestias voluptates? Adipisci, impedit expedita voluptates,
              libero provident voluptatum labore autem molestias vel nobis quod
              laboriosam, quos vero aut odit maiores.
            </p>
            <div className="flex gap-3 mt-3 flex-wrap w-fit">
              {exp.tools.map((tool, i) => (
                <span
                  key={i}
                  className="bg-[#0ae2ff] px-2 py-1 border-2 border-black text-sm "
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

export default Exp;

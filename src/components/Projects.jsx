"use client";
import React from "react";
import { motion } from "framer-motion";
import image from "../../public/example-project.jpg";
import Image from "next/image";

function Projects() {
  const project = [
    {
      id: 0,
      name: "Project name",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      image: image,
      desc: [
        `The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.`,
        `Because this isn't real, here's some gibberish to fill space :)`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt.`,
        `Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.`,
      ],
    },
    {
      id: 1,
      name: "Project name",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      image: image,
      desc: [
        `The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.`,
        `Because this isn't real, here's some gibberish to fill space :)`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt.`,
        `Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.`,
      ],
    },
    {
      id: 2,
      name: "Project name",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      image: image,
      desc: [
        `The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.`,
        `Because this isn't real, here's some gibberish to fill space :)`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt.`,
        `Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.`,
      ],
    },
  ];
  return (
    <section
      id="project"
      className="bg-[#0ae2ff] relative  px-[21px] py-[100px] md:px-[84px] m-auto max-w-[1150px] overflow-hidden border-b-4 border-black"
    >
      <motion.div className="flex flex-col gap-10">
        {project.map((project, i) => (
          <motion.div
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            key={i}
            className="shadow2 bg-white   border-4 border-black relative cardsgrid"
          >
            <div className=" md:border-r-2 border-b-2 border-black flex flex-col justify-center md:p-[80px] p-[40px] gap-4 ">
              <h1 className="md:text-4xl text-3xl font-[500]">
                {project.name}
              </h1>
              <p>{project.desc[0]}</p>
              <button className="w-fit bg-[#ff9aa2] py-2 px-3 border-black border-2">
                Projet link
              </button>
            </div>
            <div className="bg-[#ff9aa2]  md:border-l-2 border-t-2 border-black pt-[30px] px-[20px]  overflow-hidden relative flex justify-center items-center">
              <Image src={project.image} className="rounded-md" alt="" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;

"use client";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

type Project = typeof projects[number];

export default function RecentProjects() {
  return (
    <section id="projects" className="py-20">
      <h1 className="text-center text-3xl md:text-5xl font-bold">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>

      <div className="mt-10 flex flex-wrap justify-center gap-x-20 gap-y-8 p-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, description, img, link }: Project) {
  return (
    <div className="flex h-[28rem] md:h-[32rem] w-[80vw] sm:w-[480px] items-center justify-center">
      <PinContainer title={link} href={link}>
        {/* Project preview */}
        <div className="relative mb-6 flex h-[30vh] sm:h-[40vh] w-[80vw] sm:w-[480px] items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="relative w-full h-full overflow-hidden bg-[#13162D] lg:rounded-3xl">
            <img
              src="/bg.png"
              alt="Background pattern"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Project image */}
          <img
            src={img}
            alt={`Screenshot of ${title}`}
            className="absolute bottom-0 z-10 w-full h-full object-contain"
          />
        </div>

        {/* Content */}
        <h3 className="line-clamp-1 text-base md:text-xl lg:text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm lg:text-xl font-light text-[#BEC1DD]">
          {description}
        </p>

        {/* GitHub link indicator */}
        <div className="mt-6 flex justify-end">
          <span className="flex items-center text-sm md:text-xs lg:text-xl text-purple">
            Check GitHub
            <FaLocationArrow className="ml-2" color="#CBACF9" />
          </span>
        </div>
      </PinContainer>
    </div>
  );
}


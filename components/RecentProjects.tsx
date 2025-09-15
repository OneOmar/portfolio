"use client";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

export default function RecentProjects() {
  return (
    <section id="projects" className="py-20">
      <h1 className="font-bold text-3xl md:text-5xl text-center">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-20 gap-y-8 p-4">
        {projects.map((item) => (
          <div
            key={item.id}
            className="flex h-[28rem] md:h-[32rem] w-[80vw] sm:w-[480px] items-center justify-center"
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex h-[30vh] sm:h-[40vh] w-[80vw] sm:w-[480px] items-center justify-center overflow-hidden mb-6">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]"
                >
                  <img src="/bg.png" alt="background" />
                </div>
                <img src={item.img} alt={item.title} className="absolute bottom-0 z-10" />
              </div>

              <h3 className="font-bold text-base md:text-xl lg:text-2xl line-clamp-1">{item.title}</h3>

              <p className="mt-2 text-sm lg:text-xl font-light text-[#BEC1DD] line-clamp-2">
                {item.description}
              </p>

              <div className="mt-6 flex items-center justify-end">
                <p className="flex items-center text-sm md:text-xs lg:text-xl text-purple">
                  Check GitHub
                  <FaLocationArrow className="ml-2" color="#CBACF9" />
                </p>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
}

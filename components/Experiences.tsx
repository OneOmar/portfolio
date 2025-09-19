import React from "react";
import { experiences } from "@/data";
import { Card } from "./ui/MovingBorder";

const Experience = () => {
  return (
    <section id="experiences" className="py-20">
      <h1 className="font-bold text-3xl md:text-5xl text-center">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {experiences.map((exp) => (
          <Card
            key={exp.id}
            duration={Math.floor(Math.random() * 10000) + 10000} // optional random animation
            borderRadius="1.75rem"
            style={{ borderRadius: `calc(1.75rem * 0.96)` }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col lg:flex-row lg:items-center p-6 md:p-5 lg:p-10 gap-4">
              <img
                src={exp.thumbnail}
                alt={exp.title}
                className="w-16 md:w-20 lg:w-32"
              />
              <div className="lg:ml-5">
                <h2 className="text-xl md:text-2xl font-bold text-start">{exp.title}</h2>
                <p className="mt-3 font-semibold text-white-100 text-start">{exp.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;

"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => (
  <footer className="w-full pt-20 pb-10 relative" id="contact">

    <div className="flex flex-col items-center text-center">
      <h1 className="font-bold text-3xl md:text-4xl lg:max-w-[45vw]">
        Let&apos;s build efficient and <span className="text-purple">impactful</span> web applications together.
      </h1>
      <p className="text-white-200 md:mt-10 my-5 max-w-lg">
        I specialize in full-stack development using React, Next.js, Java (Spring Boot), and Node.js. Reach out to discuss your project, collaboration, or how I can help bring your ideas to life.
      </p>
      <a href="mailto:elmanssouriomar@gmail.com">
        <MagicButton
          title="Get in Touch"
          icon={<FaLocationArrow />}
          position="right"
        // handleClick={() => window.location.href = "mailto:elmanssouriomar@gmail.com"}
        />
      </a>
    </div>

    <div className="flex flex-col md:flex-row mt-16 justify-between items-center gap-4 md:gap-0">
      <p className="text-sm md:text-base font-light md:font-normal">
        Copyright © 2025  Omar EL MANSSOURI
      </p>
      <div className="flex gap-6 md:gap-3">
        {socialMedia.map(({ id, img, url }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg saturate-180 cursor-pointer"
          >
            <img src={img} alt="icon" width={20} height={20} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;

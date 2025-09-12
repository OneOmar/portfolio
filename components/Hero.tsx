import { GridBackground } from "./ui/GridBackground";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <section className="min-h-screen pb-20 pt-36">
      {/* Spotlights */}
      <Spotlight
        className="absolute -top-40 -left-10 md:-left-32 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="absolute top-10 left-3/4 h-[80vh] w-[50vw]"
        fill="purple"
      />
      <Spotlight
        className="absolute top-28 left-80 h-[80vh] w-[50vw]"
        fill="blue"
      />

      {/* Grid Background */}
      <GridBackground />
    </section>
  );
};

export default Hero;

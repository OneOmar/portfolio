import { GridBackground } from "./ui/GridBackground";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden">

      {/* Spotlights */}
      <Spotlight
        className="absolute top-10 left-3/4 h-[80vh] w-[50vw]"
        fill="purple"
      />
      <Spotlight
        className="absolute top-28 left-80 h-[80vh] w-[50vw]"
        fill="blue"
      />

      {/* Grid Background and centered content */}
      <GridBackground />

    </section>
  );
};

export default Hero;

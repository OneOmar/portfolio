import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main
      className="
      relative 
      w-full   
      overflow-hidden
      bg-black-100             
      flex flex-col            
      items-center justify-center
      px-6 sm:px-10           
    "
    >
      <div className="w-full max-w-7xl mx-auto">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}

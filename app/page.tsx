import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main
    className="
      relative 
      w-full min-h-screen    
      overflow-hidden
      bg-black-100             
      flex flex-col            
      items-center justify-center 
      px-5 sm:px-10           
    "
  >
    <div className="w-full max-w-7xl">
      <Hero />
    </div>
  </main>
  );
}

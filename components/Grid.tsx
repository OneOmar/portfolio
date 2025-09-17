import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

export default function Grid() {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(({ id, ...props }) => (
          <BentoGridItem key={id} id={id} {...props} />
        ))}
      </BentoGrid>
    </section>
  );
}

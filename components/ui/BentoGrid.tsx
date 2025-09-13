'use client';

import { useCallback, useMemo, useState } from 'react';
import Lottie from 'react-lottie';
import { IoCopyOutline } from 'react-icons/io5';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { GridGlobe } from './GridGlobe';
import { BackgroundGradientAnimation } from './BackgroundGradientAnimation';
import MagicButton from './MagicButton';
import animationData from '@/data/confetti.json';

/* ------------------ Types ------------------ */
type BentoGridProps = {
  className?: string;
  children: ReactNode;
};

type BentoGridItemProps = {
  id: number;
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
};

/* ---------- BentoGrid (container) ---------- */
export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        'mx-auto grid grid-cols-1 md:grid-cols-6 md:grid-rows-5 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8',
        className
      )}
    >
      {children}
    </div>
  );
}

/* ------------------ tech stacks rendered on id === 3 ------------------ */
// export function TechStacks() {
//   const leftList = ["ReactJS", "Express", "Typescript"];
//   const rightList = ["VueJS", "NuxtJS", "GraphQL"];

//   return (
//     <div className="flex flex-1 justify-end items-start gap-4 mt-4 flex-wrap lg:flex-nowrap">
//       {/* TechStacks columns */}
//       <div className="flex gap-4">
//         {/* Left column */}
//         <div className="flex flex-col gap-2">
//           {leftList.map((item, i) => (
//             <span
//               key={i}
//               className="py-1 px-3 lg:py-2 lg:px-3 text-xs lg:text-sm text-center bg-[#10132E] rounded-lg opacity-90"
//             >
//               {item}
//             </span>
//           ))}
//         </div>

//         {/* Right column */}
//         <div className="flex flex-col gap-2">
//           {rightList.map((item, i) => (
//             <span
//               key={i}
//               className="py-1 px-3 lg:py-2 lg:px-3 text-xs lg:text-sm text-center bg-[#10132E] rounded-lg opacity-90"
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export function TechStacks() {
  const leftList = ["ReactJS", "Express", "Typescript"];
  const rightList = ["VueJS", "NuxtJS", "GraphQL"];

  return (
    <div className="absolute top-4 right-4 z-20 flex gap-4 flex-wrap lg:flex-nowrap">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          {leftList.map((item, i) => (
            <span
              key={i}
              className="py-1 px-3 lg:py-2 lg:px-3 text-xs lg:text-sm text-center bg-[#10132E] rounded-lg opacity-90"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {rightList.map((item, i) => (
            <span
              key={i}
              className="py-1 px-3 lg:py-2 lg:px-3 text-xs lg:text-sm text-center bg-[#10132E] rounded-lg opacity-90"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- BentoGridItem (main) ---------- */
export function BentoGridItem({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: BentoGridItemProps) {
  const [copied, setCopied] = useState(false);

  // Lottie options depend on copied state
  const lottieOptions = useMemo(
    () => ({
      loop: copied,
      autoplay: copied,
      animationData,
      rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
    }),
    [copied]
  );

  // copy handler
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText('test@contact.com');
      setCopied(true);
      // setTimeout(() => setCopied(false), 3000); // optional reset after 3s
    } catch (err) {
      console.error('Clipboard copy failed', err);
    }
  }, []);

  return (
    <div
      className={cn(
        'group/bento relative overflow-hidden flex flex-col justify-between min-h-[25vh] md:min-h-0 row-span-1 p-4 space-y-4 rounded-2xl border border-white/[0.3] shadow-input transition duration-200 hover:shadow-xl',
        className
      )}
      style={{
        background: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      {/* main background image */}
      {img && (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img src={img} alt="" className={cn(imgClassName, 'absolute object-cover')} />
        </div>
      )}

      {/* conditional decorations */}
      {id === 2 && <GridGlobe />}
      {id === 3 && <TechStacks />}
      {id === 5 && spareImg && (
        <img
          src={spareImg}
          alt=""
          className="absolute right-0 -bottom-5 w-full opacity-50 object-cover pointer-events-none"
        />
      )}
      {id === 6 && <BackgroundGradientAnimation />}

      {/* content */}
      <div
        className={cn(
          'relative flex flex-col flex-1 gap-4 z-10 transition duration-200 group-hover/bento:translate-x-2 pointer-events-none',
          titleClassName
        )}
      >
        {title && (
          <div className={cn('font-sans font-bold text-lg lg:text-2xl')}>
            {title}
          </div>
        )}

        {description && (
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3]">
            {description}
          </div>
        )}

        {/* card 6: copy button + lottie */}
        {id === 6 && (
          <div className="relative">
            <div className="absolute -bottom-5 right-0">
              <Lottie options={lottieOptions} height={200} width={400} />
            </div>

            <MagicButton
              title={copied ? 'Email is Copied!' : 'Copy my email address'}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        )}
      </div>
    </div>
  );
}

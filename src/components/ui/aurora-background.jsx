"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-gray-900 dark:bg-gray-800 text-white transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(`
              [--steal-gradient:repeating-linear-gradient(100deg,var(--steal)_0%,var(--steal)_10%]
              [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_10%,var(--transparent)_20%,]
              [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_15%,var(--indigo-400)_20%,var(--blue-300)_25%,var(--violet-300)_30%,var(--blue-500)_35%)]
              [background-image:var(--white-gradient),var(--aurora)]
              dark:[background-image:var(--dark-gradient),var(--aurora)]
              [background-size:200%,200%]
              [background-position:50%_50%,50%_50%]
              filter blur-[8px]
              after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
              after:dark:[background-image:var(--dark-gradient),var(--aurora)]
              after:[background-size:150%,150%] 
              after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
              pointer-events-none
              absolute -inset-[10px] opacity-40 will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_20%,var(--transparent)_80%)]`)}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};

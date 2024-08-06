"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/gallery-background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Optional: This makes the background fixed relative to the viewport
        minHeight: "100vh", // Ensures the div covers at least the viewport height
      }}
    >
      <HeroParallax products={products} />
    </div>
  );
}

export const products = [
  {
    title: "2018 Woods",
    link: "/team/2018",
    thumbnail: "/images/2018.jpeg",
  },
  {
    title: "2022 Woods",
    link: "/team/2022",
    thumbnail: "/images/2022.jpeg",
  },
  {
    title: "2023 Woods",
    link: "/team/2023",
    thumbnail: "/images/2023.jpeg",
  },
  {
    title: "2024 Woods",
    link: "/team/2024",
    thumbnail: "/images/2024.jpeg",
  },
  {
    title: "All Star Game",
    link: "/team/all-star",
    thumbnail: "/images/all-star.jpeg",
  },
  {
    title: "All Star Game",
    link: "/team/all-star",
    thumbnail: "/images/all-star.jpeg",
  },
  {
    title: "All Star Game",
    link: "/team/all-star",
    thumbnail: "/images/all-star.jpeg",
  },
 
];

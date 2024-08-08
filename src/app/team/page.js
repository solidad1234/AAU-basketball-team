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
        backgroundAttachment: "fixed", 
        minHeight: "100vh", 
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

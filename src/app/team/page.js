"use client";
import React from "react";
import "./HeroParallaxDemo.css"; 

export default function HeroParallaxDemo() {
  return (
    <div
      style={{
        // backgroundImage: "url(/images/gallery-background.jpeg)",
        backgroundColor: "#120e0e", 
        minHeight: "100vh", 
        padding: "50px 20px",
        marginTop: "16px",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className={`group relative h-[500px] mt-10 w-full flex items-center justify-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${
              index % 2 === 0 ? "animate-right" : "animate-left"
            }`}
            style={{
              backgroundImage: `url(${product.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <a href={product.link} className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xl font-bold transition-opacity duration-300 group-hover:opacity-80">
                {product.title}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export const products = [
  {
    title: "2018 Wolves",
    link: "/team/2018",
    thumbnail: "/images/2018.jpeg",  
  },
  {
    title: "2022 Wolves",
    link: "/team/2022",
    thumbnail: "/images/2022.jpeg",  
  },
  {
    title: "2023 Wolves",
    link: "/team/2023",
    thumbnail: "/images/2023.jpeg",  
  },
  {
    title: "2024 Wolves",
    link: "/team/2024",
    thumbnail: "/images/2024.jpeg",  
  },
  {
    title: "All Star Game",
    link: "/team/all-star",
    thumbnail: "/images/all-star.jpeg",  
  },
  {
    title: "UEBL Basketball Camp",
    link: "/team/camp",
    thumbnail: "/images/camp/img.jpeg",  
  },
  {
    title: "UEBL Classic",
    link: "/team/camp",
    thumbnail: "/images/classic.jpeg",  
  },
];

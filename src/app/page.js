"use client";

import { motion } from "framer-motion";
import React from "react";
import { Calendar } from "../components/ui/calendar";
import { Navbar } from "./navbar";

function CalendarDemo() {
  const [date, setDate] = React.useState(null);

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}

function AuroraBackgroundDemo() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center mt-16 flex flex-col justify-center items-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/homevid.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center px-4 py-10 w-full lg:w-3/4"
      >
        <div className="text-3xl md:text-7xl font-bold text-white text-center">
          {/* Your heading */}
        </div>
        
        <button className="bg-white rounded-full w-fit text-black px-4 py-2">
          {/* Your button */}
        </button>
        <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4 mt-16">
          {/* Your subheading */}
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative w-full lg:w-1/4 mt-10 flex justify-center items-center"
      >
        <CalendarDemo />
      </motion.div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-teal"> 
      <Navbar />
      <AuroraBackgroundDemo />
    </div>
  );
}

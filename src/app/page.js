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
    <div
      className="relative w-full h-screen bg-cover bg-center mt-16 bg-gray flex flex-col justify-center items-center"  
      style={{ backgroundImage: "url('/images/background.jpeg')" }}
    >
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
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          {/* Your heading */}
        </div>
        
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          {/* Your button */}
        </button>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 mt-16">
          {/* Your subheading */}
        </div>
      </motion.div>
      
      <div className="w-full lg:w-3/4 flex flex-col lg:flex-row justify-center gap-8 px-4 lg:px-10 mt-16 lg:mt-0">
        <motion.div
          initial={{ opacity: 0.0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <video
            className="rounded-md border video-style"
            src="/videos/homevid.mp4" 
            autoPlay
            muted
            loop
            controls
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0.0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full lg:w-1/2 hidden lg:block"  // Hide on mobile
        >
          <video
            className="rounded-md border"
            src="/videos/2024/2024vid3.mp4" 
            autoPlay
            muted
            loop
            controls
            style={{ width: '75%', height: '35vh', objectFit: 'cover' }}
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0.0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-full lg:w-1/4 mt-10 flex justify-center items-center"
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

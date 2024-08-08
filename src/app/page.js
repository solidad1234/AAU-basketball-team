"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

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
      className="relative w-full h-screen bg-cover bg-center mt-16 bg-gray"  
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
        className="relative flex flex-col gap-4 items-center justify-center px-4 py-10"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          
        </div>
        
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          
        </button>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 mt-16">
          
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 mt-16">
          <CalendarDemo />
        </div>
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

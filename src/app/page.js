"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { Calendar } from "../components/ui/calendar";
import { Navbar } from "./navbar";

function CalendarDemo() {
  const [date, setDate] = useState(null);

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
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleUnmuteClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center mt-16 flex flex-col justify-center items-center">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/homevid.mp4"
        autoPlay
        muted={isMuted}
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
        
        
        {/* <button className="bg-white rounded-full w-fit text-black px-4 py-2"> */}
          {/* Your button */}
        {/* </button> */}
        
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

      <button
        onClick={handleUnmuteClick}
        className="absolute bottom-10 bg-white text-black px-4 py-2 rounded-full"
      >
        {isMuted ? "Click to Unmute" : "Click to Mute"}
      </button>
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

"use client"
import React, { useState, useRef } from 'react';

export default function Video() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-10 items-center justify-center h-full">
  <div className="md:w-1/2 w-full pr-6 mb-6 md:mb-0 ">
    <h1 className="text-4xl font-bold mb-4">TurboCharge Your Journey</h1>
    <p className="text-lg mb-4 ">
      Normal charging can take hours, but with a TurboCharge chip you can charge up to 3x faster. 
      Managed by our advanced CMS dashboard system, unlock the full potential of your vehicle. 
      TurboCharge chip. Accelerate your journey.
    </p>
  </div>

  {/* Video on the right for md screens and above, below text for smaller screens */}
  <div className="md:w-1/2 w-full relative">
    <video
      ref={videoRef}
      className="w-full h-128 object-cover rounded-lg shadow-lg"
      autoPlay
      loop
      muted={isMuted}
      playsInline
    >
      <source src="/assets/final.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <button
      onClick={toggleMute}
      className="absolute bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg">
      {/* Button content likely continues here */}
    </button>
  </div>
</div>
  );
}

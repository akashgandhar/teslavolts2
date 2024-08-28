import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";
import { slideIn } from "../../../../utils/motion";

export default function Section4() {
  const divRef = useRef(null);

  const isInView = useInView(divRef, {
    triggerOnce: true,
  });

  return (
    <div
      ref={divRef}
      class="flex  min-h-[70vh] py-10 justify-center items-center overflow-hidden"
    >
      <motion.div
        variants={slideIn("down", "spring", 0.2, 2)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        class="text-center max-w-6xl mx-10"
      >
        <p class="my-3 text-sm tracking-widest text-indigo-500 uppercase">
          Teslavolts
        </p>
        <h1 class="my-3 text-3xl font-bold tracking-tight text-gray-800 md:text-5xl ">
          Control a large-scale network of your own smart EV charging stations
        </h1>
        <div>
          <p class="max-w-6xl mx-auto my-2 text-base text-gray-500 md:leading-relaxed md:text-xl ">
            Every charge station can connect to our EV charging platform because
            it combines cutting-edge technology, unmatched industry knowledge,
            and simple solutions for managing infrastructures of charge
            stations. The platform also supports open protocols and systems,
            enabling communication between all charge stations.
          </p>
          <p class="max-w-6xl mx-auto my-2 text-base text-gray-500 md:leading-relaxed md:text-xl ">
            Having a cloud-based platform ensures the platform’s high
            performance, security, availability, and scalability. Through the
            Open Charge Point Protocol, our platform is already interoperable
            with the majority of charging stations on the market (OCPP).
          </p>
        </div>
        <div class="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
          <a
            class="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b  shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px "
            href=""
          >
            Learn More
          </a>
          {/* <a
            class="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700  rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-300  hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px"
            href=""
          >
            Seach Examples
          </a> */}
        </div>
      </motion.div>
    </div>
  );
}

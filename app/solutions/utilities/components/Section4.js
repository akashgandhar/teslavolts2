

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
        Hazard: Avoid overloading the grid
        </h1>
        <div>
        In 2050, there are projected to be 600 million to 2 billion EVs on
            the road. These EVs must all be charged. Are you ready for the
            increase in demand with your infrastructure? Time of Use (ToU)
            charges may be employed as a technique to persuade EV drivers to
            switch to off-peak hours for charging. This helps EV drivers save
            money on their energy bills and guarantees that their vehicles are
            charged at times when the grid is least stressed, eliminating
            overloads. If too many EV drivers switch to off-peak charging, this
            also creates additional difficulties. However, smart charging can
            also help to allay these worries by distributing charging over a
            longer period of time and taking into account variables like charge
            status, charge rate, and other variables.
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

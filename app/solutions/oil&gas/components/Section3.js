


import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { slideIn, textVariant } from "../../../../utils/motion";

export default function Section3() {
  const divRef = useRef(null);

  const isInView = useInView(divRef, {
    triggerOnce: true,
  });

  return (
    <section class="px-2 py-32 bg-gradient-to-r from-blue-100/50 via-cyan-200-50 to-blue-100/50 md:px-8">
      <div class="container items-center px-8 mx-auto xl:px-5">
        <div class="flex flex-wrap items-center sm:-mx-3">
          <div class="w-full md:w-1/2 md:px-3">
            <motion.div
              variants={textVariant(0.2)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              class="w-full pb-6 space-y-6 sm:max-w-lg lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"
            >
              <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span class="block xl:inline">Empower your clients with an </span>
                <span class="block text-blue-500 xl:inline">
                  EV {" "}
                </span>
                <span class="block xl:inline">charging infrastructure </span>
              </h1>
              <p
                ref={divRef}
                class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                The demand for charging stations is rising due to the excess of
                EVs on the road, which has a significant influence on oil and
                gas firms as the number of EVs grows.
              </p>
              <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                You will gain from this revolution in the production of
                sustainable energy if you can adapt to shifting consumer
                expectations and help your clients decide to cut their
                emissions.
              </p>
              <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                <a
                  href="#_"
                  class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-500 rounded-md sm:mb-0 hover:bg-blue-600 sm:w-auto"
                >
                  Try It Free
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a
                  href="#_"
                  class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="w-full h-auto overflow-hidden rounded-md  sm:rounded-xl">
              <motion.img
                variants={slideIn("right", "spring", 0.2, 2)}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                src="/solutions/charge.png"
                className="mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

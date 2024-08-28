import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { slideIn, textVariant } from "../../../../utils/motion";

export default function Section2() {
  const divRef = useRef(null);

  const isInView = useInView(divRef, {
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div class="flex flex-wrap overflow-x-hidden">
      <div class="w-full sm:w-1/2 mb-10">
        <div class="container mx-auto h-full sm:p-10">
          <nav class="flex px-4 justify-between items-center">
            <div class="text-4xl font-bold">
              EV<span class="text-blue-500">.</span>
            </div>
            <div>
              <img
                src="https://image.flaticon.com/icons/svg/497/497348.svg"
                alt=""
                class="w-8"
              />
            </div>
          </nav>
          <motion.header
            variants={textVariant(0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0"
          >
            <div class="w-full">
              <h1 class="text-4xl lg:text-6xl font-bold">
                Business of<span class="text-blue-500"> EV</span> charging for
                Oil and Gas companies
              </h1>
              <div class="w-20 h-2 bg-blue-500 my-4"></div>
              <p ref={divRef} class="text-xl mb-5">
                The emergence of electric vehicles has indisputably
                revolutionized the transportation landscape in recent times.
                This leads to an interesting question – What’s next for oil and
                gas companies?
              </p>
              <p class="text-xl mb-5">
                Global oil corporations have started to recognize this shift and
                are consequently making significant investments in the EV
                charging infrastructure market. Many businesses are also
                adapting their traditional fuel stations to accommodate EV
                chargers.
              </p>
              <p class="text-xl mb-5">
                These developments are just a few examples of how oil and gas
                companies are balancing the need to meet the world’s growing
                energy demands while striving to minimize emissions.
              </p>
              <button class="bg-blue-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                Learn More
              </button>
            </div>
          </motion.header>
        </div>
      </div>
      <motion.img
        variants={slideIn("right", "spring", 0.2, 2)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        src="/solutions/petrol.png"
        alt="Leafs"
        class="w-full h-48 object-cover sm:h-screen sm:w-1/2 p-20"
      />
    </div>
  );
}

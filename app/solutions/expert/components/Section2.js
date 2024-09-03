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
                The<span class="text-blue-500"> EV</span> revolution is well
                underway.
              </h1>
              <div class="w-20 h-2 bg-blue-500 my-4"></div>
              <p ref={divRef} class="text-xl mb-10">
                Electric mobility is increasing quickly and is anticipated to
                keep growing tremendously. Utilities, charging station
                operators, and other players in the power industry are
                increasing their investments in infrastructure for fast, public,
                and home charging. At TeslaVolts, we concentrate on the
                components of the charging infrastructure, such as its
                accessibility and effectiveness. With our smart charging
                solutions, we also actively address grid-related problems. We
                closely collaborate with the entire ecosystem (such as
                automobile OEMs, utilities, grid operators, etc.) to address as
                many other challenges as we can in order to do this.
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
        src="/solutions/car.png"
        alt="Leafs"
        class="w-full h-48 object-contain sm:h-screen sm:w-1/2 p-20"
      />
    </div>
  );
}

import React from "react";

export default function Section4() {
  return (
    <div class="flex min-h-[70vh] py-10 justify-center items-center ">
      <div class="text-center max-w-6xl mx-10">
        <p class="my-3 text-sm tracking-widest text-indigo-500 uppercase">
          Teslavolts
        </p>
        <h1 class="my-3 text-3xl font-bold tracking-tight text-gray-800 md:text-5xl ">
        Understanding your unique requirements
        </h1>
        <div>
          <p class="max-w-6xl mx-auto my-2 text-base text-gray-500 md:leading-relaxed md:text-xl ">
          Every client has a unique set of specifications for their EV charging business.
As a TeslaVolts customer, you benefit from our guidance throughout the entire process, from assessing your needs and making appropriate plans to selecting the best solution for your company and guaranteeing a seamless integration of the solution.
          </p>
        </div>
        <div class="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
          <a
            class="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b  shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px "
            href=""
          >
            Read about our EV platform
          </a>
          {/* <a
            class="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700  rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-300  hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px"
            href=""
          >
            Seach Examples
          </a> */}
        </div>
      </div>
    </div>
  );
}

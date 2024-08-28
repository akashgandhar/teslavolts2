import React from "react";

export default function Section4() {
  return (
    <div class="flex min-h-[70vh] py-10 justify-center items-center ">
      <div class="text-center max-w-6xl mx-10">
        <p class="my-3 text-sm tracking-widest text-indigo-500 uppercase">
          Teslavolts
        </p>
        <h1 class="my-3 text-3xl font-bold tracking-tight text-gray-800 md:text-5xl ">
          eMobility creates lasting connections
        </h1>
        <div>
          <p class="max-w-6xl mx-auto my-2 text-base text-gray-500 md:leading-relaxed md:text-xl ">
            A renowned automaker was searching for a business partner with
            knowledge of the EV charging services industry. Our EV charging
            management solution allowed them to concentrate on selling electric
            automobiles, which is their primary business. With white label EV
            services like connected chargers, apps, and RFID cards, automakers
            and dealerships can create more continuing contact touchpoints with
            customers using TeslaVolts’ technology. Businesses can provide
            better EV driving and charging experiences for their consumers by
            utilising our tailored roaming services. Customers can be allowed to
            charge at as many different charge points as they choose using a
            charging card or an app.
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
      </div>
    </div>
  );
}

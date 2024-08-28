import React from "react";

export default function Section5() {
  return (
    <section class="px-2 py-32 bg-gradient-to-r from-blue-100/50 via-cyan-200-50 to-blue-100/50 md:px-8">
      <div class="container items-center px-8 mx-auto xl:px-5">
        <div class="flex flex-wrap items-center sm:-mx-3">
          <div class="w-full md:w-1/2">
            <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              <img src="/images/dash.webp" className="mix-blend-multiply" />
            </div>
          </div>

          <div class="w-full md:w-1/2 md:px-3 text-right ">
            <div class="w-full pb-6 space-y-6  md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span class="block xl:inline">
                We’re happy to share our knowledge at events{" "}
                </span>
                <span class="block text-blue-500 xl:inline">
                  EV charging software.
                </span>
              </h1>
              <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
              We encourage people to join the EV revolution by outlining the success of our business cases as an established EV company and pioneer in smart charging.
              </p>
              <div class="relative flex flex-col sm:flex-row sm:space-x-4 justify-end">
                <a
                  href="#_"
                  class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-500 rounded-md sm:mb-0 hover:bg-blue-600 sm:w-auto"
                >
                  Invite Us at Your Event                  <svg
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
                {/* <a
                  href="#_"
                  class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                >
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Footer() {
  return (
    <>
      <footer class="w-full">
        <hr class=" text-blue-500" />
        <div class="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
            <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <a
                href="https://pagedone.io/"
                class="flex justify-center lg:justify-start"
              >
                <img src="/logo.svg" alt="logo" class="-ml-10" />
              </a>
              <p class="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
                Trusted in more than 100 countries & 5 million customers. Have
                any query ?
              </p>
              <a
                href="javascript:;"
                class="py-2.5 px-5 h-9 block w-fit bg-blue-500 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-blue-600 lg:mx-0"
              >
                Reserve Demo
              </a>
            </div>
            <div class="lg:mx-auto text-left ">
              <h4 class="text-lg text-gray-900 font-medium mb-7">
                EV Services
              </h4>
              <ul class="text-sm  transition-all duration-500">
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class="text-gray-600 hover:text-gray-900"
                  >
                    Intelligent Charging
                  </a>
                </li>
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class=" text-gray-600 hover:text-gray-900"
                  >
                    Fleet Management
                  </a>
                </li>
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class=" text-gray-600 hover:text-gray-900"
                  >
                    Charging-as-a-Service
                  </a>
                </li>
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class=" text-gray-600 hover:text-gray-900"
                  >
                    Billing & Payments
                  </a>
                </li>
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class=" text-gray-600 hover:text-gray-900"
                  >
                    Remote Management
                  </a>
                </li>
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class=" text-gray-600 hover:text-gray-900"
                  >
                    TeslaVolts EV
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    class=" text-gray-600 hover:text-gray-900"
                  >
                    E-AMRIT
                  </a>
                </li>
              </ul>
            </div>
            <div class="lg:mx-auto text-left ">
              <h4 class="text-lg text-gray-900 font-medium mb-7">Resources</h4>
              <ul class="text-sm  transition-all duration-500">
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class="text-gray-600 hover:text-gray-900"
                  >
                    TeslaVolts APP
                  </a>
                </li>
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class=" text-gray-600 hover:text-gray-900"
                  >
                    Downloads
                  </a>
                </li>
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class=" text-gray-600 hover:text-gray-900"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    class=" text-gray-600 hover:text-gray-900"
                  >
                    Teslavolts API
                  </a>
                </li>
              </ul>
            </div>
            <div class="lg:mx-auto text-left">
              <h4 class="text-lg text-gray-900 font-medium mb-7">About Us</h4>
              <ul class="text-sm  transition-all duration-500">
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class="text-gray-600 hover:text-gray-900"
                  >
                    Contact Us
                  </a>
                </li>
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class=" text-gray-600 hover:text-gray-900"
                  >
                    Request a Demo
                  </a>
                </li>
                {/* <li class="mb-6"><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Documentation</a></li>
                <li><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">User Guide</a></li> */}
              </ul>
            </div>
            <div class="lg:mx-auto text-left">
              <h4 class="text-lg text-gray-900 font-medium mb-7">
                Download App
              </h4>
              <ul class="text-sm  transition-all duration-500">
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class="text-gray-600 hover:text-gray-900"
                  >
                    <img
                      alt="Play Store icon"
                      loading="lazy"
                      width="168"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      // style="color:transparent"
                      src="/icons/playstore.svg"
                    />
                  </a>
                </li>
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class=" text-gray-600 hover:text-gray-900"
                  >
                    <img
                      alt="ios icon"
                      loading="lazy"
                      width="168"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      // style="color:transparent"
                      src="/icons/ios.svg"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="py-7 border-t border-gray-200">
            <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span class="text-sm text-gray-500 ">
                ©<a href="https://pagedone.io/">Teslavots</a> 2024, All rights
                reserved.
              </span>
              <div class="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                <a
                  href="javascript:;"
                  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g id="Social Media">
                      <path
                        id="Vector"
                        d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </a>

                <a
                  href="javascript:;"
                  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                >
                  <svg
                    class="w-[1rem] h-[1rem] text-white"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

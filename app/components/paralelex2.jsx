import React from "react";
import StickyScrollReveal from "./stickyScroll";

export default function Paralelex2() {
  return (
    <>
      <section class="1">
        <section style={{
          backgroundImage: 'none',
          backgroundColor
        }} class="parallax">
          <div class="parallax-inner flex items-center justify-center">
            <div class="form-container h-fit">
              <section class="relative flex  w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6">
                <div class="mt-8 flex flex-col place-items-center gap-5">
                  <div class="reveal-up mt-5 flex flex-col gap-3 text-center">
                    <h2 class="text-4xl font-bold  max-md:text-2xl">
                      Our Solutions For Your Bussiness
                    </h2>
                  </div>
                  <div class="mt-6 flex max-w-[100%] flex-col place-content-center gap-8 max-lg:flex-col lg:gap-16">
                    <div className="w-full flex items-center justify-center flex-row ">
                      <div class="reveal-up flex w-[750px] gap-8 rounded-xl border-[1px] outline-blue-500 outline outline-[1px] h-fit bg-secondary p-8 max-md:w-[320px]">
                        <div class="text-4xl max-md:text-2xl">
                          <i class="bi bi-globe">
                            <img
                              src="/logoSmall.png"
                              alt=""
                              className="w-14 h-8 object-cover aspect-square"
                            />
                          </i>
                        </div>

                        <div class="flex flex-col gap-4 p-1">
                          <h2 class="text-2xl max-md:text-xl">
                            EV operators & service providers
                          </h2>
                          <p class=" max-md:text-sm">
                            EV charging solutions for charge point operators.
                            Set-up up a successful EV business model with our
                            smart EV solutions.
                          </p>
                        </div>
                      </div>

                      <div class="reveal-up flex justify-center h-[200px] w-[450px] gap-8 rounded-xl bg-secondary max-md:w-[320px]">
                        {/* <div class="text-4xl max-md:text-2xl">
                <i class="bi bi-bar-chart-fill"></i>
              </div> */}

                        <img
                          src="/new/v6.svg"
                          alt=""
                          className="animateBounce object-contain"
                        />
                        <div class="flex flex-col gap-4">
                          {/* <h2 class="text-2xl max-md:text-xl">Insights</h2> */}

                          {/* <p class=" max-md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  quasi consequuntur, distinctio laboriosam
                </p> */}
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex items-center justify-center flex-row ">
                      <div class="reveal-up flex justify-center h-[200px] w-[450px] gap-8 rounded-xl bg-secondary max-md:w-[320px]">
                        {/* <div class="text-4xl max-md:text-2xl">
                <i class="bi bi-bar-chart-fill"></i>
              </div> */}

                        <img
                          src="/new/v2.svg"
                          alt=""
                          className="animateBounce aspect-square"
                        />
                        <div class="flex flex-col gap-4">
                          {/* <h2 class="text-2xl max-md:text-xl">Insights</h2> */}

                          {/* <p class=" max-md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  quasi consequuntur, distinctio laboriosam
                </p> */}
                        </div>
                      </div>

                      <div class="reveal-up flex h-[200px] w-[750px] gap-8 rounded-xl border-[1px] outline-blue-500 outline outline-[1px] bg-secondary p-8 max-md:w-[320px]">
                        <div class="text-4xl max-md:text-2xl">
                          <i class="bi bi-globe">
                            <img
                              src="/logoSmall.png"
                              alt=""
                              className="w-24 h-8 object-contain"
                            />
                          </i>
                        </div>

                        <div class="flex flex-col gap-4">
                          <h2 class="text-2xl max-md:text-xl">
                            Utilities and energy companies
                          </h2>
                          <p class=" max-md:text-sm">
                            Utility & energy company solutions for EV charging.
                            The EV market gives utilities access to new,
                            profitable business models. Learn what our
                            intelligent EV solutions can achieve for you.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex items-center justify-center flex-row gap-8 ">
                      <div class="reveal-up flex h-[200px] w-[600px] gap-8 rounded-xl border-[1px] outline-blue-500 outline outline-[1px] bg-secondary p-8 max-md:w-[320px]">
                        <div class="text-4xl max-md:text-2xl">
                          <i class="bi bi-globe">
                            <img
                              src="/logoSmall.png"
                              alt=""
                              className="w-24 h-8 object-contain"
                            />
                          </i>
                        </div>

                        <div class="flex flex-col gap-4">
                          <h2 class="text-2xl max-md:text-xl">
                            Oil & Gas companies
                          </h2>
                          <p class=" max-md:text-sm">
                            Gas and oil industries can benefit from intelligent
                            EV charging options. TeslaVolts is here to support
                            you.
                          </p>
                        </div>
                      </div>

                      <div class="reveal-up flex h-[200px] w-[600px] gap-8 rounded-xl border-[1px] outline-blue-500 outline outline-[1px] bg-secondary p-8 max-md:w-[320px]">
                        <div class="text-4xl max-md:text-2xl">
                          <i class="bi bi-globe">
                            <img
                              src="/logoSmall.png"
                              alt=""
                              className="w-24 h-8 object-contain"
                            />
                          </i>
                        </div>

                        <div class="flex flex-col gap-4">
                          <h2 class="text-2xl max-md:text-xl">
                            Automotive Businesses
                          </h2>
                          <p class="text-sm ">
                            Automotive sector technologies for intelligent EV
                            charging. We support automotive manufacturers as
                            they successfully enter the emerging EV market.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex items-center justify-center flex-row ">
                      <div class="reveal-up flex h-[200px] w-[750px] gap-8 rounded-xl border-[1px] outline-blue-500 outline outline-[1px] bg-secondary p-8 max-md:w-[320px]">
                        <div class="text-4xl max-md:text-2xl">
                          <i class="bi bi-globe">
                            <img
                              src="/logoSmall.png"
                              alt=""
                              className="w-20 h-8 object-contain aspect-square"
                            />
                          </i>
                        </div>

                        <div class="flex flex-col gap-4">
                          <h2 class="text-2xl max-md:text-xl">
                            EV charging infrastructure
                          </h2>
                          <p class=" max-md:text-sm">
                            Build a more intelligent EV charging infrastructure.
                            With our cloud-based EV charging platform, we assist
                            businesses all over the world in setting up their
                            own EV charging infrastructure.
                          </p>
                        </div>
                      </div>

                      <div class="reveal-up flex justify-center h-[200px] w-[450px] gap-8 rounded-xl bg-secondary max-md:w-[320px]">
                        {/* <div class="text-4xl max-md:text-2xl">
                <i class="bi bi-bar-chart-fill"></i>
              </div> */}

                        <img
                          src="/new/v3.svg"
                          alt=""
                          className="animateBounce aspect-square"
                        />
                        <div class="flex flex-col gap-4">
                          {/* <h2 class="text-2xl max-md:text-xl">Insights</h2> */}

                          {/* <p class=" max-md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  quasi consequuntur, distinctio laboriosam
                </p> */}
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-center flex-row ">
                      <div class="reveal-up flex justify-center h-[200px] w-[450px] gap-8 rounded-xl bg-secondary max-md:w-[320px]">
                        {/* <div class="text-4xl max-md:text-2xl">
                <i class="bi bi-bar-chart-fill"></i>
              </div> */}

                        <img
                          src="/new/v.svg"
                          alt=""
                          className="animateBounce aspect-square"
                        />
                        <div class="flex flex-col gap-4">
                          {/* <h2 class="text-2xl max-md:text-xl">Insights</h2> */}

                          {/* <p class=" max-md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  quasi consequuntur, distinctio laboriosam
                </p> */}
                        </div>
                      </div>

                      <div class="reveal-up flex h-[200px] w-[750px] gap-8 rounded-xl border-[1px] outline-blue-500 outline outline-[1px] bg-secondary p-8 max-md:w-[320px]">
                        <div class="text-4xl max-md:text-2xl">
                          <i class="bi bi-globe">
                            <img
                              src="/logoSmall.png"
                              alt=""
                              className="w-24 h-8 object-contain"
                            />
                          </i>
                        </div>

                        <div class="flex flex-col gap-4">
                          <h2 class="text-2xl max-md:text-xl">
                            EV Expert Advice
                          </h2>
                          <p class=" max-md:text-sm">
                            Embrace the EV revolution with a unique business
                            plan. Want to enter the EV market but are unsure of
                            where to begin? Give our EV charging specialists a
                            call.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* <section class="parallax-1">
          <div class="parallax-inner">
            <br />
            <h1>Beaches</h1>
            <br />
          </div>
        </section> */}
      </section>
      <section class="2"></section>
    </>
  );
}

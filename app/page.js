"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { DirectionAwareHoverDemo } from "./components/DirectionAwareHoverDemo";
import Video from "./components/Video";
import StickyScrollReveal from "./components/stickyScroll";
import { Montserrat, Rubik } from "next/font/google";
import { FeaturesSectionDemo } from "./components/Numbers";
import Paralelex from "./components/paralelex";
import GlassSection from "./components/GlassSection";

export default function Home() {
  const RESPONSIVE_WIDTH = 1024;
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkScreenWidth = () => {
        setIsHeaderCollapsed(window.innerWidth < RESPONSIVE_WIDTH);
      };

      checkScreenWidth(); // Check on initial load
      window.addEventListener("resize", checkScreenWidth); // Check on resize

      // Ensure elements are defined before accessing them
      const collapseBtn = document.getElementById("collapse-btn");
      const collapseHeaderItems = document.getElementById(
        "collapsed-header-items"
      );

      function onHeaderClickOutside(e) {
        if (collapseHeaderItems && !collapseHeaderItems.contains(e.target)) {
          toggleHeader();
        }
      }

      // Add event listeners that depend on the document object here
      document.addEventListener("click", onHeaderClickOutside);

      // Clean up the event listener on component unmount
      return () => {
        if (typeof window !== "undefined") {
          window.removeEventListener("resize", checkScreenWidth);
          document.removeEventListener("click", onHeaderClickOutside);
        }
      };
    }
  }, []); // Empty dependency array ensures this effect runs only once after mount

  let headerWhiteBg = false;

  const collapseBtn = document.getElementById("collapse-btn");
  const collapseHeaderItems = document.getElementById("collapsed-header-items");

  function onHeaderClickOutside(e) {
    if (!collapseHeaderItems.contains(e.target)) {
      toggleHeader();
    }
  }

  function toggleHeader() {
    if (isHeaderCollapsed) {
      collapseHeaderItems.classList.add("opacity-100");
      collapseHeaderItems.style.width = "60vw";
      collapseBtn.classList.remove("bi-list");
      collapseBtn.classList.add("bi-x", "max-lg:fixed");
      setIsHeaderCollapsed(false); // Update state
      setTimeout(
        () => window.addEventListener("click", onHeaderClickOutside),
        1
      );
    } else {
      collapseHeaderItems.classList.remove("opacity-100");
      collapseHeaderItems.style.width = "0vw";
      collapseBtn.classList.remove("bi-x", "max-lg:fixed");
      collapseBtn.classList.add("bi-list");
      setIsHeaderCollapsed(true); // Update state
      window.removeEventListener("click", onHeaderClickOutside);
    }
  }

  function responsive() {
    if (window.innerWidth > RESPONSIVE_WIDTH) {
      collapseHeaderItems.style.width = "";
    } else {
      setIsHeaderCollapsed(true);
    }
  }

  window.addEventListener("resize", responsive);

  // Animations using GSAP
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".reveal-up", {
    opacity: 0,
    y: "100%",
  });

  gsap.to("#dashboard", {
    // boxShadow: "0px 15px 25px -5px #7e22ceaa",
    duration: 0.3,
    scrollTrigger: {
      trigger: "#hero-section",
      start: "60% 60%",
      end: "80% 80%",
    },
  });

  gsap.to("#dashboard", {
    scale: 1,
    translateY: 0,
    rotateX: "0deg",
    scrollTrigger: {
      trigger: "#hero-section",
      start: window.innerWidth > RESPONSIVE_WIDTH ? "top 95%" : "top 70%",
      end: "bottom bottom",
      scrub: 1,
    },
  });

  // FAQ accordion functionality
  const faqAccordion = document.querySelectorAll(".faq-accordion");

  faqAccordion.forEach(function (btn) {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.maxHeight === "200px") {
        content.style.maxHeight = "0px";
        content.style.padding = "0px 18px";
      } else {
        content.style.maxHeight = "200px";
        content.style.padding = "20px 18px";
      }
    });
  });

  // Reveal section animations
  const sections = gsap.utils.toArray("section");

  sections.forEach((sec) => {
    const revealUptimeline = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: sec,
        start: "10% 80%",
        end: "20% 90%",
      },
    });

    revealUptimeline.to(sec.querySelectorAll(".reveal-up"), {
      opacity: 1,
      duration: 0.8,
      y: "0%",
      stagger: 0.2,
    });
  });
  return (
    <div class="flex min-h-[100vh] flex-col bg-slate-50 text-black ">
      <section
        class="hero-section relative  flex min-h-[100vh] w-full pt-10 max-w-[100vw] flex-col overflow-hidden max-md:mt-[50px]"
        id="hero-section"
      >
        <div className=" absolute w-full h-[100vh] bg-cover top-0">
          {/* video  */}
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover mix-blend-multiply"
          >
            <source src="/new/hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div class="flex h-full min-h-[100vh] w-full flex-col place-content-center gap-6 p-[5%] max-xl:place-items-center max-lg:p-4">
          <div class="flex flex-col place-content-center items-center ">
            <div
              class={`custom-font reveal-up text-[#fff] text-center text-6xl font-semibold leading-[80px] max-lg:text-4xl max-md:leading-snug`}
            >
              <span> Empowering Seamless </span>
              <br />
              <span class=""> Electric Mobility Solutions</span>
            </div>
            <div class="reveal-up mt-10 max-w-[600px] p-2 text-center text-xl max-lg:max-w-full text-[#ddd]">
              Harness TeslaVolts' powerful platform to effortlessly scale across
              markets, address any use case, and develop your unique offerings,
              all while maintaining full control over your business operations.
            </div>

            <div class="reveal-up mt-10 flex place-items-center gap-4">
              <a
                class="btn bg-blue-500 text-white shadow-lg shadow-primary transition-transform duration-[0.3s] hover:scale-x-[1.03]"
                href=""
              >
                Reserve Demo
              </a>
              {/* <a
                class="btn flex gap-2 !bg-black !text-white transition-colors duration-[0.3s] hover:!bg-white hover:!text-black"
                href=""
              >
                <i class="bi bi-play-circle-fill"></i>
                <span>Learn more</span>
              </a> */}
            </div>
          </div>

          <div
            class="reveal-up relative  flex w-full place-content-center place-items-center"
            id="dashboard-container"
          >
            <div
              class="relative max-w-[80%] flex items-center justify-center flex-col overflow-hidden rounded-xl bg-transparent max-md:max-w-full"
              id="dashboard"
            >
              <img
                src="/new/dash.png"
                alt="dashboard"
                class="h-full w-[70%] object-cover max-lg:object-contain"
              />
              <div
                class={`custom-font text-gray-800 reveal-up pt-20 text-center text-6xl font-semibold leading-[80px] max-lg:text-4xl max-md:leading-snug`}
              >
                <span> The global software platform </span>
                <br />
                <span class=""> for your EV charging infrastructure</span>
              </div>
            </div>

            {/* <div class="hero-img-bg-grad absolute left-[20%] top-5 h-[200px] w-[200px]"></div> */}
          </div>
        </div>
      </section>

      <section class="relative flex w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-8 pt-16">
        <h2 class="reveal-up text-3xl max-md:text-xl font-bold">
          Fueling EV Growth with Crucial Expertise
        </h2>

        <div class="reveal-up carousel-container w-full"></div>
        <FeaturesSectionDemo />
      </section>

      <Paralelex />

      {/* <GlassSection/> */}

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
                    EV charging solutions for charge point operators. Set-up up
                    a successful EV business model with our smart EV solutions.
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
                    Utility & energy company solutions for EV charging. The EV
                    market gives utilities access to new, profitable business
                    models. Learn what our intelligent EV solutions can achieve
                    for you.
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
                  <h2 class="text-2xl max-md:text-xl">Oil & Gas companies</h2>
                  <p class=" max-md:text-sm">
                    Gas and oil industries can benefit from intelligent EV
                    charging options. TeslaVolts is here to support you.
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
                  <h2 class="text-2xl max-md:text-xl">Automotive Businesses</h2>
                  <p class="text-sm ">
                    Automotive sector technologies for intelligent EV charging.
                    We support automotive manufacturers as they successfully
                    enter the emerging EV market.
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
                    Build a more intelligent EV charging infrastructure. With
                    our cloud-based EV charging platform, we assist businesses
                    all over the world in setting up their own EV charging
                    infrastructure.
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
                  <h2 class="text-2xl max-md:text-xl">EV Expert Advice</h2>
                  <p class=" max-md:text-sm">
                    Embrace the EV revolution with a unique business plan. Want
                    to enter the EV market but are unsure of where to begin?
                    Give our EV charging specialists a call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <StickyScrollReveal/> */}

      <section class="relative bg-cover flex min-h-[80vh] w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6">
        <div class="reveal-up flex min-h-[60vh] place-content-center place-items-center gap-[10%] max-lg:flex-col max-lg:gap-10">
          <div class="flex">
            <div class="max-h-[650px] max-w-[850px] overflow-hidden rounded-lg   transition-all duration-150 ease-in">
              <img
                loading="lazy"
                src="https://firebasestorage.googleapis.com/v0/b/teslavolts-1fde8.appspot.com/o/chip(1).png?alt=media&token=1b52b7ee-96e2-4554-83fe-535b39068f7d"
                alt="coding"
                class="h-full w-full object-cover hover:animate-pulse"
              />
            </div>
          </div>
          <div class="mt-6 flex max-w-[500px] flex-col gap-4">
            <h2 class="text-4xl font-bold max-md:text-2xl">
              EV Charging Network Infrastructure
            </h2>

            <div class="mt-4 flex flex-col gap-3">
              <h4 class="text-xl font-medium text-blue-500">
                <i class="bi bi-check-all !text-2xl "></i>
                AI powered
              </h4>
              <span class="text-lg  max-md:text-base">
                Our AI-powered platform simplifies charging network management
                with advanced technology and user-friendly tools.
              </span>
            </div>
            <div class="mt-4 flex flex-col gap-3">
              <h4 class="text-xl font-medium text-blue-500">
                <i class="bi bi-check-all !text-2xl "></i>
                One for All
              </h4>
              <span class="text-lg  max-md:text-base">
                Whether you are a charge point operator, electric mobility
                service provider, energy/utility company, oil and gas firm, or a
                vehicle manufacturer, our platform offers a smart and tailored
                solution to align with your unique business model.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="relative flex min-h-[80vh] w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6">
        <div class="reveal-up flex min-h-[60vh] place-content-center place-items-center gap-[10%] max-lg:flex-col max-lg:gap-10">
          <div class="mt-6 flex max-w-[450px] flex-col gap-4">
            <h2 class="text-4xl font-bold max-md:text-2xl">
              Introducing our Mobile App
            </h2>

            <div class="mt-4 flex flex-col gap-3">
              <h4 class="text-xl font-medium text-blue-500">
                <i class="bi bi-check-all !text-2xl"></i>
                Real-time Charge Point Tracking
              </h4>
              <span class="text-lg  max-md:text-base">
                Our app provides real-time updates on charge point availability
                and status, helping you plan your journey efficiently.
              </span>
            </div>
            <div class="mt-4 flex flex-col gap-3">
              <h4 class="text-xl font-medium text-blue-500">
                <i class="bi bi-check-all !text-2xl "></i>
                Convenient Payments:
              </h4>
              <span class="text-lg  max-md:text-base">
                Pay for charging sessions directly through the app, eliminating
                the need for cash or physical cards.
              </span>
            </div>
          </div>

          <div class="flex">
            <div class="max-h-[650px] max-w-[850px] overflow-hidden rounded-lg  ">
              <img
                src="/phone.png"
                alt="coding"
                class="h-full w-full object-contain animateBounce  "
              />
            </div>
          </div>
        </div>
      </section>

      <section class="relative flex min-h-[80vh] w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden">
        <div class="mt-8 flex flex-col place-items-center gap-5">
          <div class="reveal-up mt-5 flex flex-col gap-3 text-center">
            <h2 class="text-4xl font-bold  max-md:text-2xl">
              Our Specialities
            </h2>
          </div>

          <div className="reveal-up w-full">
            <DirectionAwareHoverDemo />
          </div>
          <div className="reveal-up w-full">
            <Video />
          </div>
        </div>
      </section>

      {/* <section class="mt-5 flex min-h-[80vh] w-full flex-col place-content-center place-items-center p-[2%]">
        <h2 class="text-4xl font-bold  max-md:text-2xl">
          You're in good hands
        </h2>
        <div class="mt-8 gap-10 space-y-8 max-md:columns-1 lg:columns-2 xl:columns-3">
          <div class="reveal-up flex h-fit w-[350px] break-inside-avoid flex-col gap-4 rounded-lg border-[1px] border-outlineColor bg-secondary p-4 max-lg:w-[320px]">
            <p class="mt-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
              vero.
            </p>

            <div class="flex place-items-center gap-3">
              <div class="h-[50px] w-[50px] overflow-hidden rounded-full">
                <img
                  src="/assets/images/people/women.jpg"
                  class="h-full w-full object-cover"
                  alt="women"
                />
              </div>
              <div class="flex flex-col gap-1">
                <div class="font-semibold">Trich B</div>
                <div class="">AMI, ceo</div>
              </div>
            </div>
          </div>
          <div class="reveal-up flex h-fit w-[350px] break-inside-avoid flex-col gap-4 rounded-lg border-[1px] border-outlineColor bg-secondary p-4 max-lg:w-[320px]">
            <p class="mt-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              deserunt delectus consectetur enim cupiditate ab nemo voluptas
              repellendus qui quas..
            </p>

            <div class="flex place-items-center gap-3">
              <div class="h-[50px] w-[50px] overflow-hidden rounded-full">
                <img
                  src="/assets/images/people/man.jpg"
                  class="h-full w-full object-cover"
                  alt="man"
                />
              </div>
              <div class="flex flex-col gap-1">
                <div class="font-semibold">John B</div>
                <div class="">ABC, cto</div>
              </div>
            </div>
          </div>
          <div class="reveal-up flex h-fit w-[350px] break-inside-avoid flex-col gap-4 rounded-lg border-[1px] border-outlineColor bg-secondary p-4 max-lg:w-[320px]">
            <p class="mt-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              numquam.
            </p>

            <div class="flex place-items-center gap-3">
              <div class="h-[50px] w-[50px] overflow-hidden rounded-full">
                <img
                  src="/assets/images/people/man2.jpg"
                  class="h-full w-full object-cover"
                  alt="man"
                />
              </div>
              <div class="flex flex-col gap-1">
                <div class="font-semibold">Mante</div>
                <div class="">xyz, cto</div>
              </div>
            </div>
          </div>
          <div class="reveal-up flex h-fit w-[350px] break-inside-avoid flex-col gap-4 rounded-lg border-[1px] border-outlineColor bg-secondary p-4 max-lg:w-[320px]">
            <p class="mt-4 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
              saepe illum. Dicta quisquam praesentium quod!
            </p>

            <div class="flex place-items-center gap-3">
              <div class="h-[50px] w-[50px] overflow-hidden rounded-full">
                <img
                  src="/assets/images/people/women.jpg"
                  class="h-full w-full object-cover"
                  alt="man"
                />
              </div>
              <div class="flex flex-col gap-1">
                <div class="font-semibold">Lara</div>
                <div class="">xz, cto</div>
              </div>
            </div>
          </div>
          <div class="reveal-up flex h-fit w-[350px] break-inside-avoid flex-col gap-4 rounded-lg border-[1px] border-outlineColor bg-secondary p-4 max-lg:w-[320px]">
            <p class="mt-4 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              accusamus non enim debitis rem neque beatae explicabo corrupti
              porro ullam?
            </p>

            <div class="flex place-items-center gap-3">
              <div class="h-[50px] w-[50px] overflow-hidden rounded-full">
                <img
                  src="/assets/images/people/man.jpg"
                  class="h-full w-full object-cover"
                  alt="man"
                />
              </div>
              <div class="flex flex-col gap-1">
                <div class="font-semibold">James</div>
                <div class="">app, cto</div>
              </div>
            </div>
          </div>
          <div class="reveal-up flex h-fit w-[350px] break-inside-avoid flex-col gap-4 rounded-lg border-[1px] border-outlineColor bg-secondary p-4 max-lg:w-[320px]">
            <p class="mt-4 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              accusamus non enim debitis rem neque beatae explicabo corrupti
              porro ullam?
            </p>

            <div class="flex place-items-center gap-3">
              <div class="h-[50px] w-[50px] overflow-hidden rounded-full">
                <img
                  src="/assets/images/people/man2.jpg"
                  class="h-full w-full object-cover"
                  alt="man"
                />
              </div>
              <div class="flex flex-col gap-1">
                <div class="font-semibold">Ron</div>
                <div class="">marketplace, cto</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="mt-5 flex w-full flex-col place-items-center p-[2%]"
        id="pricing"
      >
        <h2 class="text-3xl font-medium  max-md:text-2xl">Simple pricing</h2>
        <div class="mt-10 flex flex-wrap place-content-center gap-8 max-lg:flex-col">
          <div class="reveal-up flex w-[380px] flex-col place-items-center gap-2 rounded-lg border-[1px] border-outlineColor bg-secondary p-8 shadow-xl max-lg:w-[320px]">
            <h2 class="">
              <span class="text-5xl font-semibold">$9</span>
              <span class="text-2xl ">/mo</span>
            </h2>
            <p class="mt-3 text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              explicabo!
            </p>
            <hr />
            <ul class="mt-4 flex flex-col gap-2 text-center text-lg ">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
            <a
              href="http://"
              class="btn mt-8 !w-full transition-transform duration-[0.3s] hover:scale-x-[1.02]"
            >
              Get now
            </a>
          </div>
          <div class="reveal-up flex w-[380px] flex-col place-items-center gap-2 rounded-lg border-2 border-primary bg-secondary p-8 shadow-xl max-lg:w-[320px]">
            <h2 class="">
              <span class="text-5xl font-semibold">$19</span>
              <span class="text-2xl ">/mo</span>
            </h2>
            <p class="mt-3 text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              explicabo!
            </p>
            <hr />
            <ul class="mt-4 flex flex-col gap-2 text-center text-lg ">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
            <a
              href="http://"
              class="btn mt-8 !w-full transition-transform duration-[0.3s] hover:scale-x-[1.02]"
            >
              Get now
            </a>
          </div>
          <div class="reveal-up flex w-[380px] flex-col place-items-center gap-2 rounded-lg border-[1px] border-outlineColor bg-secondary p-8 shadow-xl max-lg:w-[320px]">
            <h2 class="">
              <span class="text-5xl font-semibold">$49</span>
              <span class="text-2xl ">/mo</span>
            </h2>
            <p class="mt-3 text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              explicabo!
            </p>
            <hr />
            <ul class="mt-4 flex flex-col gap-2 text-center text-lg ">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
            <a
              href="http://"
              class="btn mt-8 !w-full transition-transform duration-[0.3s] hover:scale-x-[1.02]"
            >
              Get now
            </a>
          </div>
        </div>
      </section>

      <section class="mt-5 flex min-h-[80vh] w-full flex-col place-content-center place-items-center p-[2%] max-lg:p-3">
        <h2 class="reveal-up text-center text-4xl font-bold max-md:text-2xl">
          Read our articles ✨
        </h2>
        <div class="reveal-up mt-10 flex flex-wrap place-content-center gap-10 max-lg:flex-col">
          <a
            href=""
            class="flex h-[400px] w-[400px] flex-col gap-4 overflow-clip rounded-lg p-4 max-lg:w-[300px]"
          >
            <div class="h-[250px] w-full overflow-hidden rounded-md">
              <img
                src="/assets/images/home/forest.jpg"
                alt="article image"
                class="h-full w-full object-cover transition-transform duration-[0.3s] hover:scale-[1.04]"
                srcset=""
              />
            </div>
            <h2 class="mt-2 text-2xl font-semibold max-md:text-xl">
              Article 1
            </h2>
            <p class="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              explicabo!
            </p>
            <span>
              <span>Learn more</span>
              <i class="bi bi-arrow-right"></i>
            </span>
          </a>
          <a
            href=""
            class="flex h-[400px] w-[400px] flex-col gap-4 overflow-clip rounded-lg p-4 max-lg:w-[300px]"
          >
            <div class="h-[250px] w-full overflow-hidden rounded-md">
              <img
                src="/assets/images/home/mountain.jpg"
                alt="article image"
                class="h-full w-full object-cover transition-transform duration-[0.3s] hover:scale-[1.04]"
                srcset=""
              />
            </div>
            <h2 class="mt-2 text-2xl font-semibold max-md:text-xl">
              Article 2
            </h2>
            <p class="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              explicabo!
            </p>
            <span>
              <span>Learn more</span>
              <i class="bi bi-arrow-right"></i>
            </span>
          </a>
          <a
            href=""
            class="flex h-[400px] w-[400px] flex-col gap-4 overflow-clip rounded-lg p-4 max-lg:w-[300px]"
          >
            <div class="h-[250px] w-full overflow-hidden rounded-md">
              <img
                src="/assets/images/home/photography.jpg"
                alt="article image"
                class="h-full w-full object-cover transition-transform duration-[0.3s] hover:scale-[1.04]"
                srcset=""
              />
            </div>
            <h2 class="mt-2 text-2xl font-semibold max-md:text-xl">
              Article 3
            </h2>
            <p class="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              explicabo!
            </p>
            <span>
              <span>Learn more</span>
              <i class="bi bi-arrow-right"></i>
            </span>
          </a>
        </div>
      </section>

      <section class="flex w-full flex-col place-content-center place-items-center gap-[10%] p-[5%] px-[10%]">
        <h2 class="text-4xl font-bold  max-md:text-2xl">Faq</h2>
        <div class="mt-5 flex min-h-[300px] w-full max-w-[850px] flex-col gap-4">
          <div class="faq w-full rounded-md border-[1px] border-solid border-blue-700 bg-blue-500">
            <div class="faq-accordion flex w-full select-none text-xl max-md:text-lg">
              <span>What license are the source code?</span>
              <i class="bi bi-plus ml-auto font-semibold"></i>
            </div>
            <div class="content">All the templates are under MIT license</div>
          </div>

          <div class="faq w-full rounded-md border-[1px] border-solid border-blue-700 bg-blue-500">
            <div class="faq-accordion flex w-full select-none text-xl max-md:text-lg">
              <span>Can I request new templates?</span>
              <i class="bi bi-plus ml-auto font-semibold"></i>
            </div>
            <div class="content">
              you can request a generic template from
              <a
                href="https://github.com/PaulleDemon/landing-pages/issues/new/choose"
                class="underline"
              >
                Github template request
              </a>
              . If you are looking for Custom design you should
              <a href="https://tally.so/r/woO0Kx" class="underline">
                contact here
              </a>
            </div>
          </div>

          <div class="faq w-full rounded-md border-[1px] border-solid border-blue-700 bg-blue-500">
            <div class="faq-accordion flex w-full select-none text-xl max-md:text-lg">
              <span>I need a custom template?</span>
              <i class="bi bi-plus ml-auto font-semibold"></i>
            </div>
            <div class="content">
              If you are looking for Custom design you can
              <a href="https://tally.so/r/woO0Kx" class="underline">
                contact here
              </a>
            </div>
          </div>

          <div class="faq w-full rounded-md border-[1px] border-solid border-blue-700 bg-blue-500">
            <div class="faq-accordion flex w-full select-none text-xl max-md:text-lg">
              <span>Will you add new templates?</span>
              <i class="bi bi-plus ml-auto font-semibold"></i>
            </div>
            <div class="content">
              New templates are added every Friday. So star ⭐️
              <a
                href="https://github.com/PaulleDemon/awesome-landing-pages"
                class="underline"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        <div class="mt-20 flex flex-col place-items-center gap-4">
          <div class="text-3xl max-md:text-2xl">Still have questions?</div>
          <a
            href="http://"
            class="btn !rounded-full !border-[1px] !border-solid !border-gray-300 !bg-transparent transition-colors duration-[0.3s]"
          >
            Contact
          </a>
        </div>
      </section>

      <section class="flex w-full flex-col place-content-center place-items-center gap-[10%] p-[5%] px-[10%] max-md:px-2">
        <div class="flex w-full max-w-[80%] place-content-center place-items-center justify-between gap-3 rounded-lg border-[1px] border-outlineColor bg-secondary p-6 max-md:max-w-full max-md:flex-col">
          <div class="flex flex-col gap-1">
            <h2 class="text-3xl  max-md:text-xl">Join our newsletter</h2>
            <div class="">Lorem ipsum dolor sit.</div>
          </div>

          <div class="flex h-[60px] place-items-center gap-2 overflow-hidden p-2">
            <input
              type="email"
              class="input h-full w-full !border-gray-600 p-2 outline-none"
              placeholder="email"
            />
            <a
              class="btn !rounded-full !border-[1px] !border-solid !border-gray-300 !bg-transparent transition-colors duration-[0.3s]"
              href=""
            >
              Signup
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

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

  // const collapseBtn = document.getElementById("collapse-btn");
  // const collapseHeaderItems = document.getElementById("collapsed-header-items");

  function onHeaderClickOutside(e) {
    // if (!collapseHeaderItems.contains(e.target)) {
    //   toggleHeader();
    // }
  }

  function toggleHeader() {
    // if (isHeaderCollapsed) {
    //   collapseHeaderItems.classList.add("opacity-100");
    //   collapseHeaderItems.style.width = "60vw";
    //   collapseBtn.classList.remove("bi-list");
    //   collapseBtn.classList.add("bi-x", "max-lg:fixed");
    //   setIsHeaderCollapsed(false); // Update state
    //   setTimeout(
    //     () => window.addEventListener("click", onHeaderClickOutside),
    //     1
    //   );
    // } else {
    //   collapseHeaderItems.classList.remove("opacity-100");
    //   collapseHeaderItems.style.width = "0vw";
    //   collapseBtn.classList.remove("bi-x", "max-lg:fixed");
    //   collapseBtn.classList.add("bi-list");
    //   setIsHeaderCollapsed(true); // Update state
    //   window.removeEventListener("click", onHeaderClickOutside);
    // }
  }

  function responsive() {
    // if (window.innerWidth > RESPONSIVE_WIDTH) {
    //   collapseHeaderItems.style.width = "";
    // } else {
    //   setIsHeaderCollapsed(true);
    // }
  }

  window.addEventListener("resize", responsive);

  // Animations using GSAP
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".reveal-up", {
    opacity: 0,
    y: "100%",
  });

  gsap.to("#dashboard", {
    boxShadow: "0px 15px 25px -5px #7e22ceaa",
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
    <div class="flex min-h-[100vh] flex-col bg-white text-black">
      <header class="max-w-lg:px-4 max-w-lg:mr-auto absolute top-0 z-20 flex h-[60px] w-full bg-opacity-0 px-[5%] lg:justify-around">
        <a class="h-[50px] w-[50px] p-[4px]" href="">
          <img
            src="https://res.cloudinary.com/dk2qptwnw/image/upload/v1723721661/Logo_j7ffqs.svg"
            alt="logo"
            class="object h-full w-full"
          />
        </a>
        <div
          class="collapsible-header animated-collapse max-lg:shadow-md"
          id="collapsed-header-items"
        >
          <div class="flex h-full w-max gap-5 text-base max-lg:mt-[30px] max-lg:flex-col max-lg:place-items-end max-lg:gap-5 lg:mx-auto lg:place-items-center">
            <a class="header-links" href="">
              {" "}
              About us{" "}
            </a>
            <a class="header-links" href="#pricing">
              {" "}
              Pricing{" "}
            </a>
            <a class="header-links" href="">
              {" "}
              Solutions{" "}
            </a>
            <a class="header-links" href="">
              {" "}
              Features{" "}
            </a>
            <a class="header-links" href="">
              {" "}
              Company{" "}
            </a>
          </div>
          <div class="mx-4 flex place-items-center gap-[20px] text-base max-md:w-full max-md:flex-col max-md:place-content-center">
            <a
              href=""
              aria-label="signup"
              class="rounded-full bg-blue-500 px-3 py-2 text-white transition-transform duration-[0.3s] hover:translate-x-2"
            >
              <span>Get started</span>
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <button
          class="bi bi-list absolute right-3 top-3 z-50 text-3xl text-white lg:hidden"
          onclick="toggleHeader()"
          aria-label="menu"
          id="collapse-btn"
        ></button>
      </header>

      <section
        class="hero-section relative flex min-h-[100vh] w-full max-w-[100vw] flex-col overflow-hidden max-md:mt-[50px]"
        id="hero-section"
      >
        <div class="flex h-full min-h-[100vh] w-full flex-col place-content-center gap-6 p-[5%] max-xl:place-items-center max-lg:p-4">
          <div class="flex flex-col place-content-center items-center">
            <div class="reveal-up gradient-text text-center text-6xl font-semibold uppercase leading-[80px] max-lg:text-4xl max-md:leading-snug">
              <span class=""> Empowering Seamless </span>
              <br />
              <span class=""> Electric Mobility Solutions</span>
            </div>
            <div class="reveal-up mt-10 max-w-[450px] p-2 text-center max-lg:max-w-full">
              Pioneering a sustainable shift to electric driving, we empower EV
              sector players to manage efficient charging networks, accelerating
              electric vehicle adoption. Enabling seamless EV mobility and
              empowering businesses towards electric ease.
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
            class="reveal-up relative mt-8 flex w-full place-content-center place-items-center"
            id="dashboard-container"
          >
            <div
              class="relative max-w-[80%] overflow-hidden rounded-xl bg-transparent max-md:max-w-full"
              id="dashboard"
            >
              <img
                src="/footerimg.png"
                alt="dashboard"
                class="h-full w-full object-cover opacity-90 max-lg:object-contain"
              />
            </div>

            <div class="hero-img-bg-grad absolute left-[20%] top-5 h-[200px] w-[200px]"></div>
          </div>
        </div>
      </section>

      <section class="relative flex w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-8">
        <h2 class="reveal-up text-3xl max-md:text-xl">
          Fueling EV Growth with Crucial Expertise
        </h2>

        <div class="reveal-up carousel-container">
          <div class="carousel lg:w-place-content-center mt-6 flex w-full gap-5 max-md:gap-2">
            <div class="carousel-img h-[30px] w-[150px]">
              <img
                src="/assets/images/brand-logos/google.svg"
                alt="Google"
                class="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
                srcset=""
              />
            </div>
            <div class="carousel-img h-[30px] w-[150px]">
              <img
                src="/assets/images/brand-logos/microsoft.svg"
                alt="Microsoft"
                class="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
                srcset=""
              />
            </div>
            <div class="carousel-img h-[30px] w-[150px]">
              <img
                src="/assets/images/brand-logos/adobe.svg"
                alt="Adobe"
                class="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
                srcset=""
              />
            </div>
            <div class="carousel-img h-[30px] w-[150px]">
              <img
                src="/assets/images/brand-logos/airbnb.svg"
                alt="Adobe"
                class="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
                srcset=""
              />
            </div>
            <div class="carousel-img h-[30px] w-[150px]">
              <img
                src="/assets/images/brand-logos/stripe.svg"
                alt="Adobe"
                class="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
                srcset=""
              />
            </div>
            <div class="carousel-img h-[30px] w-[150px]">
              <img
                src="/assets/images/brand-logos/reddit.svg"
                alt="Adobe"
                class="h-full w-full object-contain grayscale transition-colors hover:grayscale-0"
                srcset=""
              />
            </div>
          </div>
        </div>
      </section>

      <section class="relative flex w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6">
        <div class="mt-8 flex flex-col place-items-center gap-5">
          <div class="reveal-up mt-5 flex flex-col gap-3 text-center">
            <h2 class="text-4xl font-medium max-md:text-3xl">Key benifits</h2>
          </div>
          <div class="mt-6 flex max-w-[100%] flex-wrap place-content-center gap-8 max-lg:flex-col">
            <div class="reveal-up flex h-[400px] w-[450px] flex-col gap-3 text-center max-md:w-[320px]">
              <div class="border-gradient h-[400px] w-full overflow-hidden max-md:h-[350px]">
                <div class="flex h-full w-full place-content-center place-items-end p-2">
                  {/* <i class="bi bi-rocket-takeoff-fill text-7xl  max-md:text-5xl"></i> */}
                  {/* image */}
                  <img
                    src="/s1-1.jpg"
                    alt="rocket"
                    className="w-full mix-blend-multiply"
                  />
                </div>
              </div>
              <div class="flex flex-col gap-4 p-2">
                <h3 class="mt-8 text-2xl font-normal max-md:text-xl">
                  Intelligent Charging
                </h3>
                <div class="">
                  Scale Your Charging Infrastructure and Grid Capacity with a
                  Cloud-Based System
                </div>
              </div>
            </div>
            <div class="reveal-up flex h-[400px] w-[450px] flex-col gap-3 text-center max-md:w-[320px]">
              <div class="border-gradient h-[400px] w-full overflow-hidden max-md:text-[350px]">
                <div class="flex h-full w-full place-content-center place-items-end p-2">
                  <img
                    src="/s1-1.jpg"
                    alt="rocket"
                    className="w-full mix-blend-multiply"
                  />{" "}
                </div>
              </div>
              <div class="flex flex-col gap-4 p-2">
                <h3 class="mt-8 text-2xl font-normal max-md:text-xl">
                  Remote Management
                </h3>
                <div class="">
                  Retrieve Comprehensive Data on Charging Stations and
                  Transactions
                </div>
              </div>
            </div>
            <div class="reveal-up flex h-[400px] w-[450px] flex-col gap-3 text-center max-md:w-[320px]">
              <div class="border-gradient h-[400px] w-full overflow-hidden max-md:h-[350px]">
                <div class="flex h-full w-full place-content-center place-items-end p-2">
                  <img
                    src="/s1-1.jpg"
                    alt="rocket"
                    className="w-full mix-blend-multiply"
                  />{" "}
                </div>
              </div>
              <div class="flex flex-col gap-4 p-2">
                <h3 class="mt-8 text-2xl font-normal max-md:text-xl">
                  TeslaVolts App
                </h3>
                <div class="">
                  Simplify the charging needs with Intelligent EV Charging app
                  that is Next-Level.
                </div>
              </div>
            </div>

            <div class="reveal-up flex h-[400px] w-[450px] flex-col gap-3 text-center max-md:w-[320px]">
              <div class="border-gradient h-[400px] w-full overflow-hidden max-md:h-[350px]">
                <div class="flex h-full w-full place-content-center place-items-end p-2">
                  {/* <i class="bi bi-rocket-takeoff-fill text-7xl  max-md:text-5xl"></i> */}
                  {/* image */}
                  <img
                    src="/s1-1.jpg"
                    alt="rocket"
                    className="w-full mix-blend-multiply"
                  />
                </div>
              </div>
              <div class="flex flex-col gap-4 p-2">
                <h3 class="mt-8 text-2xl font-normal max-md:text-xl">
                  Fleet Management
                </h3>
                <div class="">
                  Track Real-Time Charging Activity and Provide Driver
                  Assistance
                </div>
              </div>
            </div>
            <div class="reveal-up flex h-[400px] w-[450px] flex-col gap-3 text-center max-md:w-[320px]">
              <div class="border-gradient h-[400px] w-full overflow-hidden max-md:text-[350px]">
                <div class="flex h-full w-full place-content-center place-items-end p-2">
                  <img
                    src="/fleet.png"
                    alt="rocket"
                    className="w-full mix-blend-multiply"
                  />
                </div>
              </div>
              <div class="flex flex-col gap-4 p-2">
                <h3 class="mt-8 text-2xl font-normal max-md:text-xl">
                  Charging-as-a-Service
                </h3>
                <div class="">
                  Request on-demand EV charging when a vehicle is low or out of
                  range.
                </div>
              </div>
            </div>
            <div class="reveal-up flex h-[400px] w-[450px] flex-col gap-3 text-center max-md:w-[320px]">
              <div class="border-gradient h-[400px] w-full overflow-hidden max-md:h-[350px]">
                <div class="flex h-full w-full place-content-center place-items-end p-2">
                  <i class="bi bi-lightning-charge-fill text-7xl  max-md:text-5xl"></i>
                </div>
              </div>
              <div class="flex flex-col gap-4 p-2">
                <h3 class="mt-8 text-2xl font-normal max-md:text-xl">
                  Billing Management
                </h3>
                <div class="">
                  Simplify Charger Payments and Billing Operations Management
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative flex min-h-[80vh] w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6">
        <div class="mt-8 flex flex-col place-items-center gap-5">
          <div class="reveal-up mt-5 flex flex-col gap-3 text-center">
            <h2 class="text-4xl font-medium  max-md:text-2xl">
              Our Solutions For Your Bussiness
            </h2>
          </div>
          <div class="mt-6 flex max-w-[100%] flex-wrap place-content-center gap-8 max-lg:flex-col">
            <div class="reveal-up flex h-[200px] w-[750px] gap-8 rounded-xl border-[1px] border-outlineColor bg-secondary p-8 max-md:w-[320px]">
              <div class="text-4xl max-md:text-2xl">
                <i class="bi bi-globe"></i>
              </div>

              <div class="flex flex-col gap-4">
                <h3 class="text-2xl max-md:text-xl">
                  EV operators & service providers
                </h3>
                <p class=" max-md:text-sm">
                  EV charging solutions for charge point operators. Set-up up a
                  successful EV business model with our smart EV solutions.
                </p>
              </div>
            </div>

            <div class="reveal-up flex h-[200px] w-[450px] gap-8 rounded-xl border-[1px] border-outlineColor bg-secondary p-8 max-md:w-[320px]">
              <div class="text-4xl max-md:text-2xl">
                <i class="bi bi-bar-chart-fill"></i>
              </div>

              <div class="flex flex-col gap-4">
                <h3 class="text-2xl max-md:text-xl">Insights</h3>
                <p class=" max-md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  quasi consequuntur, distinctio laboriosam
                </p>
              </div>
            </div>

            <div class="reveal-up flex h-[200px] w-[450px] gap-8 rounded-xl border-[1px] border-outlineColor bg-secondary p-8 max-md:w-[320px]">
              <div class="text-4xl max-md:text-2xl">
                <i class="bi bi-cloud-fill"></i>
              </div>

              <div class="flex flex-col gap-4">
                <h3 class="text-2xl max-md:text-xl">Cloud backup</h3>
                <p class=" max-md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  quasi consequuntur, distinctio laboriosam
                </p>
              </div>
            </div>

            <div class="reveal-up flex h-[200px] w-[750px] gap-8 rounded-xl border-[1px] border-outlineColor bg-secondary p-8 max-md:w-[320px]">
              <div class="text-4xl max-md:text-2xl">
                <i class="bi bi-fingerprint"></i>
              </div>

              <div class="flex flex-col gap-4">
                <h3 class="text-2xl max-md:text-xl">
                  Utilities and energy companies
                </h3>
                <p class=" max-md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  quasi consequuntur, distinctio laboriosamUtility & energy
                  company solutions for EV charging. The EV market gives
                  utilities access to new, profitable business models.
                </p>
              </div>
            </div>

            <div class="reveal-up flex h-[200px] w-[600px] gap-8 rounded-xl border-[1px] border-outlineColor bg-secondary p-8 max-md:w-[320px]">
              <div class="text-4xl max-md:text-2xl">
                <i class="bi bi-sliders"></i>
              </div>

              <div class="flex flex-col gap-4">
                <h3 class="text-2xl max-md:text-xl">Oil & Gas companies</h3>
                <p class=" max-md:text-sm">
                  Gas and oil industries can benefit from intelligent EV
                  charging options. TeslaVolts is here to support you.
                </p>
              </div>
            </div>

            <div class="reveal-up flex h-[200px] w-[600px] gap-8 rounded-xl border-[1px] border-outlineColor bg-secondary p-8 max-md:w-[320px]">
              <div class="text-4xl max-md:text-2xl">
                <i class="bi bi-gear-fill"></i>
              </div>

              <div class="flex flex-col gap-4">
                <h3 class="text-2xl max-md:text-xl">Automotive Businesses</h3>
                <p class="text-sm ">
                  Automotive sector technologies for intelligent EV charging. We
                  support automotive manufacturers as they successfully enter
                  the emerging EV market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative flex min-h-[80vh] w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6">
        <div class="reveal-up flex min-h-[60vh] place-content-center place-items-center gap-[10%] max-lg:flex-col max-lg:gap-10">
          <div class="flex">
            <div class="max-h-[650px] max-w-[850px] overflow-hidden rounded-lg shadow-lg shadow-[rgba(170,49,233,0.44021358543417366)]">
              <img
                src="/chip1.jpg"
                alt="coding"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
          <div class="mt-6 flex max-w-[450px] flex-col gap-4">
            <h3 class="text-4xl font-medium max-md:text-2xl">
              EV Charging Network Infrastructure
            </h3>

            <div class="mt-4 flex flex-col gap-3">
              <h4 class="text-xl font-medium">
                <i class="bi bi-check-all !text-2xl"></i>
                AI powered
              </h4>
              <span class="text-lg  max-md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis commodi temporibus at? Aspernatur, a necessitatibus?
              </span>
            </div>
            <div class="mt-4 flex flex-col gap-3">
              <h4 class="text-xl font-medium">
                <i class="bi bi-check-all !text-2xl"></i>
                Locally run
              </h4>
              <span class="text-lg  max-md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis commodi temporibus at? Aspernatur, a necessitatibus?
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="relative flex min-h-[80vh] w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6">
        <div class="reveal-up flex min-h-[60vh] place-content-center place-items-center gap-[10%] max-lg:flex-col max-lg:gap-10">
          <div class="mt-6 flex max-w-[450px] flex-col gap-4">
            <h3 class="text-4xl font-medium max-md:text-2xl">
              Introducing our Mobile App
            </h3>

            <div class="mt-4 flex flex-col gap-3">
              <h4 class="text-xl font-medium">
                <i class="bi bi-check-all !text-2xl"></i>
                Easy to use
              </h4>
              <span class="text-lg  max-md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis commodi temporibus at? Aspernatur, a necessitatibus?
              </span>
            </div>
            <div class="mt-4 flex flex-col gap-3">
              <h4 class="text-xl font-medium">
                <i class="bi bi-check-all !text-2xl"></i>
                All in one panel
              </h4>
              <span class="text-lg  max-md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis commodi temporibus at? Aspernatur, a necessitatibus?
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

      {/* <section class="mt-5 flex min-h-[80vh] w-full flex-col place-content-center place-items-center p-[2%]">
        <h3 class="text-4xl font-medium  max-md:text-2xl">
          You're in good hands
        </h3>
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
        <h3 class="text-3xl font-medium  max-md:text-2xl">Simple pricing</h3>
        <div class="mt-10 flex flex-wrap place-content-center gap-8 max-lg:flex-col">
          <div class="reveal-up flex w-[380px] flex-col place-items-center gap-2 rounded-lg border-[1px] border-outlineColor bg-secondary p-8 shadow-xl max-lg:w-[320px]">
            <h3 class="">
              <span class="text-5xl font-semibold">$9</span>
              <span class="text-2xl ">/mo</span>
            </h3>
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
            <h3 class="">
              <span class="text-5xl font-semibold">$19</span>
              <span class="text-2xl ">/mo</span>
            </h3>
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
            <h3 class="">
              <span class="text-5xl font-semibold">$49</span>
              <span class="text-2xl ">/mo</span>
            </h3>
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
        <h3 class="reveal-up text-center text-4xl font-medium max-md:text-2xl">
          Read our articles ✨
        </h3>
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
            <h3 class="mt-2 text-2xl font-semibold max-md:text-xl">
              Article 1
            </h3>
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
            <h3 class="mt-2 text-2xl font-semibold max-md:text-xl">
              Article 2
            </h3>
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
            <h3 class="mt-2 text-2xl font-semibold max-md:text-xl">
              Article 3
            </h3>
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
        <h3 class="text-4xl font-medium  max-md:text-2xl">Faq</h3>
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

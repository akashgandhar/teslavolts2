"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Home() {
  const RESPONSIVE_WIDTH = 1024;

  // Use state to manage the collapsed state of the header
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(true);

  useEffect(() => {
    // Check window width and set initial isHeaderCollapsed state
    const checkScreenWidth = () => {
      setIsHeaderCollapsed(window.innerWidth < RESPONSIVE_WIDTH);
    };

    checkScreenWidth(); // Check on initial load
    window.addEventListener("resize", checkScreenWidth); // Check on resize

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
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
            src="/assets/logo/logo.png"
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
                  />                </div>
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
                  />                </div>
              </div>
              <div class="flex flex-col gap-4 p-2">
                <h3 class="mt-8 text-2xl font-normal max-md:text-xl">
                TeslaVolts App
                </h3>
                <div class="">
                Simplify the charging needs with Intelligent EV Charging app that is Next-Level.
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
                Track Real-Time Charging Activity and Provide Driver Assistance
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
                Request on-demand EV charging when a vehicle is low or out of range.
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
                <h3 class="text-2xl max-md:text-xl">EV operators & service providers</h3>
                <p class=" max-md:text-sm">
                EV charging solutions for charge point operators. Set-up up a successful EV business model with our smart EV solutions.
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
                <h3 class="text-2xl max-md:text-xl">Utilities and energy companies</h3>
                <p class=" max-md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  quasi consequuntur, distinctio laboriosamUtility & energy company solutions for EV charging.
                  The EV market gives utilities access to new, profitable business models. 
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
                Gas and oil industries can benefit from intelligent EV charging options. TeslaVolts is here to support you.
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
                Automotive sector technologies for intelligent EV charging.
                We support automotive manufacturers as they successfully enter the emerging EV market.
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

<div class=" bg-[#50abff] pt-9">
      <div class="mx-auto w-full max-w-full px-4 xl:px-0">
        <div class="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
          <div class="md:w-[316px]">
            <p class="text-[18px] font-medium text-white">
              {/* <h1 class="text-white font-extrabold">
                <span class="text-rose-600">YOUR</span>LOGO
              </h1> */}
              <img src="/logo.svg" className="mix-blend-multiply" />
            </p>
            <p class="mt-[18px] text-[15px] font-normal text-white/[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              fugit non. Incidunt dolorum adipisci, tempore asperiores nemo odio
              facere officiis enim animi placeat eaque nesciunt alias beatae id,
              at dicta.
            </p>
            <div class="mt-[18px] flex gap-4">
              <a class="hover:scale-110" target="_blank" href="#">
                <img
                  alt="facebook icon"
                  loading="lazy"
                  width="28"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  //   // style="color:transparent"
                  src="/icons/facebook.png"
                  className="mix-blend-multiply"
                />
              </a>
              <a class="hover:scale-110" target="_blank" href="/">
                <img
                  alt="linkdin icon"
                  loading="lazy"
                  width="28"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  //   // style="color:transparent"
                  src="/icons/linkedin.png"
                  className="mix-blend-multiply"
                />
              </a>
              <a class="hover:scale-110" target="_blank" href="/">
                <img
                  alt="instagram icon"
                  loading="lazy"
                  width="28"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  // style="color:transparent"
                  src="/icons/instagram.png"
                  className="mix-blend-multiply"
                />
              </a>
              <a class="hover:scale-110" target="_blank" href="">
                <img
                  alt="twitter icon"
                  loading="lazy"
                  width="28"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  // style="color:transparent"
                  src="/icons/x.png"
                  className="mix-blend-multiply opacity-70 hover:opacity-100"
                />
              </a>
              <a
                class="hover:scale-110"
                target="_blank"
                href="https://www.youtube.com/"
              >
                <img
                  alt="youtube icon"
                  loading="lazy"
                  width="28"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  // style="color:transparent"
                  src="/icons/yt.png"
                  className="mix-blend-multiply"
                />
              </a>
            </div>
          </div>
          {/* <div class="md:w-[316px]">
            <div class="mt-[23px] flex">
              <div class="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8472 14.8554L16.4306 12.8764L16.4184 12.8707C16.1892 12.7727 15.939 12.7333 15.6907 12.7562C15.4424 12.7792 15.2037 12.8636 14.9963 13.002C14.9718 13.0181 14.9484 13.0357 14.9259 13.0545L12.6441 14.9998C11.1984 14.2976 9.70595 12.8164 9.00376 11.3895L10.9519 9.07294C10.9706 9.0495 10.9884 9.02606 11.0053 9.00075C11.1407 8.79384 11.2229 8.55667 11.2445 8.31035C11.2661 8.06402 11.2264 7.81618 11.1291 7.58887V7.57762L9.14438 3.15356C9.0157 2.85662 8.79444 2.60926 8.51362 2.44841C8.2328 2.28756 7.9075 2.22184 7.58626 2.26106C6.31592 2.42822 5.14986 3.05209 4.30588 4.01615C3.4619 4.98021 2.99771 6.21852 3.00001 7.49981C3.00001 14.9436 9.05626 20.9998 16.5 20.9998C17.7813 21.0021 19.0196 20.5379 19.9837 19.6939C20.9477 18.85 21.5716 17.6839 21.7388 16.4136C21.7781 16.0924 21.7125 15.7672 21.5518 15.4864C21.3911 15.2056 21.144 14.9843 20.8472 14.8554ZM16.5 19.4998C13.3185 19.4963 10.2682 18.2309 8.01856 15.9813C5.76888 13.7316 4.50348 10.6813 4.50001 7.49981C4.49648 6.58433 4.82631 5.69887 5.42789 5.00879C6.02947 4.3187 6.86167 3.87118 7.76907 3.74981C7.7687 3.75355 7.7687 3.75732 7.76907 3.76106L9.73782 8.16731L7.80001 10.4867C7.78034 10.5093 7.76247 10.5335 7.74657 10.5589C7.60549 10.7754 7.52273 11.0246 7.5063 11.2825C7.48988 11.5404 7.54035 11.7981 7.65282 12.0307C8.5022 13.7679 10.2525 15.5051 12.0084 16.3536C12.2428 16.465 12.502 16.5137 12.7608 16.495C13.0196 16.4762 13.2692 16.3907 13.485 16.2467C13.5091 16.2305 13.5322 16.2129 13.5544 16.1942L15.8334 14.2498L20.2397 16.2232C20.2397 16.2232 20.2472 16.2232 20.25 16.2232C20.1301 17.1319 19.6833 17.9658 18.9931 18.5689C18.3028 19.172 17.4166 19.5029 16.5 19.4998Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div class="ml-[18px]">
                <a
                  href="tel:+911800123444"
                  class="font-Inter text-[14px] font-medium text-white"
                >
                  +91 1800123444
                </a>
                <p class="font-Inter text-[12px] font-medium text-white">
                  Support Number
                </p>
              </div>
            </div>
            <div class="mt-[23px] flex">
              <div class="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 0H1C0.801088 0 0.610322 0.0790178 0.46967 0.21967C0.329018 0.360322 0.25 0.551088 0.25 0.75V13.5C0.25 13.8978 0.408035 14.2794 0.68934 14.5607C0.970644 14.842 1.35218 15 1.75 15H18.25C18.6478 15 19.0294 14.842 19.3107 14.5607C19.592 14.2794 19.75 13.8978 19.75 13.5V0.75C19.75 0.551088 19.671 0.360322 19.5303 0.21967C19.3897 0.0790178 19.1989 0 19 0ZM10 7.98281L2.92844 1.5H17.0716L10 7.98281ZM7.25406 7.5L1.75 12.5447V2.45531L7.25406 7.5ZM8.36406 8.51719L9.48906 9.55312C9.62743 9.68014 9.80842 9.75062 9.99625 9.75062C10.1841 9.75062 10.3651 9.68014 10.5034 9.55312L11.6284 8.51719L17.0659 13.5H2.92844L8.36406 8.51719ZM12.7459 7.5L18.25 2.45438V12.5456L12.7459 7.5Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div class="ml-[18px]">
                <a
                  href="mailto:help@lorem.com"
                  class="font-Inter text-[14px] font-medium text-[#fff]"
                >
                  help@lorem.com
                </a>
                <p class="font-Inter text-[12px] font-medium text-[#fff]">
                  Support Email
                </p>
              </div>
            </div>
            <div class="mt-[23px] flex">
              <div class="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                <svg
                  width="18"
                  height="21"
                  viewBox="0 0 18 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 4.5C8.25832 4.5 7.5333 4.71993 6.91661 5.13199C6.29993 5.54404 5.81928 6.12971 5.53545 6.81494C5.25162 7.50016 5.17736 8.25416 5.32205 8.98159C5.46675 9.70902 5.8239 10.3772 6.34835 10.9017C6.8728 11.4261 7.54098 11.7833 8.26841 11.9279C8.99584 12.0726 9.74984 11.9984 10.4351 11.7145C11.1203 11.4307 11.706 10.9501 12.118 10.3334C12.5301 9.7167 12.75 8.99168 12.75 8.25C12.75 7.25544 12.3549 6.30161 11.6517 5.59835C10.9484 4.89509 9.99456 4.5 9 4.5ZM9 10.5C8.55499 10.5 8.11998 10.368 7.74997 10.1208C7.37996 9.87357 7.09157 9.52217 6.92127 9.11104C6.75097 8.6999 6.70642 8.2475 6.79323 7.81105C6.88005 7.37459 7.09434 6.97368 7.40901 6.65901C7.72368 6.34434 8.12459 6.13005 8.56105 6.04323C8.9975 5.95642 9.4499 6.00097 9.86104 6.17127C10.2722 6.34157 10.6236 6.62996 10.8708 6.99997C11.118 7.36998 11.25 7.80499 11.25 8.25C11.25 8.84674 11.0129 9.41903 10.591 9.84099C10.169 10.2629 9.59674 10.5 9 10.5ZM9 0C6.81273 0.00248131 4.71575 0.872472 3.16911 2.41911C1.62247 3.96575 0.752481 6.06273 0.75 8.25C0.75 11.1938 2.11031 14.3138 4.6875 17.2734C5.84552 18.6108 7.14886 19.8151 8.57344 20.8641C8.69954 20.9524 8.84978 20.9998 9.00375 20.9998C9.15772 20.9998 9.30796 20.9524 9.43406 20.8641C10.856 19.8147 12.1568 18.6104 13.3125 17.2734C15.8859 14.3138 17.25 11.1938 17.25 8.25C17.2475 6.06273 16.3775 3.96575 14.8309 2.41911C13.2843 0.872472 11.1873 0.00248131 9 0ZM9 19.3125C7.45031 18.0938 2.25 13.6172 2.25 8.25C2.25 6.45979 2.96116 4.7429 4.22703 3.47703C5.4929 2.21116 7.20979 1.5 9 1.5C10.7902 1.5 12.5071 2.21116 13.773 3.47703C15.0388 4.7429 15.75 6.45979 15.75 8.25C15.75 13.6153 10.5497 18.0938 9 19.3125Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div class="ml-[18px]">
                <a
                  href="mailto:help@lorem.com"
                  class="font-Inter text-[14px] font-medium text-[#fff]"
                >
                  Sub Nerul, Mumbia, India, 123456
                </a>
                <p class="font-Inter text-[12px] font-medium text-white">
                  Address
                </p>
              </div>
            </div>
          </div> */}
          <div class="text-white">
            <p class="text-deutziawhite font-inter text-[18px] font-medium leading-normal">
              EV Services
            </p>
            <ul>
              <li class="mt-[15px]">
                <a
                  class="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/"
                >
                  Intelligent Charging
                </a>
              </li>
              <li class="mt-[15px]">
                <a
                  class="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/our-tutors"
                >
                  Fleet Management
                </a>
              </li>
              <li class="mt-[15px]">
                <a
                  class="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/become-a-tutor"
                >
                  Charging-as-a-Service
                </a>
              </li>
              <li class="mt-[15px]">
                <a
                  class="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/plans-and-pricing"
                >
                  Billing & Payments
                </a>
              </li>
              <li class="mt-[15px]">
                <a
                  class="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/terms-and-conditions"
                >
                  Remote Management
                </a>
              </li>
              <li class="mt-[15px]">
                <a
                  class="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/privacy-policy"
                >
                  TeslaVolts EV
                </a>
              </li>
              <li class="mt-[15px]">
                <a
                  class="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/privacy-policy"
                >
                  E-AMRIT
                </a>
              </li>
            </ul>
          </div>
          <div class="text-white">
            <p class="text-deutziawhite font-inter text-[18px] font-medium leading-normal">
              Resources
            </p>
            <ul>
              <li class="mt-[15px]">
                <a
                  class="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/"
                >
                  TeslaVolts APP
                </a>
              </li>
              <li class="mt-[15px]">
                <a
                  class="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/our-tutors"
                >
                  Downloads
                </a>
              </li>
              <li class="mt-[15px]">
                <a
                  class="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/become-a-tutor"
                >
                  Blogs
                </a>
              </li>
              <li class="mt-[15px]">
                <a
                  class="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/plans-and-pricing"
                >
                  Teslavolts API
                </a>
              </li>
            </ul>
          </div>
          <div class="text-white">
            <p class="text-deutziawhite font-inter text-[18px] font-medium leading-normal">
              About Us
            </p>
            <ul>
              <li class="mt-[15px]">
                <a
                  class="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/"
                >
                  Contact Us
                </a>
              </li>
              <li class="mt-[15px]">
                <a
                  class="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/our-tutors"
                >
                  Request a Demo
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
            <div class="mt-6 flex flex-col gap-4 sm:mt-0">
              <p class="text-deutziawhite font-inter text-[18px] font-medium">
                Download the app
              </p>
              <div class="flex gap-4 sm:flex-col">
                <a target="_blank" href="#">
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
                <a target="_blank" href="#">
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
              </div>
            </div>
          </div>
        </div>
        <hr class="mt-[30px] text-white" />
        <div class="flex items-center justify-between px-10 pb-8 pt-[9px] md:py-8">
          <p class="text-[10px] font-normal text-white md:text-[12px]">
            © Copyright 2024 , All Rights Reserved by TeslaVolts.
          </p>
          <p class="text-[10px] font-normal text-white md:text-[12px]">
            Mobile: +91 123456789,Email: asdfg@gmail.com
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

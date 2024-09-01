"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function NavbarMain() {
  return (
    <div className="relative flex items-center justify-center">
      <Navbar className="top-4" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 mx-auto z-50 transition-transform duration-300 ease-in-out ",
        "max-w-[95%]",
        scrollDirection === "down" ? "-translate-y-24" : "translate-y-0",
        className
      )}
    >
      <div className="w-full h-full flex justify-between items-center relative rounded-3xl border border-transparent bg-white shadow-lg  space-x-4 px-8 py-1">
        <Link href="/">
          <Image
            className="w-40"
            src="/logo.png"
            alt="logo"
            width={1920}
            height={1500}
          />
        </Link>

        <Menu setActive={setActive}>
          {/* <MenuItem setActive={setActive} active={active} item="Home">
            <div className="flex flex-col space-y-4 text-sm transform hover:scale-105 transition-transform duration-200">
              <HoveredLink className="hover:text-[#407CB0]" href="/">
                Dashboard
              </HoveredLink>
            </div>
          </MenuItem> */}
          <MenuItem setActive={setActive} active={active} item="Software">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Intelligent Charging</HoveredLink>
              <HoveredLink href="/">Fleet Management</HoveredLink>
              <HoveredLink href="/">Charging-as-a-Service</HoveredLink>
              <HoveredLink href="/">Billing and Payments</HoveredLink>
              <HoveredLink href="/">Remote Management</HoveredLink>
              <HoveredLink href="/">TeslaVolts EV</HoveredLink>
              <HoveredLink href="/">E-AMRIT</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Products</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Solutions">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/solutions/operator">
                Operators and Service Providers
              </HoveredLink>
              <HoveredLink href="/solutions/utilities">
                Utility and Energy Companies
              </HoveredLink>
              <HoveredLink href="/solutions/oil&gas">
                Oil and Gas Companies
              </HoveredLink>
              <HoveredLink href="/solutions/automotive">
                Automotive Companies
              </HoveredLink>
              <HoveredLink href="/solutions/infrastructure">
                EV Charging Infrastructure
              </HoveredLink>
              <HoveredLink href="/solutions/expert">
                EV Expert Advice
              </HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Resources">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Downloads</HoveredLink>
              <HoveredLink href="/">Blogs</HoveredLink>
              <HoveredLink href="/">TeslaVolts API</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="About Us">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">About Us</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Contact Us</HoveredLink>
            </div>
          </MenuItem>
        </Menu>

        <button className="py-2 px-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all ease-in-out duration-300">
          Reserve Demo
        </button>
      </div>
    </div>
  );
}

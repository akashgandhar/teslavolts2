import Image from "next/image";
import React from "react";
import { Timeline } from "../components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Intelligent Charging",
      content: (
        <div className="text-3xl">
          Scale Your Charging Infrastructure and Grid Capacity with a
          Cloud-Based System
          <p className="text-neutral-800  text-lg md:text-sm font-normal mb-8"></p>
          <div className="w-full flex gap-5 flex-row items-center justify-center p-8">
            <Image
              src="/assets/battery.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg mix-blend-multiply object-cover h-40 md:h-72 lg:h-96 w-1/2"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Fleet Management",
      content: (
        <div className="text-3xl">
          Retrieve Comprehensive Data on Charging Stations and Transactions.
          <p className="text-neutral-800  text-lg md:text-sm font-normal mb-8"></p>
          <div className="w-full flex gap-5 flex-row items-center justify-center p-8">
            <Image
              src="/assets/fleet.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-contain h-40 md:h-72 lg:h-96 w-full mix-blend-multiply"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Charging-as-a-Service",
      content: (
        <div className="text-3xl">
          Request on-demand EV charging when a vehicle is low or out of range.
          <p className="text-neutral-800  text-lg md:text-sm font-normal mb-8"></p>
          <div className="w-full flex gap-5 flex-row items-center justify-center p-8">
            <Image
              src="/assets/car.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-contain h-40 md:h-72 lg:h-96 w-full mix-blend-multiply"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Billing Management",
      content: (
        <div className="text-3xl">
          Simplify Charger Payments and Billing Operations Management.
          <p className="text-neutral-800  text-lg md:text-sm font-normal mb-8"></p>
          <div className="w-full flex gap-5 flex-row items-center justify-center p-8">
            <Image
              src="/assets/bill.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-contain h-40 md:h-72 lg:h-96 w-full mix-blend-multiply"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Remote Management",
      content: (
        <div className="text-3xl">
          Retrieve Comprehensive Data on Charging Stations and Transactions.
          <p className="text-neutral-800  text-lg md:text-sm font-normal mb-8"></p>
          <div className="w-full flex gap-5 flex-row items-center justify-center p-8">
            <Image
              src="/assets/remote.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-contain h-40 md:h-72 lg:h-96 w-full mix-blend-multiply"
            />
          </div>
        </div>
      ),
    },
    {
      title: "TeslaVolts App",
      content: (
        <div className="text-3xl">
          Simplify the charging needs with Intelligent EV Charging app that is
          Next-Level.
          <p className="text-neutral-800  text-lg md:text-sm font-normal mb-8"></p>
          <div className="w-full flex gap-5 flex-row items-center justify-center p-8">
            <Image
              src="/assets/app.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-contain h-40 md:h-72 lg:h-96 w-full"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

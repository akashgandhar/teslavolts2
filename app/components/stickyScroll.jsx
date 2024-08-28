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
          <Image
            src="/vectors/inteligent.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-40 md:h-72 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "Fleet Management",
      content: (
        <div className="text-3xl">
          Retrieve Comprehensive Data on Charging Stations and Transactions.
          <p className="text-neutral-800  text-lg md:text-sm font-normal mb-8"></p>
          <Image
            src="/vectors/fleet.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-40 md:h-72 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "Charging-as-a-Service",
      content: (
        <div className="text-3xl">
          Request on-demand EV charging when a vehicle is low or out of range.
          <p className="text-neutral-800  text-lg md:text-sm font-normal mb-8"></p>
          <Image
            src="/vectors/caas.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-40 md:h-72 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "Billing Management",
      content: (
        <div className="text-3xl">
          Simplify Charger Payments and Billing Operations Management.
          <p className="text-neutral-800  text-lg md:text-sm font-normal mb-8"></p>
          <Image
            src="/vectors/biling.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-40 md:h-72 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "Remote Management",
      content: (
        <div className="text-3xl">
          Retrieve Comprehensive Data on Charging Stations and Transactions.
          <p className="text-neutral-800  text-lg md:text-sm font-normal mb-8"></p>
          <Image
            src="/vectors/remote.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-40 md:h-72 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "TeslaVolts App",
      content: (
        <div className="text-3xl">
          Simplify the charging needs with Intelligent EV Charging app that is Next-Level.
          <p className="text-neutral-800  text-lg md:text-sm font-normal mb-8"></p>
          <Image
            src="/vectors/app.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-40 md:h-72 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
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

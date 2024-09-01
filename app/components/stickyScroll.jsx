import Image from "next/image";
import React from "react";
import { Timeline } from "../components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Intelligent Charging",
      desc: "Simplify Charging By Intelligent Systems.",
      img: "/new/s1.jpg",
      
    },
    {
      title: "Fleet Management",
      desc: "Retrieve Comprehensive Data on Charging Stations and Transactions.",
      img: "/new/s2.jpg",
      
    },
    {
      title: "Charging-as-a-Service",
      desc: "Request on-demand EV charging when a vehicle is low or out of range.",
      img: "/new/s3.jpg",
      
    },
    {
      title: "Billing Management",
      desc: "Simplify Charger Payments and Billing Operations Management.",
      img: "/new/s4.jpg",
      
    },
    {
      title: "Remote Management",
      desc: "Retrieve Comprehensive Data on Charging Stations and Transactions.",
      img: "/new/s5.jpg",
      
    },
    {
      title: "TeslaVolts App",
      desc: "Simplify the charging needs with Intelligent EV Charging app that is Next-Level.",
      img: "/assets/app.png",
      
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

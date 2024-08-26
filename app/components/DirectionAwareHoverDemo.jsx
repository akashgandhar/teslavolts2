"use client";

import Image from "next/image";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

const extensive = [
    {
        title: "IC3 Controllers with ML",
        description: "Discover how Teslavolts' IC3 controllers leverage machine learning to enhance EV charging efficiency and battery health.",
        imageUrl: "/lowerstrip/1.jpeg",
    },
    {
        title: "EV Chargers and Software",
        description: "Explore our advanced EV charging solutions and software designed to optimize performance and user experience.",
        imageUrl: "/lowerstrip/2.webp",
    },
    {
        title: "Infra-less EV CaaS Hyper-Chargers",
        description: "Experience the next evolution in EV charging with our infrastructure-less Charging-as-a-Service (CaaS) hyper-chargers.",
        imageUrl: "/lowerstrip/3.jpg",
    },
];

export function DirectionAwareHoverDemo() {
    return (
        <div className="flex flex-col md:flex-row px-2 w-full justify-center gap-4">
            {extensive.map(({ title, description, imageUrl }, index) => (
                <div key={index} className="flex-1 flex flex-col bg-black bg-opacity-50 text-white rounded-lg">
                    <DirectionAwareHover imageUrl={imageUrl} className="relative flex flex-col h-full">
                        <div className="flex-grow flex flex-col justify-between p-6">
                            <div>
                                <p className="font-bold text-xl mb-4">{title}</p>
                                <p className="font-normal text-sm">{description}</p>
                            </div>
                            <button className="px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition duration-300 mt-4 w-fit">
                                Learn More →
                            </button>
                        </div>
                    </DirectionAwareHover>
                </div>
            ))}
        </div>
    );
}

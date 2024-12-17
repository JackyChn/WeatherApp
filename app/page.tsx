import { getWeatherInfo } from "@/services/weatherApi";
import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <main className="w-screen h-screen relative flex items-center justify-center px-6 py-6">
      {/* background image */}
      <Image
        src={"/Sunny.jpg"}
        alt="Background"
        fill
        priority
        className="object-cover z-[-10]"
      />
      <div className="w-96 h-96 bg-slate-300 bg-opacity-80 border-2 border-colors-secondary rounded-xl">
        <h1 className="text-center font-semibold mt-2">
          Check weather for any city
        </h1>
        <div className="w-full flex items-center justify-center mt-6">
          <input
            type="text"
            placeholder="Enter city name...."
            className="w-full max-w-[80%] p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </main>
  );
}

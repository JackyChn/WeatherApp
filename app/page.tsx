import Hero from "@/components/Hero";
import SearchWeather from "@/components/SearchWeather";
import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <main className="w-screen h-screen relative flex items-center justify-center px-6 py-6">
      {/* Hero */}
      <Hero />
      {/* Background Image */}
      <Image
        src={"/Sunny.jpg"}
        alt="Background"
        fill
        priority
        className="object-cover z-[-10]"
      />
      {/* Main Weather Box */}
      <SearchWeather />
    </main>
  );
}

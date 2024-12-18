import Hero from "@/components/Hero";
import SearchWeather from "@/components/SearchWeather";
import React from "react";

export default function HomePage() {
  return (
    <main className="relative flex h-screen w-screen items-center justify-center px-6 py-6">
      {/* Hero */}
      <Hero />
      {/* Main Weather Box */}
      <SearchWeather />
    </main>
  );
}

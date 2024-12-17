import Weather from "@/components/ui/Weather";
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
      {/* Main Weather box */}
      <Weather />
    </main>
  );
}

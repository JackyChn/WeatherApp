import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <main className="w-screen h-screen relative">
      <Image
        src={"/Sunny.jpg"}
        alt="Background"
        fill
        priority
        className=" z-[-10]"
      />
      <div></div>
    </main>
  );
}

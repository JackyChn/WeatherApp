import Image from "next/image";
import React from "react";

export default function WeatherInfoPlaceHolder() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center">
      <div>
        <Image
          src={"/Weather.png"}
          alt="Weather Information"
          width={100}
          height={100}
        />
        <p className="mt-4 text-center text-black">Search Weather</p>
      </div>
    </div>
  );
}

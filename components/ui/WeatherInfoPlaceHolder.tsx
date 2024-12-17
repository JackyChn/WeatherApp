import Image from "next/image";
import React from "react";

export default function WeatherInfoPlaceHolder() {
  return (
    <div className="flex flex-wrap items-center justify-center mt-10">
      <div>
        <Image
          src={"/Weather.png"}
          alt="Weather Information"
          width={100}
          height={100}
        />
        <p className="mt-4 text-center">Search Weather</p>
      </div>
    </div>
  );
}

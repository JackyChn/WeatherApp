import Image from "next/image";
import React from "react";

export default function CityNotFound() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center">
      <div>
        <Image src={"/NotFound.png"} alt="Not Found" width={100} height={100} />
        <p className="mt-4 text-center text-black">City Not Found</p>
      </div>
    </div>
  );
}

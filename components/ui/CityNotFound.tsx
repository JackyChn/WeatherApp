import Image from "next/image";
import React from "react";

export default function CityNotFound() {
  return (
    <div className="flex flex-wrap items-center justify-center mt-10">
      <div>
        <Image src={"/NotFound.png"} alt="Not Found" width={100} height={100} />
        <p className="mt-4 text-center">City Not Found</p>
      </div>
    </div>
  );
}

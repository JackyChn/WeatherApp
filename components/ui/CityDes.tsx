import React from "react";

interface CityDescriptionProps {
  [key: string]: string;
}

export default function CityDes({
  officialName,
  weather,
}: CityDescriptionProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 px-4 text-black">
      <p className="text-2xl font-semibold">{officialName}</p>
      <p className="text-lg text-gray-700">{weather}</p>
    </div>
  );
}

import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export default function Hero() {
  return (
    <div className="absolute top-28 md:top-24 left-1/2 transform -translate-x-1/2 z-10">
      <TextGenerateEffect
        words={"Check weather for any city in the world!"}
        className="lg:text-4xl"
      />
    </div>
  );
}

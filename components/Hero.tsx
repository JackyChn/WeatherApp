import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export default function Hero() {
  return (
    <div className="absolute left-1/2 top-32 z-10 -translate-x-1/2 transform md:top-24">
      <TextGenerateEffect
        words={"Check weather for any city in the world!"}
        className="lg:text-4xl"
      />
    </div>
  );
}

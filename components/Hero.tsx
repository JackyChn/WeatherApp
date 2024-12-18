import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export default function Hero() {
  return (
    <div className="absolute left-1/2 top-20 z-10 -translate-x-1/2 transform md:top-24">
      <TextGenerateEffect
        words={"Check weather for any city!"}
        className="lg:text-4xl"
      />
    </div>
  );
}

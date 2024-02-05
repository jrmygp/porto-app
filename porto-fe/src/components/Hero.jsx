/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { memo } from "react";

import image from "../assets/hero_img.png";
import Button from "./Button";

function Hero() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-6xl z-10">Hello, Jeremy here!</h1>
      <article className="flex flex-col gap-10 z-10">
        <h2 className="text-4xl max-w-[1000px] italic">
          "Embrace challenges as opportunities, let passion drive your journey, and resilience be the force that turns
          setbacks into comebacks. In the dance of life, each step forward paints your unique story with determination
          and growth. Your journey is a masterpiece in the making, so dance boldly to the rhythm of your dreams."
        </h2>
        <p className="text-4xl">- Wise old man</p>

        <Button title="Let's begin" />
      </article>

      <img src={image} className="object-cover h-auto max-w-full fixed right-0" alt="hero-img" />
    </div>
  );
}

export default memo(Hero);

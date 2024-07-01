/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { memo } from "react";

import image from "../assets/hero_img.png";

function Hero() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-6xl z-10">Hello, Jeremy here!</h1>
      <article className="flex flex-col gap-10 z-10">
        <h2 className="text-4xl max-w-[1000px] italic">
          “Dreams without goals are just dreams, and ultimately they fuel disappointment. On the road to achieving your
          dreams, you must apply discipline but more importantly consistency, because without commitment you'll never
          start, but without consistency you'll never finish.”
        </h2>
        <p className="text-4xl">- Denzel Washington</p>
      </article>

      <img src={image} className="object-cover h-auto max-w-full fixed right-0" alt="hero-img" />
    </div>
  );
}

export default memo(Hero);

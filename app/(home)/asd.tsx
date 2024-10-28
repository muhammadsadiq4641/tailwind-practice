import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import React, { useEffect } from "react";

export const FiftyFiftyHero = () => {
  return (
    <section className="mx-auto my-4 ">
      <Left />
    </section>
  );
};

const Left = () => (
  <div className=" flex flex-col justify-between border-r border-neutral-700 md:col-span-6">
    <BeamInput />
  </div>
);

const BeamInput = () => {
  const turn = useMotionValue(0);

  useEffect(() => {
    animate(turn, 1, {
      ease: "linear",
      duration: 3,
      repeat: Infinity,
    });
  }, []);

  const backgroundImage = useMotionTemplate`conic-gradient(from ${turn}turn, #6EE7B700 75%, #6EE7B7 100%)`;

  return (
    <form className="relative z-30 flex w-full h-screen items-center gap-2 border-t border-neutral-700 bg-neutral-950 py-1.5 pl-6 pr-1.5">
      <input
        type="email"
        placeholder="Enter your email for a launch discount 🚀"
        className="w-full bg-black text-sm text-white placeholder-neutral-500 focus:outline-0"
      />

      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          style={{
            backgroundImage,
          }}
          className="mask-with-browser-support absolute -inset-[1px] border border-transparent bg-origin-border"
        />
      </div>
    </form>
  );
};

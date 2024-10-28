"use client";
import React, { useEffect, useState } from "react";
import Hero from "./(home)/hero";
import { FiftyFiftyHero } from "./(home)/asd";

const Home: React.FC = () => {
  const [showComp, setShowComp] = useState(true);

  return (
    <main className="">
      {showComp && <Hero />}
      <button onClick={() => setShowComp(!showComp)}>Hide</button>
    </main>
  );
};

export default Home;

import React, { useEffect, useState, useCallback, useMemo } from "react";

const Hero = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const calculate = useMemo(() => {
    console.log("Calculating...");
    return 10;
    // Any logic you want to perform with `count2`
  }, [count2]);

  useEffect(() => {
    console.log("value", calculate);
  }, [calculate]);

  return (
    <div className="h-[60vh] flex gap-10 justify-center items-center">
      <div>
        <h1>Counter1: {count1}</h1>
        <br />
        <button onClick={() => setCount1(count1 + 1)}>Increment</button>
      </div>
      <div>
        <h1>Counter2: {count2}</h1>
        <br />
        <button onClick={() => setCount2(count2 + 1)}>Increment</button>
      </div>
    </div>
  );
};

export default Hero;

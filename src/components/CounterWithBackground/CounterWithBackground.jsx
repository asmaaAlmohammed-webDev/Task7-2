import { useState, useEffect } from "react";

function CounterWithBackground() {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("white"); // Initial background color

  useEffect(() => {
    // Update background color based on count
    if (count === 10 || count === 100 || count === 1000) {
      setBackgroundColor("yellow"); // Change background to yellow on milestones
    } else {
      setBackgroundColor("white"); // Reset to white otherwise
    }
  }, [count]); // Dependency array includes count, so it runs on count update

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ backgroundColor }}>
      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default CounterWithBackground;

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isDecreasing, setIsDecreasing] = useState(false);

  const handleClick = () => {
    if (count < 10) {
      setCount(count + 1);
    } else if (count < 100) {
      setCount(count + 10);
    } else if (count < 1000) {
      setCount(count + 100);
    } else if (count === 1000) {
      setIsDecreasing(true);
    }
  };

  const handleDecrease = () => {
    if (count > 100 && count <= 1000) {
      setCount(count - 100);
    } else if (count > 10 && count <= 100) {
      setCount(count - 10);
    } else if (count >= 1 && count <= 10) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increase</button>
      {isDecreasing && <button onClick={handleDecrease}>Decrease</button>}
    </div>
  );
}

export default Counter;

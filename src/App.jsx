import { useState, useEffect } from "react";
import "./App.css";
function App() {
  let [count, setCount] = useState(0);
  const [isDecreasing, setIsDecreasing] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    setShowPopup(true);
    setPopupMessage("Welcome!");
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (count < 10) {
      setCount(count + 1);
    } else if (count < 100) {
      setCount(count + 10);
    } else if (count < 1000) {
      setCount(count + 100);
    } else if (count === 1000) {
      setIsDecreasing(true);
    } else if (count > 1000) {
      setCount(0);
    }

    if (count === 9) {
      setShowPopup(true);
      setPopupMessage("You reached 10 !!");
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
    if (count === 90) {
      setShowPopup(true);
      setPopupMessage("You reached  100 !!");
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
    if (count === 900) {
      setShowPopup(true);
      setPopupMessage("You reached  1000 !!");
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
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


  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    if (count === 10 || count === 100 || count === 1000) {
      setBackgroundColor("darkcyan");
    } else {
      setBackgroundColor("white");
    }
  }, [count]);

  return (
    <>
      {/* counter */}
      <div className="count" style={{ backgroundColor }}>
        <h1>{count}</h1>
        <button onClick={handleClick}>Increase</button>
        {isDecreasing ? <button onClick={handleDecrease}>Decrease</button> : ""}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={closePopup}>
                &times;
              </span>
              <p>{popupMessage}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

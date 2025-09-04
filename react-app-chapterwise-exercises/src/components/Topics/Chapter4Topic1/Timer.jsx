import React, { useState, useEffect } from "react";

export default function Timer() {
  // State to hold the current time
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // useEffect runs on component mount
  useEffect(() => {
    console.log("Component Mounted!");

    // Start an interval to update time every second
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function (runs on unmount)
    return () => clearInterval(interval);
  }, []); // empty dependency array → runs only once on mount

  return (
    <div className="p-4">
      <h3 className="font-bold mb-2">Timer Component</h3>
      <p className="text-lg">Current Time: {time}</p>
    </div>
  );
}

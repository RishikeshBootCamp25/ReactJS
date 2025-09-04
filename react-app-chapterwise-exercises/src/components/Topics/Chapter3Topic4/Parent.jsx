import Child from "./Child";
import { useState } from "react";

export default function Parent() {
  const [message, setMessage] = useState("");

  // Function that will be called by child
  const handleMessage = (childData) => {
    setMessage(childData);
  };

  return (
    <div>
      <p>Message from Child: {message}</p>

      {/* Pass function as prop */}
      <Child sendMessage={handleMessage} />
    </div>
  );
}


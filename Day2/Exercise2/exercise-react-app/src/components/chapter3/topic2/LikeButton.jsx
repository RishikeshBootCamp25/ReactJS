import React, { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded ${
        liked ? "bg-blue-500" : "bg-gray-200 text-black"
      }`}
    >
      {liked ? "Like" : "Unlike"}
    </button>
  );
}
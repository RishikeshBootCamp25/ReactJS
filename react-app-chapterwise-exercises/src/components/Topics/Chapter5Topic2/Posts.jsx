import React, { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetching data
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 5))) // Only first 5 posts
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">First 5 Posts</h2>
      <ul className="list-disc pl-5">
        {posts.map((post) => (
          <li key={post.id} className="mb-1">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

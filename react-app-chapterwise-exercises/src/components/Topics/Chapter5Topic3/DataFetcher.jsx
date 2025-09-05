import React, { useEffect, useState } from "react";

export default function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        setData(json.slice(0, 5)); // get first 5 items
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error fetching data</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">First 5 Posts</h2>
      <ul className="list-disc pl-5">
        {data.map((item) => (
          <li key={item.id} className="mb-1">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

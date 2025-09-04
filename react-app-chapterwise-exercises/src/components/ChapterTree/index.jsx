import React, { useState } from "react";
import { Link } from "react-router-dom";
import chaptersData from "./chapters.json"; // import the JSON file

export default function ChapterTree() {
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (id) => {
    setOpenChapter(openChapter === id ? null : id);
  };

  return (
    <div className="h-screen">
      <ul>
        {chaptersData.map((chapter) => (
          <li key={chapter.id} className="mb-2">
            <button
              onClick={() => toggleChapter(chapter.id)}
              className="bg-blue-500 w-full text-left font-semibold p-2 rounded"
            >
              {chapter.title}
            </button>

            {openChapter === chapter.id && (
              <ul className="ml-4 mt-2 space-y-1">
                {chapter.topics.map((topic) => (
                  <li key={topic.id}>
                    <Link
                      to={`chapter${chapter.id}/topic${topic.id}`}
                      className="block p-2 text-sm text-gray-300 hover:text-green hover:bg-gray-800 rounded"
                    >
                      {topic.id}: {topic.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

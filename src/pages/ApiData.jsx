import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/fetchPosts";
import Button from "../components/Button";
import { formatDate } from "../utils/formatDate";

function ApiData() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts(page).then(setPosts);
  }, [page]);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6"> 
      <h2 className="text-2xl font-semibold mb-4 text-center">Public API Data</h2>
      <p className="text-gray-500 dark:text-gray-400">Fetch and display data from an API here</p>
      </div>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 border border-gray-300 rounded px-3 py-2 dark:bg-gray-700"
      />
      <ul className="space-y-3">
        {filtered.map((p) => (
          <li key={p.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h3 className="font-bold text-lg">{p.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{p.body}</p>
            <p className="text-sm text-gray-500 mt-1">
              Posted on {formatDate(new Date())}
            </p>
          </li>
        ))}
      </ul>

      <div className="flex justify-center gap-3 mt-6">
        <Button onClick={() => setPage((p) => Math.max(p - 1, 1))}>Prev</Button>
        <Button onClick={() => setPage((p) => p + 1)}>Next</Button>
      </div>
    </div>
  );
}

export default ApiData;


import React, { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";

const PAGE_SIZE = 10;

function PostList() {
  const [posts, setPosts] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setDisplayed(filtered.slice(0, page * PAGE_SIZE));
  }, [posts, page, search]);

  const loadMore = () => setPage((p) => p + 1);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div>
      <div className="mb-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <h2 className="text-xl font-bold">Posts</h2>
        <input
          className="border rounded px-2 py-1"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayed.map((post) => (
          <Card key={post.id} title={post.title}>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>
      {displayed.length < posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      ).length && (
        <div className="flex justify-center mt-4">
          <Button onClick={loadMore}>Load More</Button>
        </div>
      )}
    </div>
  );
}

export default PostList;
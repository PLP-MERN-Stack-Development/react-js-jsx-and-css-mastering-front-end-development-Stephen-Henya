export async function fetchPosts(page = 1, limit = 5) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

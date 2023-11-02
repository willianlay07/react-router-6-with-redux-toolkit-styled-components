import React from "react";
import { useLoaderData } from "react-router-dom";
import PostsItem from "./PostsItem";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h1>Posts</h1>
      <ul style={{ listStyleType: "none" }}>
        {posts.map((post) => (
          <PostsItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default Posts;

export async function loader() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return data;
}

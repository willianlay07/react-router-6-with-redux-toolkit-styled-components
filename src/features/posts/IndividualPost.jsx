import React from "react";
import { useLoaderData } from "react-router-dom";

const IndividualPost = () => {
  const { id, title, body } = useLoaderData();

  return (
    <div>
      <h1>Individual Post: {id}</h1>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default IndividualPost;

export async function loader({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await res.json();

  return data;
}

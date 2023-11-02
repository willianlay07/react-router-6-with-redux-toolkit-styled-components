import React from "react";
import { Link } from "react-router-dom";

const PostsItem = ({ post }) => {
  const { id, title, body } = post;

  return (
    <li>
      <h3>
        <Link to={`/posts/${id}`}>{title}</Link>
      </h3>
      <p>{body}</p>
    </li>
  );
};

export default PostsItem;

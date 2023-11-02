import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul
        style={{ display: "flex", listStyleType: "none", paddingLeft: "0px" }}
      >
        <li style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <NavLink to="/user">User</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;

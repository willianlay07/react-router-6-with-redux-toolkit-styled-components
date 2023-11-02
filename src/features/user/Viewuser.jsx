import React from "react";
import { useSelector } from "react-redux";

const Viewuser = () => {
  const user = useSelector((store) => store.user.username);

  return <div>Welcome {user}</div>;
};

export default Viewuser;

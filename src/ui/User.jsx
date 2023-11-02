import React from "react";
import { useSelector } from "react-redux";
import Createuser from "../features/user/Createuser";
import Viewuser from "../features/user/Viewuser";

const User = () => {
  const user = useSelector((store) => store.user.username);

  return (
    <div>
      <h1>User</h1>
      {!user ? <Createuser /> : <Viewuser />}
    </div>
  );
};

export default User;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";

import styled from "styled-components";

const Input = styled.input`
  font-size: 15px;
  padding: 10px 5px;
  border-radius: 7px;
  border: 1px solid #ccc;
  outline: none;
`;

const Createuser = () => {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    if (!user) return;

    dispatch(updateName(user));
  };

  return (
    <form onSubmit={handleForm}>
      <h4>Create User</h4>

      <Input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
    </form>
  );
};

export default Createuser;

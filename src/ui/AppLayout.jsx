import React from "react";
import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import Loading from "./Loading";

const AppLayout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loading />;

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;

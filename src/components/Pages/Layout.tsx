import React from "react";
import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const MainLayout = () => {
  const [NavFilter, setNavFilter] = useState("");

  return (
    <div>
      <NavBar onSelectedCatagory={(catagory) => setNavFilter(catagory)} />

      <Outlet />
    </div>
  );
};

export default MainLayout;

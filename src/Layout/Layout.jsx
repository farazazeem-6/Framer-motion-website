import Header from ".././components/Header/Header";
import Hero from ".././components/Hero/Hero";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}

export default Layout;

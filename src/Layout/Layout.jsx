import Footer from "../components/Footer/Footer";
import Header from ".././components/Header/Header";
import Hero from ".././components/Hero/Hero";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import PageWrapper from "../components/PageWrapper/PageWrapper";

function Layout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <PageWrapper>
        <Footer />
      </PageWrapper>
    </Fragment>
  );
}

export default Layout;

import Footer from "../components/Footer/Footer";
import Header from ".././components/Header/Header";
import Hero from ".././components/Hero/Hero";
import React, { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import { useSelector } from "react-redux";
import '../../src/App.css'

function Layout() {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

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

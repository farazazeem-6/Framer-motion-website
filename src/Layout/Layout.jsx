import Footer from "../components/Footer/Footer";
import Header from ".././components/Header/Header";
import Hero from ".././components/Hero/Hero";
import React, { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import { useSelector } from "react-redux";
import "../../src/App.css";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import WhatsappBtn from "../components/WhatsappButton/WhatsappBtn";
import Modal from "../components/Modal/Modal";
import { ScrollProgress } from "../components/ui/scroll-progress";

function Layout() {
  const theme = useSelector((state) => state.theme.mode);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Fragment>
      <ScrollProgress />
      <Header />
      <Outlet />
      <PageWrapper>
        <Footer />
      </PageWrapper>
      <WhatsappBtn />
      <ScrollToTop />
    </Fragment>
  );
}

export default Layout;

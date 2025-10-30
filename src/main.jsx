import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../src/Layout/Layout";
import Hero from "./components/Hero/Hero";
import Home from "./Pages/Home";
import Skill from "./components/Skills/Skill";
import Project from "./components/Projectss/Project";
import Testimonials from "./components/Testimonials/Testimonials";
import { Contact } from "lucide-react";
import PageWrapper from "./components/PageWrapper/PageWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "skills",
        element: (
          <PageWrapper>
            <Skill />
          </PageWrapper>
        ),
      },
      {
        path: "projects",
        element: (
          <PageWrapper>
            <Project />
          </PageWrapper>
        ),
      },
      {
        path: "testimonials",
        element: (
          <PageWrapper>
            <Testimonials />
          </PageWrapper>
        ),
      },
      {
        path: "contact",
        element: (
          <PageWrapper>
            <Contact />
          </PageWrapper>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);

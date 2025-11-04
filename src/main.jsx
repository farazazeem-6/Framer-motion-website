import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../src/Layout/Layout";
import Home from "./Pages/Home";
import Skill from "./components/Skills/Skill";
import Project from "./components/Projectss/Project";
import Testimonials from "./components/Testimonials/Testimonials";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import Contact from "./components/Contact/Contact";
import { Provider } from "react-redux";
import { store } from "./store/store";

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
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

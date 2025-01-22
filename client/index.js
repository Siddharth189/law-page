import { createRoot } from "react-dom/client";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cover from "./components/Cover/Cover";
import About from "./components/About us/About";
import Contact from "./components/ContactUs/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Blogs from "./components/TYPES/Blogs";
import BlogDetails from "./components/Blog/BlogDetails";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Cover />, //Error component
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={appRouter} />);

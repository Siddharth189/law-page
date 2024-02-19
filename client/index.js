import { createRoot } from "react-dom/client";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cover from "./components/Cover/Cover";
import About from "./components/About us/About";
import Contact from "./components/ContactUs/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



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
        // {
        //   path: "cart",
        //   element: <Cart />,
        // },
        // {
        //   path: "/restraunt/:id",
        //   element: <RestrauntMenu />,
        // },
      ],
    },
  ]);
  
//   ReactDOM.createRoot(document.getElementById("root")).render(
//     <RouterProvider router={appRouter} />
//   );
  

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={appRouter} />);

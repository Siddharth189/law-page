import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "./components/About us/About";
import Awards from "./components/Awards/Awards";
import Blog_main from "./components/Blog/Blog_main";
import Commit from "./components/Commitments/Commit";
import Contact from "./components/ContactUs/Contact";
import Cover from "./components/Cover/Cover";
import MapContainer from "./components/Map Location/MapContainer";
import Services from "./components/Services/Services";
import Settle from "./components/Settlements/Settle";
import Team from "./components/team/Team";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.targetId) {
      const targetElement = document.getElementById(location.state.targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="app-class">
      <Cover />
      <Awards />
      <About />
      <Settle />
      <Commit />
      <Services />
      <Team />
      <Blog_main />
      <Contact />
      <MapContainer />
    </div>
  );
};

export default App;

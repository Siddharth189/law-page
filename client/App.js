import ReactDOM from "react-dom/client";
import About from "./components/About us/About";
import Awards from "./components/Awards/Awards";
import Blog_main from "./components/Blog/Blog_main";
import Commit from "./components/Commitments/Commit";
import Contact from "./components/ContactUs/Contact";
import Cover from "./components/Cover/Cover";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MapContainer from "./components/Map Location/MapContainer";
import Services from "./components/Services/Services";
import Settle from "./components/Settlements/Settle";
import Team from "./components/team/Team";
import Testimonials from "./components/testimonials/Testimonials";


const App = () => {
  return (
    <div className="app-class">
      <Cover />
      <Awards />
      <About />
      <Settle />
      <Commit />
      <Services />
      <Team />
      {/* <Testimonials /> */}
      <Blog_main />
      <Contact />
      <MapContainer />
    </div>
  );
};


export default App;

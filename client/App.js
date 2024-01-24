import Blog_main from "./components/Blog/Blog_main";
import Contact from "./components/ContactUs/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services/Services";
import Team from "./components/team/Team";
import Testimonials from "./components/testimonials/Testimonials";

const App = () => {
  return (
    <div className="app-class">
      <Header />
      <Services />
      <Team />
      <Testimonials />
      <Blog_main />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

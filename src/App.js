import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About"
import Footer from "./components/Footer";
import Recipes from "./components/Recipes"; 

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialLinks />
      <About />
      <Recipes />
      <Footer />
    </>
  );
}

export default App;

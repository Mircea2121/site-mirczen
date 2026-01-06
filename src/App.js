import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About"
import Footer from "./components/Footer";
import Recipes from "./components/Recipes"; 
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <SocialLinks />
              <About />
              <Footer />
            </>
          }
        />

        {/* Recipes page */}
        <Route
          path="/recipes"
          element={
            <>
              <Navbar />
              <Recipes />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

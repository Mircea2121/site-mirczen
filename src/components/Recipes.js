import React from "react";
import "./Recipes.css";

function Recipes() {
  return (
    <section className="recipes-section" id="recipes">
      <h2 className="recipes-title">My Recipes</h2>

      <p className="recipes-subtitle">
        Here you will soon find all my cooking & ASMR recipes — simple, tasty and satisfying.
      </p>

      <div className="recipes-grid">
        <div className="recipe-card">
          <h3>Coming soon...</h3>
          <p>I will add all my meals here.</p>
        </div>
      </div>
    </section>
  );
}

export default Recipes;

import React from "react";
import "./Recipes.css";
import ribeyeImg from "../assets/recipes/steaksandwich.jpg";
import wrapPizzaImg from "../assets/recipes/pizzawrap.jpg";
import beefImg from "../assets/recipes/beefwrap.jpg";
import { useState } from "react";


const recipesData = [
  {
    id: 1,
    title: "Ribeye Steak Sandwich🥩",
    image: ribeyeImg,
    description: "Ingredients: Ribeye 250-300g, Ciabatta bread, Olive Oil 3-4tbsp, Butter 50g, 3-4 Garlic Cloves,2 slices of cheese, Mayo, Pickle juice and Chopped pickles.",
    steps: [
      "Remove the steak from the fridge and let it rest at room temperature for 20–30 minutes;",
      "Season generously with salt and black pepper on both sides;",
      "Heat a pan over high heat and add olive oil;",
      "Place the ribeye in the hot pan and sear for 4–5 minutes per side;",
      "Add butter, garlic, and fresh rosemary during the last minute;", 
      "Baste the steak with melted butter for extra flavor;",
      "Remove the steak and let it rest for 5–10 minutes;",
      "Slice the ciabatta bread and toast it lightly;",
      "Mix mayo with pickle juice and chopped pickles to make a tangy sauce;",
      "Assemble the sandwich with sliced steak,2 slices of melted cheese sauce, and any desired toppings;",
      "Enjoy your delicious ribeye steak sandwich!"
    ],
    links: {
      tiktok: "https://www.tiktok.com/@mirczenn/video/7582636779879009558?is_from_webapp=1&sender_device=pc&web_id=7566185739283072534",
      instagram: "https://www.instagram.com/reel/DSISk4MiCyE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      youtube: "https://youtube.com/shorts/xXKxN2aXK7U?si=8BpnlHg2xgd7x0TK",
      facebook: "https://www.facebook.com/reel/790880067329574"
    }
  },
  {
    id: 2,
    title: "10-Minute Double-Stack Wrap Pizza🍕",
    image: wrapPizzaImg,
    description: "Ingredients: Large flour tortilla, Tomato sauce, Shredded mozzarella cheese, Pepperoni slices, Prague ham (or your favorite ham),Pepperoni salami (or your favorite salami)",
    steps: [
      "Lay one tortilla flat on a baking tray or pan;",
      "Spread a thin layer of tomato sauce over the tortilla;",
      "Sprinkle a generous amount of shredded mozzarella cheese on top of the sauce;",
      "Add a layer of pepperoni slices evenly over the cheese;",
      "Place the second tortilla on top to create a sandwich;",
      "Anoyher layer of tomato sauce on top of the second tortilla;",
      "Sprinkle more shredded mozzarella cheese;",
      "Place slices of Prague ham evenly over the cheese;",
      "Add a layer of pepperoni salami on top of the ham;",  
      "More shredded mozzarella cheese on top to finish;",
      "Cook for 8-10 minutes until the cheese is melted and the tortillas are golden brown;",
      "Remove from the pan and let it cool for a minute before slicing;",
      " Enjoy your quick and delicious double-stack wrap pizza!"
    ],
    links: {
      tiktok: "https://www.tiktok.com/@mirczenn/video/7581092788721192214?is_from_webapp=1&sender_device=pc&web_id=7566185739283072534",
      instagram: "https://www.instagram.com/reel/DR9mMesCKfj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      youtube: "https://youtube.com/shorts/cQdfmad07fc?si=cjejBt5jj97dZJTb",
      facebook: "https://www.facebook.com/share/r/17q5qjFsAr/"
    }
  },
   {
    id: 3,
    title: "Cheesy Beef Wrap🧀",
    image: beefImg,
    description: "Ingredients: 500g Beef Mince, 1 Medium onion, 5 tbsp Sunflower oil, Salt, Black pepper, 4 slices of cheddar cheese, 80 g grated mozzarella and cheddar, mayonnaise, ketchup, mustard, lemon juice, 2 large flour tortillas.",
    steps: [
      "Heat oil in a pan over medium heat;",
      "Add beef mince, season with salt and black pepper, cook until browned;",
      "Add chopped onion;",
      "Fry until you reach the color shown in the video below;",
      "Cut the tortilla in half and add the beef mixture and one slice of cheddar;",
      "Fold into a triangle, exactly as shown in the video;", 
      "Sprinkle the top with grated cheese;",
      "Bake in the oven for 10 minutes, until the cheese is melted;",
      "Top with a sauce made from ketchup, mayonnaise, mustard, and lemon juice, if desired;",
      "Enjoy your cheesy beef wrap!"
     
    ],
    links: {
      tiktok: "https://www.tiktok.com/@mirczenn/video/7582165423706131734?is_from_webapp=1&sender_device=pc&web_id=7566185739283072534",
      instagram: "https://www.instagram.com/reel/DSFBF6gCFWT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      youtube: "https://youtube.com/shorts/4HQQfE1QJqk?si=Sp80AMkML3k9GlUm",
      facebook: "https://www.facebook.com/reel/4195848750695539"
    }
  },
];

function Recipes() {
  const [openId, setOpenId] = useState(null);

  const toggleRecipe = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="recipes-section">
      <h2 className="recipes-title">My Recipes</h2>
      <div className="recipes-grid">

      {recipesData.map((recipe) => {
      const isOpen = openId === recipe.id;

  return (
    <div className="recipe-card" key={recipe.id}>

      <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-image"
      />

      <h3>{recipe.title}</h3>

      <p className="recipe-desc">{recipe.description}</p>

      <button
         className="recipe-toggle"
         onClick={() => toggleRecipe(recipe.id)}
>
         {isOpen ? "Hide steps" : "View recipe"}
      </button>

         {isOpen && (
           <ul className="recipe-steps">
             {recipe.steps.map((step, index) => (
               <li key={index}>{step}</li>
      ))}
           </ul>
)}


      <div className="recipe-links">
        <a href={recipe.links.tiktok} target="_blank" rel="noreferrer">
          TikTok
        </a>
        <a href={recipe.links.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href={recipe.links.youtube} target="_blank" rel="noreferrer">
          YouTube
        </a>
        <a href={recipe.links.facebook} target="_blank" rel="noreferrer">
          Facebook
        </a>
      </div>
    </div>
  );
  })}
</div>

    </section>
  );
}

export default Recipes;

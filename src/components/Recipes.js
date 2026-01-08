import React from "react";
import "./Recipes.css";
import ribeyeImg from "../assets/recipes/steaksandwich.jpg";
import wrapPizzaImg from "../assets/recipes/pizzawrap.jpg";
import beefImg from "../assets/recipes/beefwrap.jpg";
import upsidedownImg from "../assets/recipes/upsidedown.jpg";
import pistachioImg from "../assets/recipes/pistachiotiramisu.jpg";
import breakfastwrapImg from "../assets/recipes/breakfastwrap.jpg";
import potatopizzaImg from "../assets/recipes/potatopizza.jpg";
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
      "Another layer of tomato sauce on top of the second tortilla;",
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
  {
    id: 4,
    title: "UpSideDown Breakfast",
    image: upsidedownImg,
    description: "Ingredients: 6 slices of bacon, 3 medium grated potatoes, 3 tbsp olive oil, 100g mozzarella, salt and black pepper.",
    steps: [
      "Brown the bacon in a little olive oil;",
      "Once the bacon is browned, remove it from the pan and add half of the grated potatoes, cooking until well browned;",
      "Add the bacon back on top when the potatoes are almost done;",
      "Add the mozzarella;",
      "Cover with the remaining half of the grated potatoes;",
      "Bake in the oven at 200°C for 10–15 minutes, until golden and crispy."
   ],
    links: {
      tiktok: "https://www.tiktok.com/@mirczenn/video/7586614351675526422?is_from_webapp=1&sender_device=pc&web_id=7566185739283072534",
      instagram: "https://www.instagram.com/reel/DSj41T1CPwS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      youtube: "https://youtube.com/shorts/2NgbluXCZ6w?si=CvmoXDWZK-eTg85a",
      facebook: "https://www.facebook.com/reel/2082300662571897"
      
  },
},
{
   id: 5,
   title: "Pistachio Tiramisu",
   image: pistachioImg,
   description: "Ingredients: 7 eggs (separated), 1 pack Sponge Fingers, 300ml coffee, 5 tbsp pistachio cream, 500g mascarpone, 10 tbsp sugar, 100g ground pistachios.",
   steps: [
     "First, brew the coffee and let it cool until needed;",
     "Whip the 7 egg whites with 5 tbsp of sugar and a pinch of salt until glossy and stiff (you can test by turning the bowl upside down);",
     "Mix the 7 egg yolks with the remaining 5 tbsp of sugar until creamy, then add the mascarpone and the 5 tbsp of pistachio cream and mix well;",
     "Gradually fold the whipped egg whites into the mascarpone mixture using gentle movements to keep the cream airy;",
     "Arrange a layer of ladyfingers soaked in coffee in the tray;",
     "Add half of the cream, then sprinkle half of the ground pistachios on top;",
     "Repeat the previous step, cover the dish with plastic wrap, and refrigerate overnight;",
     "Serve and enjoy."
],
   links: {
     tiktok: "https://www.tiktok.com/@mirczenn/video/7589228382294904086?is_from_webapp=1&sender_device=pc&web_id=7566185739283072534",
     instagram: "https://www.instagram.com/reel/DS2C11-iCh9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
     youtube: "https://youtube.com/shorts/JpJ5wa0C9_M?si=_6K34eC1lCowTv0J",
     facebook: "https://www.facebook.com/share/r/17sfn82j4A/"
   },
},
   {
   id: 6,
   title: "Breakfast Wrap",
   image: breakfastwrapImg,
   description: "Ingredients: 2 tbsp olive oil, 1 smoked sausage, 1/4 cucumber, 3 cherry tomatoes, 2 beaten eggs, 30g grated mozzarella, 1 tortilla.",
   steps: [
     "Heat the pan with 2 tbsp of olive oil;",
     "Add the sausage, diced as shown in the video, and cook until browned;",
     "Add the 2 beaten eggs, then place the tortilla on top and let the egg cook until it sticks to the tortilla;",
     "Flip everything over and add the mozzarella, finely diced cucumber, and cherry tomatoes;",
     "Fold the tortilla and serve."
],
   links: {
     tiktok: "https://www.tiktok.com/@mirczenn/video/7591793623239363862?is_from_webapp=1&sender_device=pc&web_id=7566185739283072534",
     instagram: "https://www.instagram.com/reel/DTH19O9iDUN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
     youtube: "https://youtube.com/shorts/NJ1A0xyzSHM?si=JA5PiTAylVzMsqco",
     facebook: "https://www.facebook.com/share/r/17hEdNesQM/"
   },
},
   {
   id: 7,
   title: "Potato Pizza",
   image: potatopizzaImg,
   description: "Ingredients: 7 small boiled potatoes, 1 tbsp olive oil, 1 tsp salt, 3 tbsp tomato sauce, 50g grated mozzarella, 5–6 slices of chorizo sausage.",
   steps: [
     "Boil the potatoes in their skins, then smash them exactly as shown in the video;",
     "Add the olive oil and salt, then bake at 200°C for 10–15 minutes until golden;",
     "Add the tomato sauce, half of the mozzarella, and the chorizo;",
     "Top with the remaining mozzarella;",
     "Bake for another 10 minutes until the mozzarella is melted and lightly browned."
],
   links: {
     tiktok: "https://www.tiktok.com/@mirczenn/video/7588505719595470102?is_from_webapp=1&sender_device=pc&web_id=7566185739283072534",
     instagram: "https://www.instagram.com/reel/DSxB_W5CPwi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
     youtube: "https://youtube.com/shorts/P7qRE_y-UqE?si=GN9IgdPPMOc3hm4E",
     facebook: "https://www.facebook.com/share/r/1E4eWezmN7/"
   },
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

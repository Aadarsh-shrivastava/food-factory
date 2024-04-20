import React from "react";
import { useSandwhich } from "../hooks/useSandwhich";
import Ingredient from "./Ingredient";
const INGREDIENT_SPACING = 0.2;
function SandWhich() {
  const ingredients = useSandwhich((state) => state.ingredients);
  console.log(ingredients);
  return (
    <>
      {ingredients &&
        ingredients.map((item, index) => (
          <Ingredient
            ingredient={item}
            position-y={index * INGREDIENT_SPACING}
          />
        ))}
    </>
  );
}

export default SandWhich;

import { Gltf } from "@react-three/drei";
import React, { Suspense } from "react";
import { useSandwhich, INGREDIENTS } from "../hooks/useSandwhich";

function Ingredient({ ingredient, ...props }) {
  const ingredients = useSandwhich((state) => state.ingredient);
  return (
    <Suspense>
      <group {...props}>
        <Gltf src={INGREDIENTS[ingredient.name].src} />
      </group>
    </Suspense>
  );
}

export default Ingredient;

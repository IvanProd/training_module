import recipes from "./recipes.json";
import { RecipesList } from "./RecipesList";

export const App = () => {
  return (
    <div>
      <RecipesList  recipes={recipes} />
    </div>
  );
};

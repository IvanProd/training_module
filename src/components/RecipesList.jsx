import { Recipe } from "./Recipe";

export const RecipesList = ({recipes}) =>{
    return (
        <ul>
            {recipes.map(recipe => (
            <li key = {recipe.id}>
                <Recipe recipe= {recipe} />
            </li> ))}
        </ul>);
}
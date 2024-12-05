import { Information_Recipe } from "@/types/types";
import { Recipe } from "@/types/typesRecipes";

export const getInformationRecipe = async (id: number) => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id.toString()}/information?apiKey=${API_KEY}`
      );
      if (!response.ok) throw new Error("Error in get information");
  
      const data: Recipe = await response.json();
  
      const filterData: Information_Recipe = {
        title: data.title,
        id: data.id,
        instructions: data.instructions,
        readyInMinutes: data.readyInMinutes,
        image: data.image,
        ingredients: data.extendedIngredients
      }
      return filterData;
    } catch (error) {
      console.error(error);
    }
}

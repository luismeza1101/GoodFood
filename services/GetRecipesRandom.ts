import { Data } from "@/types/typesRecipes";

export const getRecipesRandoms = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=12`
    );
    if (!response.ok) throw new Error("Error in fetching");

    const data: Data = await response.json();

    const filterData = data.recipes.map(({id, title, image}) => ({id, title, image}))
    return filterData;
  } catch (error) {
    console.error(error);
  }
};

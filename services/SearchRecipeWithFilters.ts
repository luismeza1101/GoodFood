import { Type_Query_Filter } from "@/types/types";

export const searchRecipeWithFilters = async ({
  diet,
  excludeIngredients,
  includeIngredients,
  query,
}: Type_Query_Filter) => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  let endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`;

  if (query) endpoint += `&query=${query}`;
  if (diet) endpoint += `&diet=${diet}`;
  if (includeIngredients)
    endpoint += `&includeIngredients=${includeIngredients}`;
  if (excludeIngredients)
    endpoint += `&excludeIngredients=${excludeIngredients}`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("Error in fetching");

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error(error);
  }
};

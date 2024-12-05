import { ExtendedIngredient } from "./typesRecipes";

export interface Type_Recipes {
  title: string;
  id: number;
  image: string;
}

export interface Information_Recipe {
  title: string
  id: number
  instructions: string
  readyInMinutes: number
  image: string
  ingredients: ExtendedIngredient[]
}

export interface User{
  id: string
  useName: string
  email: string
  password: string
}

export interface Type_Query_Filter{
  query?: string
  diet?: string
  includeIngredients?: string
  excludeIngredients?: string
}

export interface Type_User {
  display_name: string
  email: string
  sub: string
}

export interface Type_To_Add_Favorites {
  recipeId: string
  title: string
  image: string
  userId: string
}
import { Type_Recipes } from "@/types/types"
import { create } from "zustand"

type RecipeStore = {
    recipes: Type_Recipes[]
    setRecipes: (newRecipes: Type_Recipes[]) => void
}

export const recipesStore = create<RecipeStore>()((set) => ({
    recipes: [],
    setRecipes: (newRecipes) => 
        set(() => ({
            recipes: [...newRecipes]
        }))
}))
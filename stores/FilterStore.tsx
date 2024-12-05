import { create } from "zustand";

type FilterStore = {
  diet: string[];
  includeIngredients: string[];
  excludeIngredients: string[];
  addDiet: (dietToAdd: string) => void;
  addIncludeIngredient: (ingredientToInclude: string) => void;
  addExcludeIngredient: (ingredientToExclude: string) => void;
  clearFilters: () => void
};

export const filterStore = create<FilterStore>()((set) => ({
  diet: [],
  includeIngredients: [],
  excludeIngredients: [],
  addDiet: (dietToAdd) =>
    set((state) => ({
      diet: state.diet.includes(dietToAdd) ? [...state.diet] : [...state.diet, dietToAdd],
    })),
  addIncludeIngredient: (ingredientToInclude) =>
    set((state) => ({
      includeIngredients: state.includeIngredients.includes(ingredientToInclude) ? [...state.includeIngredients] : [...state.includeIngredients, ingredientToInclude],
    })),
  addExcludeIngredient: (ingredientToExclude) =>
    set((state) => ({
      excludeIngredients: state.excludeIngredients.includes(ingredientToExclude) ? [...state.excludeIngredients] : [...state.excludeIngredients, ingredientToExclude],
    })),
    clearFilters: () => 
      set(() => ({
        diet: [],
        includeIngredients: [],
        excludeIngredients: []
      }))
}));

"use client";

import Card_Recipe from "@/components/Card_Recipe";
import Loader from "@/components/Loader";
import { getFavorites } from "@/services/GetFavorites";
import { authStore } from "@/stores/AuthStore";
import { Type_Recipes } from "@/types/types";
import { useEffect, useState } from "react";

const pageFavorites = () => {
  const [recipes, setRecipes] = useState<Type_Recipes[]>([]);
  const [loader, setLoader] = useState(false);
  const { user } = authStore();

  useEffect(() => {
    const handleRecipes = async () => {
      if (!user?.sub) return;
      const { succes, data } = await getFavorites(user.sub);

      if (succes) {
        if (data.length > 0) {
          const recipesFiltered: Type_Recipes[] = data.map((recipe) => ({
            title: recipe.title,
            image: recipe.image,
            id: Number(recipe.recipeId),
          }));

          setRecipes(recipesFiltered);
        }
        setLoader(true);
      }
    };
    handleRecipes();
  }, []);

  return (
    <main className="w-full min-h-[70vh] p-6 desktop:w-[90%] xl:w-[80%] mx-auto flex flex-col">
      <h2 className="text-3xl font-bold">FAVORITES</h2>
      <div className="flex items-center justify-center flex-1">
        {loader ? (
          <section className="grid gap-3 my-5 desktop:grid-cols-2 lg:grid-cols-3 lg:w-[90%] lg:mx-auto lg:gap-6 xl:w-[80%]">
            {recipes.length > 0 ? (
              recipes.map((recipe) => <Card_Recipe key={recipe.id} {...recipe} />)
            ) : (
              <p className="text-3xl text-center col-span-3">You don't have favorite recipes, add recipes to save them</p>
            )}
          </section>
        ) : (
          <Loader />
        )}
      </div>
    </main>
  );
};

export default pageFavorites;

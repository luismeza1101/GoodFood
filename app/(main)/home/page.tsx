"use client";

import { Loader_Recipes } from "@/components/Loaders";
import Options_Search from "@/components/Options_Search";
import Result_Recipes from "@/components/Result_Recipes";
import { getRecipesRandoms } from "@/services/GetRecipesRandom";
import { recipesStore } from "@/stores/RecipesStore";
import { Type_Recipes } from "@/types/types";
import { useEffect, useState } from "react";

const pageHome = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Search without results");
  const [showSelectedFilters, setShowSelectedFilters] = useState(false);
  const [filtersSelected, setFilterSelected] = useState<string[]>([]);
  const { recipes, setRecipes } = recipesStore();

  const handleGetRecipes = async () => {
    const data: Type_Recipes[] | undefined = await getRecipesRandoms();
    if (!data) {
      setMessage("An error occurred, try again later");
      setLoading(true);
      return;
    }
    setRecipes(data);
    setLoading(true);
  };

  const deleteFilters = () => {
    setShowSelectedFilters(false);
    setLoading(false)
    handleGetRecipes();
  };

  useEffect(() => {
    handleGetRecipes();
  }, []);

  return (
    <main className="w-full text-center p-4 grid grid-cols-[75%_25%] grid-rows-[50px_100px_3fr] desktop:w-[95%] desktop:mx-auto desktop:grid-cols-[30%_70%] desktop:grid-rows-[50px_100px_1fr] xl:w-[90%]">
      {/* TITLE */}
      <h1 className="col-span-2 text-2xl place-content-center">
        What will we cook today?
      </h1>
      {/* SEARCHBAR */}
      <Options_Search
        setLoading={setLoading}
        setShowSelectedFilters={setShowSelectedFilters}
        setFilterSelected={setFilterSelected}
      />
      {/* RESULTS */}
      {loading ? (
        <div className="min-h-[50vh] col-span-2 gap-5 py-6 desktop:col-start-2 desktop:row-start-3 desktop:p-5">
          {showSelectedFilters && (
            <div className="flex gap-2 items-center">
              {filtersSelected.length == 0 ? (
                <p className="flex-1">Without Filters</p>
              ) : (
                <div className="flex gap-2 flex-wrap flex-1">
                  {filtersSelected.map((filter, index) => (
                    <span
                      className="border-2 border-black rounded-full bg-white px-2"
                      key={index}
                    >
                      {filter}
                    </span>
                  ))}
                </div>
              )}
              <button
                className="bg-black rounded-full text-white w-[130px] py-1"
                onClick={deleteFilters}
              >
                Clear Search
              </button>
            </div>
          )}
          <Result_Recipes recipes={recipes} message={message} />
        </div>
      ) : (
        <div className="w-full col-span-2 flex items-center justify-center min-h-[50vh] desktop:col-start-2 desktop:row-start-3">
          <Loader_Recipes />
        </div>
      )}
    </main>
  );
};

export default pageHome;

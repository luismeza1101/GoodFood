"use client";

import { useState } from "react";
import { FilterDesktop, FilterMobile } from "./Filter";
import { AnimatePresence } from "motion/react";
import { searchRecipeWithFilters } from "@/services/SearchRecipeWithFilters";
import { filterStore } from "@/stores/FilterStore";
import { Type_Query_Filter, Type_Recipes } from "@/types/types";
import { recipesStore } from "@/stores/RecipesStore";
import { Card_Error } from "./Cards_Status";

interface Props {
  setLoading: (load: boolean) => void;
  setShowSelectedFilters: (show: boolean) => void;
  setFilterSelected: (filters: string[]) => void;
}

const Options_Search: React.FC<Props> = ({
  setLoading,
  setShowSelectedFilters,
  setFilterSelected,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [valueQuery, setValueQuery] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const { diet, excludeIngredients, includeIngredients, clearFilters } =
    filterStore();
  const { setRecipes } = recipesStore();

  const handleShowFilters = (show: boolean) => {
    if (show) {
      setShowFilters(false);
      document.body.classList.remove("overflow-hidden");
    } else {
      setShowFilters(true);
      document.body.classList.add("overflow-hidden");
    }
  };

  const handleSearchWithFilters = async (
    evt: React.FormEvent<HTMLFormElement>
  ) => {
    evt.preventDefault();

    if (
      !valueQuery &&
      diet.length == 0 &&
      includeIngredients.length == 0 &&
      excludeIngredients.length == 0
    ) {
      setShowMessage(true);
      return;
    }

    setLoading(false);
    setFilterSelected([...diet, ...includeIngredients, ...excludeIngredients]);
    setShowSelectedFilters(true);

    const request: Type_Query_Filter = {};

    if (valueQuery) request.query = valueQuery.trim().toLowerCase();
    if (diet.length != 0) request.diet = diet.join(",");
    if (includeIngredients.length != 0)
      request.includeIngredients = includeIngredients.join(",");
    if (excludeIngredients.length != 0)
      request.excludeIngredients = excludeIngredients.join(",");

    const data: Type_Recipes[] = await searchRecipeWithFilters(request);
    setRecipes(data);
    setLoading(true);
    clearFilters();
    setValueQuery('')
  };
  return (
    <>
      <AnimatePresence>
        {showMessage && (
          <div className="absolute min-w-[300px] max-w-[90%] left-1/2 -translate-x-1/2">
            <Card_Error
              message={"You must fill in the blank"}
              setShowMessage={setShowMessage}
            />
          </div>
        )}
      </AnimatePresence>
      {/* SEARCHBAR */}
      <form
        className="row-start-2 place-content-center desktop:col-start-2 flex items-center justify-center gap-4"
        onSubmit={(evt) => handleSearchWithFilters(evt)}
      >
        <div className="bg-gray-300 w-[95%] max-w-[600px] rounded-full flex gap-2 items-center px-4 desktop:mx-auto desktop:w-[75%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3b0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
          <input
            type="text"
            className="flex-1 py-4 bg-transparent outline-none text-lg"
            placeholder="Look for a recipe"
            value={valueQuery ? valueQuery : ""}
            onChange={(e) => setValueQuery(e.target.value)}
          />
        </div>
        <button
          className="hidden bg-black text-white py-4  rounded-full desktop:flex items-center justify-center flex-1 max-w-[200px]"
          type="submit"
        >
          Search
        </button>
      </form>
      {/* FILTER */}
      <div className="place-content-center desktop:row-span-2 desktop:col-start-1 desktop:ow-start-2 desktop:place-content-start flex items-center justify-between sm:justify-around desktop:items-start">
        <button
          className="bg-gray-300 w-[45px] h-[45px] rounded-full flex items-center justify-center desktop:hidden"
          onClick={() => handleShowFilters(showFilters)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-alt"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8h4v4h-4z" />
            <path d="M6 4l0 4" />
            <path d="M6 12l0 8" />
            <path d="M10 14h4v4h-4z" />
            <path d="M12 4l0 10" />
            <path d="M12 18l0 2" />
            <path d="M16 5h4v4h-4z" />
            <path d="M18 4l0 1" />
            <path d="M18 9l0 11" />
          </svg>
        </button>
        <form onSubmit={(evt) => handleSearchWithFilters(evt)}>
          <button
            className="bg-black text-white w-[45px] h-[45px] rounded-full flex items-center justify-center desktop:hidden"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </button>
        </form>
        <div className="hidden desktop:block pt-8 w-full">
          <span className="text-3xl">FILTERS</span>
          <FilterDesktop />
        </div>
      </div>
      {/* FILTERS MOBILE */}
      <AnimatePresence>
        {showFilters && (
          <FilterMobile
            showFilters={showFilters}
            handleShowFilters={handleShowFilters}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Options_Search;

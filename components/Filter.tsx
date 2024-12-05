"use client";

import { filterStore } from "@/stores/FilterStore";
import { motion } from "motion/react";
import { useState } from "react";

interface Props {
  showFilters: boolean;
  handleShowFilters: (show: boolean) => void;
}

const handleAddFilter = (
  evt: React.FormEvent<HTMLFormElement>,
  functionForAdd: (value: string) => void,
  value: string | null
) => {
  evt.preventDefault();
  if (!value) {
    alert("You must fill in the blank");
    return;
  }
  functionForAdd(value.trim().toLowerCase());
};

export const FilterMobile: React.FC<Props> = ({
  handleShowFilters,
  showFilters,
}) => {
  const {
    diet,
    includeIngredients,
    excludeIngredients,
    addDiet,
    addExcludeIngredient,
    addIncludeIngredient,
    clearFilters
  } = filterStore();

  const [valueDiet, setValueDiet] = useState<string | null>(null);
  const [valueIncludeIngredient, setValueIncludeIngredient] = useState<
    string | null
  >(null);
  const [valueExcludeIngredient, setValueExcludeIngredient] = useState<
    string | null
  >(null);

  return (
    <div className="bg-overlay w-full h-screen absolute top-0 left-0 z-50 flex items-end">
      <motion.section
        className="bg-white w-full min-h-[50%] max-h-[85%] rounded-[40px_40px_0_0] p-8 overflow-y-scroll"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.2 }}
      >
        <div className="mb-8 flex items-center justify-between">
          <h5 className="text-3xl">FILTERS</h5>
          <button type="button" onClick={() => handleShowFilters(showFilters)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-xbox-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
              <path d="M9 8l6 8" />
              <path d="M15 8l-6 8" />
            </svg>
          </button>
        </div>
        <div>
          {/* Type of diet */}
          <form
            className="filter"
            onSubmit={(evt) => {
              handleAddFilter(evt, addDiet, valueDiet);
              setValueDiet("");
            }}
          >
            <label htmlFor="diet" className="col-span-2 text-start">
              Type of diet:
            </label>
            <div className="flex items-start flex-wrap gap-1 col-span-2 row-start-2 my-2">
              {diet.length != 0 ? (
                diet.map((diet, index) => (
                  <span
                    className="bg-gray-500 text-white px-2 rounded-full"
                    key={index}
                  >
                    {diet}
                  </span>
                ))
              ) : (
                <p className="text-start text-gray-400">Without Filters</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Ej: vegetarian, gluten free"
              id="diet"
              className="input-form w-full row-start-3"
              onChange={(e) => setValueDiet(e.target.value)}
              value={valueDiet ? valueDiet : ""}
            />
            <button className="button-filter row-start-3" type="submit">
              Apply
            </button>
          </form>
          {/* Include Ingredient */}
          <form
            className="filter"
            onSubmit={(evt) => {
              handleAddFilter(
                evt,
                addIncludeIngredient,
                valueIncludeIngredient
              );
              setValueIncludeIngredient("");
            }}
          >
            <label htmlFor="include" className="col-span-2 text-start">
              With:
            </label>
            <div className="flex items-start flex-wrap gap-1 col-span-2 row-start-2 my-2">
              {includeIngredients.length != 0 ? (
                includeIngredients.map((includeIngredient, index) => (
                  <span
                    className="bg-gray-500 text-white px-2 rounded-full"
                    key={index}
                  >
                    {includeIngredient}
                  </span>
                ))
              ) : (
                <p className="text-start text-gray-400">Without Filters</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Ej: tomato, cheesse"
              id="include"
              className="input-form w-full row-start-3"
              onChange={(e) => setValueIncludeIngredient(e.target.value)}
              value={valueIncludeIngredient ? valueIncludeIngredient : ""}
            />
            <button className="button-filter row-start-3" type="submit">
              Apply
            </button>
          </form>
          {/* Exclude Ingredient */}
          <form
            className="filter"
            onSubmit={(evt) => {
              handleAddFilter(
                evt,
                addExcludeIngredient,
                valueExcludeIngredient
              );
              setValueExcludeIngredient("");
            }}
          >
            <label htmlFor="exclude" className="col-span-2 text-start">
              Without:
            </label>
            <div className="flex items-start flex-wrap gap-1 col-span-2 row-start-2 my-2">
              {excludeIngredients.length != 0 ? (
                excludeIngredients.map((excludeIngredient, index) => (
                  <span
                    className="bg-gray-500 text-white px-2 rounded-full"
                    key={index}
                  >
                    {excludeIngredient}
                  </span>
                ))
              ) : (
                <p className="text-start text-gray-400">Without Filters</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Ej: eggs, chicken"
              id="exclude"
              className="input-form w-full row-start-3"
              onChange={(e) => setValueExcludeIngredient(e.target.value)}
              value={valueExcludeIngredient ? valueExcludeIngredient : ""}
            />
            <button className="button-filter row-start-3" type="submit">
              Apply
            </button>
          </form>
            <button className="w-full bg-black text-white my-5 rounded-full py-4" onClick={() => clearFilters()}>
              Clear Filters
            </button>
        </div>
      </motion.section>
    </div>
  );
};

export const FilterDesktop = () => {
  const {
    diet,
    includeIngredients,
    excludeIngredients,
    addDiet,
    addExcludeIngredient,
    addIncludeIngredient,
    clearFilters,
  } = filterStore();

  const [valueDiet, setValueDiet] = useState<string | null>(null);
  const [valueIncludeIngredient, setValueIncludeIngredient] = useState<
    string | null
  >(null);
  const [valueExcludeIngredient, setValueExcludeIngredient] = useState<
    string | null
  >(null);

  return (
    <div>
      <form
        className="filter"
        onSubmit={(evt) => {
          handleAddFilter(evt, addDiet, valueDiet);
          setValueDiet("");
        }}
      >
        <label htmlFor="diet" className="col-span-2 text-start">
          Type of diet:
        </label>
        <div className="flex items-start flex-wrap gap-1 col-span-2 row-start-2 my-2">
          {diet.length != 0 ? (
            diet.map((diet, index) => (
              <span
                className="bg-gray-500 text-white px-2 rounded-full"
                key={index}
              >
                {diet}
              </span>
            ))
          ) : (
            <p className="text-start text-gray-400">Without Filters</p>
          )}
        </div>
        <input
          type="text"
          placeholder="Ej: vegetarian, gluten free"
          id="diet"
          className="input-form w-full row-start-3"
          onChange={(e) => setValueDiet(e.target.value)}
          value={valueDiet ? valueDiet : ""}
        />
        <button className="button-filter row-start-3" type="submit">
          Apply
        </button>
      </form>
      <form
        className="filter"
        onSubmit={(evt) => {
          handleAddFilter(evt, addIncludeIngredient, valueIncludeIngredient);
          setValueIncludeIngredient("");
        }}
      >
        <label htmlFor="include" className="col-span-2 text-start">
          With:
        </label>
        <div className="flex items-start flex-wrap gap-1 col-span-2 row-start-2 my-2">
          {includeIngredients.length != 0 ? (
            includeIngredients.map((includeIngredient, index) => (
              <span
                className="bg-gray-500 text-white px-2 rounded-full"
                key={index}
              >
                {includeIngredient}
              </span>
            ))
          ) : (
            <p className="text-start text-gray-400">Without Filters</p>
          )}
        </div>
        <input
          type="text"
          placeholder="Ej: tomato, cheesse"
          id="include"
          className="input-form w-full row-start-3"
          onChange={(e) => setValueIncludeIngredient(e.target.value)}
          value={valueIncludeIngredient ? valueIncludeIngredient : ""}
        />
        <button className="button-filter row-start-3" type="submit">
          Apply
        </button>
      </form>
      <form
        className="filter"
        onSubmit={(evt) => {
          handleAddFilter(evt, addExcludeIngredient, valueExcludeIngredient);
          setValueExcludeIngredient("");
        }}
      >
        <label htmlFor="exclude" className="col-span-2 text-start">
          Without:
        </label>
        <div className="flex items-start flex-wrap gap-1 col-span-2 row-start-2 my-2">
          {excludeIngredients.length != 0 ? (
            excludeIngredients.map((excludeIngredient, index) => (
              <span
                className="bg-gray-500 text-white px-2 rounded-full"
                key={index}
              >
                {excludeIngredient}
              </span>
            ))
          ) : (
            <p className="text-start text-gray-400">Without Filters</p>
          )}
        </div>
        <input
          type="text"
          placeholder="Ej: eggs, chicken"
          id="exclude"
          className="input-form w-full row-start-3"
          onChange={(e) => setValueExcludeIngredient(e.target.value)}
          value={valueExcludeIngredient ? valueExcludeIngredient : ""}
        />
        <button className="button-filter row-start-3" type="submit">
          Apply
        </button>
      </form>
      <button
        className="bg-black text-white w-full my-5 py-4 rounded-full text-xl"
        onClick={() => clearFilters()}
      >
        Clear Filters
      </button>
    </div>
  );
};

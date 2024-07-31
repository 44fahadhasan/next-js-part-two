"use client";
import { getBlogs } from "@/utils/loadData";
import Image from "next/image";
import { useEffect, useState } from "react";

const Food = () => {
  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState([]);

  const loadFoodsData = async (foodsName) => {
    const foodData = await getBlogs(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodsName}`
    );

    setFoods(foodData?.meals);
  };

  useEffect(() => {
    loadFoodsData(search);
  }, [search]);

  return (
    <>
      <div className="flex justify-center mt-9">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="py-2 px-4 focus:outline-none text-gray-800 border"
          type="text"
          placeholder="write food name"
        />
        <span className="bg-[#017BFE] py-2 px-4">Search</span>
      </div>

      <div className="">
        <h2 className="text-2xl text-gray-700 font-bold text-center mt-12">
          Total Food Avilable: {foods?.length || 0}
        </h2>
      </div>

      <div class=" font-[sans-serif] my-4 pb-10">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
            {foods?.length < 1 && (
              <h2 className="text-center text-xl py-7">Loading...</h2>
            )}

            {foods === null && (
              <h2 className="text-center text-xl py-7">No Foods Found</h2>
            )}

            {foods?.map((food, idx) => (
              <div
                key={idx}
                class="bg-white rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300"
              >
                <Image
                  src={food?.strMealThumb}
                  width={486}
                  height={200}
                  class="object-cover"
                  layout="responsive"
                  alt="food img"
                />
                <div class="p-6">
                  <span class="text-sm block text-gray-400 mb-2">
                    {food?.strArea} | {food?.strCategory}
                  </span>
                  <h3 class="text-xl font-bold text-[#333]">{food?.strMeal}</h3>
                  <hr class="my-6" />
                  <p class="text-gray-400 text-sm">
                    {food?.strInstructions?.slice(0, 100)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;

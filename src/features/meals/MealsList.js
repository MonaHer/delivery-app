import { useGetAllMealsQuery } from "./apiSlice";
import MealCard from "./MealCard";
import { useState } from "react";

export default function MealsList() {
  const { data, isLoading, isError } = useGetAllMealsQuery();
  const [isVisible, setIsVisible] = useState(3);

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }

  function showMoreMeals() {
    setIsVisible(isVisible + 3);
  }

  function showLessMeals() {
    setIsVisible(isVisible - 3);
  }

  return (
    <>
      <h1>Dishes</h1>
      <ul>
        {data.meals.slice(0, isVisible).map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </ul>
      <button onClick={showLessMeals} disabled={isVisible <= 3}>
        Show less
      </button>
      <button onClick={showMoreMeals} disabled={isVisible >= data.meals.length}>
        Show more
      </button>
    </>
  );
}

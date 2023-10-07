import { useSelector } from "react-redux";
import { useGetAllMealsQuery } from "../meals/apiSlice";

export default function FavoritesList() {
  const { data, isLoading, isError } = useGetAllMealsQuery();
  const isFavorite = useSelector((state) => state.favorites.favorites);

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }

  const favoriteMeals = data.meals.filter((meal) =>
    isFavorite.includes(meal.idMeal)
  );
  return (
    <>
      <h1>Favorites</h1>
      <ul>
        {favoriteMeals.map((meal) => (
          <h2 key={meal.idMeal}>{meal.strMeal}</h2>
        ))}
      </ul>
    </>
  );
}

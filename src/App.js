import "./App.css";
import FavoritesList from "./features/favorites/FavoritesList";
import MealsList from "./features/meals/MealsList";

function App() {
  return (
    <div className="App">
      <MealsList />
      <FavoritesList />
    </div>
  );
}

export default App;

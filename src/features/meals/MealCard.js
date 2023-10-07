import Modal from "react-modal";
import { useState } from "react";
import { toggleFavorite } from "../favorites/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../checkboxes/checkboxSlice";

export default function MealCard({ meal }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const isChecked = useSelector((state) => state.checkboxes);

  const isFavorite = useSelector((state) => state.favorites.favorites);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleToggleFavorite(meal) {
    dispatch(toggleFavorite(meal.idMeal));
  }

  function handleToggleCheckbox(checkboxName) {
    dispatch(toggleCheckbox(checkboxName));
  }

  return (
    <>
      <h2>{meal.strMeal}</h2>
      <button onClick={handleOpenModal}>Show Info</button>
      <button onClick={() => handleToggleFavorite(meal)}>
        {isFavorite.includes(meal.idMeal) ? "Is Favorite" : "No favorite"}
      </button>
      <img
        alt={meal.strMeal}
        src={meal.strMealThumb}
        height={100}
        width={100}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Info Modal"
      >
        <label>
          {meal.strIngredient1}
          <input
            type="checkbox"
            onChange={() => handleToggleCheckbox("checkbox1")}
            checked={isChecked.checkbox1}
          />
        </label>
        <label>
          {meal.strIngredient2}
          <input
            type="checkbox"
            onChange={() => handleToggleCheckbox("checkbox2")}
            checked={isChecked.checkbox2}
          />
        </label>
        <label>
          {meal.strIngredient3}
          <input
            type="checkbox"
            onChange={() => handleToggleCheckbox("checkbox3")}
            checked={isChecked.checkbox3}
          />
        </label>
        <button onClick={handleCloseModal}>Close Info</button>
      </Modal>
    </>
  );
}

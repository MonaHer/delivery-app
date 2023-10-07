import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/meals/apiSlice";
import { favoritesSlice } from "../features/favorites/favoritesSlice";
import { checkboxSlice } from "../features/checkboxes/checkboxSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    favorites: favoritesSlice.reducer,
    checkboxes: checkboxSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

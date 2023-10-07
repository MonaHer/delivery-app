import { createSlice } from "@reduxjs/toolkit";

export const checkboxSlice = createSlice({
  name: "checkboxes",
  initialState: { checkbox1: false, checkbox2: false, checkbox3: false },
  reducers: {
    toggleCheckbox(state, action) {
      const checkboxName = action.payload;
      state[checkboxName] = !state[checkboxName];
    },
  },
});

export const { toggleCheckbox } = checkboxSlice.actions;

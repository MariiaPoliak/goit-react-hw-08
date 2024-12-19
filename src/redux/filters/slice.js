// redux/filters/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "", // Ініціалізуємо searchQuery
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload; // Оновлюємо пошуковий запит
    },
  },
});

export const { setSearchQuery } = filtersSlice.actions;
export default filtersSlice.reducer;

// redux/filters/selectors.js

export const selectSearchQuery = (state) => state.filters.searchQuery; // Селектор для отримання searchQuery

export const selectNameFilter = (state) => state.filters.nameFilter || "";

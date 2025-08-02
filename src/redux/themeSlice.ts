import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTheme: 'theme1',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme(state, action) {
      state.currentTheme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
    loadTheme(state) {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        state.currentTheme = storedTheme;
      }
    },
  },
});

export const { switchTheme, loadTheme } = themeSlice.actions;
export default themeSlice.reducer;
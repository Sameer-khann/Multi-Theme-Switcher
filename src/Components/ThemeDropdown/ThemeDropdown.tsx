import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { switchTheme } from '../../redux/themeSlice';
import './ThemeDropdown.css';

const ThemeDropdown = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value;
    dispatch(switchTheme(selectedTheme));
  };

  return (
    <select className="theme-dropdown" value={currentTheme} onChange={handleChange}>
      <option value="theme1">Theme 1 - Minimalist</option>
      <option value="theme2">Theme 2 - Dark Sidebar</option>
      <option value="theme3">Theme 3 - Colorful Grid</option>
    </select>
  );
};

export default ThemeDropdown;

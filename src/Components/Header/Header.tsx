import React from 'react';
// import ThemeDropdown from '../ThemeDropdown/ThemeDropdown';
import ThemeDropdown from '../ThemeDropdown/ThemeDropdown';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1>🌗 ThemeSwitcher</h1>
    <ThemeDropdown />
  </header>
);

export default Header;

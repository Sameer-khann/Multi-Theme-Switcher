import React from 'react';
// import ThemeDropdown from '../ThemeDropdown/ThemeDropdown';
import ThemeDropdown from '../ThemeDropdown/ThemeDropdown';
import './Header.css';

const Header = () => (
  <header className="header">
    {/* <image src='' alt='logo'/> */}
    <h1>The HIPSTER</h1>
    <ThemeDropdown />
  </header>
);

export default Header;

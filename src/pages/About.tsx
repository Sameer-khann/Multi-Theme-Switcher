import React from 'react';
import { useAppSelector } from '../redux/hooks';
import './About.css';

const About: React.FC = () => {
  const theme = useAppSelector((state) => state.theme.currentTheme);

  return (
    <main className={`about-page ${theme}`}>
      <h2 className="page-title">About This App</h2>
      <p className="about-text">
        This multi-theme switcher app is built with React and TypeScript. It demonstrates advanced concepts like Redux state
        management, dynamic theme switching, routing, API integration, and responsive design.
      </p>
      <p className="about-text">
        Each theme completely transforms the layout, fonts, and styles, offering a fresh and unique experience.
      </p>
    </main>
  );
};

export default About;

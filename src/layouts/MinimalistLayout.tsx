import React from 'react';
import './MinimalistLayout.css';

interface Props {
  children: React.ReactNode;
}

const MinimalistLayout: React.FC<Props> = ({ children }) => {
  return <div className="minimalist-layout">{children}</div>;
};

export default MinimalistLayout;

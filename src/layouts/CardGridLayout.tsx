import React from 'react';
import './CardGridLayout.css';

interface Props {
  children: React.ReactNode;
}

const CardGridLayout: React.FC<Props> = ({ children }) => {
  return <div className="card-grid-layout">{children}</div>;
};

export default CardGridLayout;

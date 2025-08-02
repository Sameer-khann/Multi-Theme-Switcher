import React from 'react';
import './SidebarLayout.css';

interface Props {
  children: React.ReactNode;
}

const SidebarLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="sidebar-layout">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><a href="/">🏠 Home</a></li>
            <li><a href="/about">📖 About</a></li>
            <li><a href="/contact">📞 Contact</a></li>
          </ul>
        </nav>
      </aside>
      <div className="main-content">{children}</div>
    </div>
  );
};

export default SidebarLayout;

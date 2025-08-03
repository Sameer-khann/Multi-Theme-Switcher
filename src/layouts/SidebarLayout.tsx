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
            <li><div className="sidebar_list_items"><a style={{color: 'black'}} href="/">🏠 Home</a></div></li>
            <li><div className="sidebar_list_items"><a style={{color: 'black'}}  href="/about">📖 About</a></div></li>
            <li><div className="sidebar_list_items"><a style={{color: 'black'}}  href="/contact">📞 Contact</a></div></li>
          </ul>
        </nav>
      </aside>
      <div className="main-content">{children}</div>
    </div>
  );
};

export default SidebarLayout;

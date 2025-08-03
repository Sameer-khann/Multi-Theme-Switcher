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
            <li><a style={{color: 'black'}} href="/"><div className="sidebar_list_items">🏠 Home</div></a></li>
            <li><a style={{color: 'black'}}  href="/about"><div className="sidebar_list_items">📖 About</div></a></li>
            <li><a style={{color: 'black'}}  href="/contact"><div className="sidebar_list_items">📞 Contact</div></a></li>
          </ul>
        </nav>
      </aside>
      <div className="main-content">{children}</div>
    </div>
  );
};

export default SidebarLayout;

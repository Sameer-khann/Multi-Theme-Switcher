import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { loadTheme } from './redux/themeSlice';

import Header from './Components/Header/Header';
import RouterComponent from './router';

import MinimalistLayout from './layouts/MinimalistLayout';
import SidebarLayout from './layouts/SidebarLayout';
import CardGridLayout from './layouts/CardGridLayout';

import './styles/global.css';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.currentTheme);

  useEffect(() => {
    dispatch(loadTheme());
  }, [dispatch]);

  useEffect(() => {
    document.body.className = theme; // Apply class for body-level theme
  }, [theme]);

  const renderLayout = () => {
    switch (theme) {
      case 'theme2':
        return (
          <SidebarLayout>
            <RouterComponent />
          </SidebarLayout>
        );
      case 'theme3':
        return (
          <CardGridLayout>
            <RouterComponent />
          </CardGridLayout>
        );
      default:
        return (
          <MinimalistLayout>
            <RouterComponent />
          </MinimalistLayout>
        );
    }
  };

  return (
    <Router>
      <Header />
      {renderLayout()}
    </Router>
  );
};

export default App;






// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { loadTheme } from './redux/themeSlice';

import Header from './Components/Header/Header';
import RouterComponent from './router';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import MinimalistLayout from './layouts/MinimalistLayout';
import SidebarLayout from './layouts/SidebarLayout';
import CardGridLayout from './layouts/CardGridLayout';

import './styles/global.css';
import './index.css';

gsap.registerPlugin(ScrollTrigger);


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

  useEffect(() => {
  const handleMouseMove = (event: MouseEvent) => {
    gsap.to(".cursor", {
      x: event.x ,
      y: event.y,
      duration: 1,
      ease: "power2.out"
    });

    gsap.to(".cursor2", {
      x: event.x ,
      y: event.y ,
      duration: 1.5,
      ease: "power2.out"
    });

    gsap.to(".cursor3", {
      x: event.x ,
      y: event.y ,
      duration: 2,
      ease: "power2.out"
    });
  };

  document.addEventListener("mousemove", handleMouseMove);

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
  };
}, []);


  // useEffect(() => {

  //     // var cursor = document.querySelector(".cursor");
    
  //     document.addEventListener("mousemove", function(event) {
  //       gsap.to(".cursor", {
  //         x: event.x - 70,
  //         y: event.y - 40,
  //         duration: 1, // Slow trailing effect
  //         ease: "power2.out" // Smooth movement
  //       });
  //     });
    
  //     document.addEventListener("mousemove", function(event) {
  //       gsap.to(".cursor2", {
  //         x: event.x - 70,
  //         y: event.y - 40,
  //         duration: 1.5, // Slow trailing effect
  //         ease: "power2.out" // Smooth movement
  //       });
  //     });
    
  //     document.addEventListener("mousemove", function(event) {
  //       gsap.to(".cursor3", {
  //         x: event.x - 70,
  //         y: event.y - 40,
  //         duration: 2, // Slow trailing effect
  //         ease: "power2.out" // Smooth movement
  //       });
  //     });

  //   // gsap.to(".circle", {
  //   //   opacity: 0.5,
  //   //   scale: 1.2,
  //   //   duration: 2,
  //   //   // delay: 1,
  //   // });

  //   // gsap.from(".bottle-cap", {
  //   //   y: 150,
  //   //   opacity: 1,
  //   //   duration: 2,
  //   //   // delay: 1,
  //   //   ease: "none"
  //   // });

  //   // gsap.to(textRef.current, { opacity: 1, scale: 1, duration: 2, delay: 0.5, });

  //   // gsap.from(".heroTextButton", { duration: 2, y: 100, opacity: 0, delay: 0.5 });
  //   // gsap.from(".sideBottle2", { opacity: 0, scale: 0, duration: 2});
  //   // gsap.from(".sideBottle3", { opacity: 0, scale: 0, duration: 2});

  // }, []);

  return (
    <Router>
      <div className= "cursor"></div>
          <div className= "cursor2"></div>
          <div className= "cursor3"></div>
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

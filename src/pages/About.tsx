import React from 'react';
import { useAppSelector } from '../redux/hooks';
import './About.css';

const About: React.FC = () => {
  const theme = useAppSelector((state) => state.theme.currentTheme);

  return (
    <main className={`about-page ${theme}`}>
      <section className="intro">
        <h2 className="page-title">About Us</h2>
        <p>
          Hipster Inc. was founded in 2016 and is a growing Singapore-based company that supports startups, small businesses,
          and corporations looking for digital advancement through user-centric websites, mobile apps, and software solutions.
        </p>
        <p className="highlight">
          We don't sell technology, we offer solutions backed by technology.
        </p>
      </section>

      <section className="section">
        <h3 className="section-title">Our Core Services</h3>
        <ul className="list">
          <li>Web App Development</li>
          <li>Mobile App Development</li>
          <li>UI / UX Design</li>
          <li>Software Development</li>
        </ul>
      </section>

      <section className="section">
        <h3 className="section-title">Other Nerdy Things We Do</h3>
        <ul className="list two-column">
          <li>Augmented and Virtual Reality</li>
          <li>Blockchain Technology</li>
          <li>Data Security</li>
          <li>Enterprise Software Development</li>
          <li>IT Consulting</li>
          <li>Machine Learning & AI</li>
          <li>Quality Assurance & Testing</li>
          <li>SEO Optimization</li>
        </ul>
      </section>

      <section className="section">
        <h3 className="section-title">Off-the-Shelf Products</h3>
        <ul className="list">
          <li>Survey App</li>
          <li>Hybrid Event Management Platform</li>
          <li>Learning Management Platform</li>
          <li>Virtual Streaming Platform</li>
          <li>Feedback App</li>
          <li>Virtual Call Assistant</li>
        </ul>
      </section>

      <section className="section">
        <p>
          Unlike service providers that only focus on technology, Hipster Inc. provides solutions to propel your business into
          productivity and success.
        </p>
        <p className="cta">Don’t take our word for it — let us show you what we can do. <a href="https://hipster-inc.com" target="_blank" rel="noopener noreferrer">Talk to us now.</a></p>
      </section>

      <section className="section contact">
        <h3 className="section-title">Company Info</h3>
        <p><strong>Website:</strong> <a href="https://hipster-inc.com" target="_blank" rel="noopener noreferrer">https://hipster-inc.com</a></p>
        <p><strong>Industry:</strong> IT Services and IT Consulting</p>
        <p><strong>Company Size:</strong> 11–50 employees</p>
        <p><strong>Founded:</strong> 2016</p>
        <p><strong>Address:</strong> 75 Ayer Rajah Crescent, #01-04, Singapore 139953</p>
      </section>

      <section className="section">
        <h3 className="section-title">Career Growth & Learning</h3>
        <p>
          We support learning funds and encourage our team to pursue courses and certifications in this ever-evolving tech world.
        </p>
        <p><strong>Programs:</strong> Online Learning (Coursera, Udemy, etc.), Books, Offline Courses</p>
      </section>
    </main>
  );
};

export default About;



// import React from 'react';
// import { useAppSelector } from '../redux/hooks';
// import './About.css';

// const About: React.FC = () => {
//   const theme = useAppSelector((state) => state.theme.currentTheme);

//   return (
//     <main className={`about-page ${theme}`}>
//       <h2 className="page-title">About This App</h2>
//       <p className="about-text">
//         This multi-theme switcher app is built with React and TypeScript. It demonstrates advanced concepts like Redux state
//         management, dynamic theme switching, routing, API integration, and responsive design.
//       </p>
//       <p className="about-text">
//         Each theme completely transforms the layout, fonts, and styles, offering a fresh and unique experience.
//       </p>
//     </main>
//   );
// };

// export default About;

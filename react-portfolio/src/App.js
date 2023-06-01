
import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Nav';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css'

const App = () => {
  const [currentSection, setCurrentSection] = useState('About Me');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="app d-flex flex-column min-vh-100" >
      <Header />
      <Navigation
        currentSection={currentSection}
        handleSectionChange={handleSectionChange}
      />
      <div className="flex-grow-1 d-flex justify-content-center align-items-center" >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2" >
              {currentSection === 'About Me' && <AboutMe />}
              {currentSection === 'Portfolio' && <Portfolio />}
              {currentSection === 'Contact' && <Contact />}
              {currentSection === 'Resume' && <Resume />}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App; 
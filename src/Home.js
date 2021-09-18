// React main
import React from 'react';

// Styles
import './styles/main.css';

// Components
import Header from './components/Header/Header';
import Birds from './components/Body/Birds/Birds';
import Tokenomics from './components/Body/Tokenomics/Tokenomics';
import Roadmap from './components/Body/Roadmap/Roadmap';
import Team from './components/Body/Team/Team';
import Footer from './components/Footer/Footer';

const SiteContent = () => {
  return (
    <div>
      <Header />
      <Birds />
      <Tokenomics />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
};

export default SiteContent;

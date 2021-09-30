// React main
import React from 'react';
import Crontab from 'reactjs-crontab';
import 'reactjs-crontab/dist/index.css';

// Styles
import './styles/main.css';

// Components
import Header from './components/Header/Header';
import Birds from './components/Body/Birds/Birds';
import Tokenomics from './components/Body/Tokenomics/Tokenomics';
import Roadmap from './components/Body/Roadmap/Roadmap';
import Team from './components/Body/Team/Team';
import Footer from './components/Footer/Footer';

const Home = () => {
  // const app = express();
  const cron = () => {
    console.log(
      'Hello ' +
        new Date().getHours() +
        ':' +
        new Date().getMinutes() +
        ':' +
        new Date().getSeconds()
    );
  };

  const tasks = [
    {
      fn: cron,
      id: '1',
      config: '59 23 * * *',
      name: '',
      description: '',
    },
  ];

  return (
    <div id="home">
      <Crontab
        tasks={tasks}
        timeZone="UTC"
        dashboard={{
          hidden: true,
        }}
      />
      <Header />
      <Birds />
      <Tokenomics />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;

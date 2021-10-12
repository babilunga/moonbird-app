import '../../../styles/header.css';

import moonbird from '../../../images/header/moonbird.png';

// import { Link } from 'react-router-dom';

function Main() {
  return (
    <main className="main">
      <img id="main-logo" src={moonbird} alt="logo" className="main__logo" />
      <p id="main-text" className="text main__text">
        Make profit from being the best!
        <br />
        The better you play, the more money you get.
      </p>
      <a
        id="main-button"
        href="/"
        rel="noreferrer"
        className=" text main__button"
      >
        <span>Start gaming</span>
      </a>
      <p id="contract-text" className="text main__text text-contract">
        Contract adress
      </p>
      <a
        id="contract-adress"
        href="https://bscscan.com/address/0xA881958c5dbFbea3c8Ec145D7cC9338b22B195ab"
        target="_blank"
        rel="noreferrer"
        className=" text main__button contract"
      >
        0xA881958c5dbFbea3c8Ec145D7cC9338b22B195ab
      </a>
      {/* <span class="tooltiptext" id="myTooltip">
          Copy to clipboard
        </span>
         Add tooltip to class to use it */}
      <div className="trailer" id="trailer">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/d4aXmXU2934?controls=0?autoplay=0&rel=0"
          title="Moon Bird Official Teaser"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}

export default Main;

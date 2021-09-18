import '../../../styles/roadmap.css';

import phase1 from '../../../images/roadmap/phase1.svg';
import phase2 from '../../../images/roadmap/phase2.svg';
import phase3 from '../../../images/roadmap/phase3.svg';
import phase4 from '../../../images/roadmap/phase4.svg';
import timeline from '../../../images/roadmap/timeline.svg';

function Roadmap() {
  return (
    <div id="roadmap" className="container roadmap__container">
      <h2 className="title roadmap__title">Roadmap</h2>
      <img src={timeline} alt="timeline" className="roadmap__timeline" />
      <div className="roadmap__phases">
        <div className="phase phase-1">
          <img
            src={phase1}
            alt="phase1"
            className="phase__image phase1__image"
          />
          <div>
            <h3 className="title phase__title">Phase 1</h3>
            <p className="text phase__text">
              <span>Conceptualization of a Project</span>
              <span>Game Mechanics</span>
              <span>Game Design</span>
              <span>Website launch</span>
              <span>Whitepaper release</span>
            </p>
          </div>
        </div>
        <div className="phase phase-2">
          <img
            src={phase2}
            alt="phase2"
            className="phase__image phase2__image"
          />
          <div>
            <h3 className="title phase__title-left">Phase 2</h3>
            <p className="text phase__text-left">
              <span>Trailer</span>
              <span>First Marketing</span>
              <span>Compaign Token contract</span>
              <span>Game demo</span>
              <span>Private Sale</span>
            </p>
          </div>
        </div>
        <div className="phase phase-3">
          <img
            src={phase3}
            alt="phase3"
            className="phase__image phase3__image"
          />
          <div>
            <h3 className="title phase__title">Phase 3</h3>
            <p className="text phase__text">
              <span>NFT Skins Creation</span>
              <span>Tournament system announcement</span>
              <span>Second Marketing Compaign</span>
              <span>Presale</span>
              <span>Pancakeswap Listing</span>
            </p>
          </div>
        </div>
        <div className="phase phase-4">
          <img
            src={phase4}
            alt="phase4"
            className="phase__image phase4__image"
          />
          <div>
            <h3 className="title phase__title-left">Phase 4</h3>
            <p className="text phase__text-left">
              <span>Game Launch</span>
              <span>Start of distribution of rewards</span>
              <span>NFT Skins Release</span>
              <span>Tournaments Launch</span>
              <span>Special Events</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;

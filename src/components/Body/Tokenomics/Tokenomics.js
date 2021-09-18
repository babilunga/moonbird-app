import '../../../styles/tokenomics.css';
import graph from '../../../images/tokenomics/graph.svg';

function Tokenomics() {
  return (
    <div id="tokenomics" className="container tokenomics__container">
      <h2 className="title tokenomics__title">Tokenomics</h2>
      <p className="text tokenomics__text">max supply: 100,000,000</p>
      <img src={graph} alt="tokenomics" className="tokenomics__image" />
    </div>
  );
}

export default Tokenomics;

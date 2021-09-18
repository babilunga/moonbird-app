import '../../../styles/birds.css';

import BirdCard from './BirdCard';

import btnLeft from '../../../images/birds/btn-left.svg';
import btnRight from '../../../images/birds/btn-right.svg';

import bullfinch from '../../../images/birds/bullfinch.svg';
import swallow from '../../../images/birds/swallow.svg';
import parrot from '../../../images/birds/parrot.svg';

import React from 'react';

const birds = [
  { title: 'bullfinch', image: bullfinch },
  { title: 'swallow', image: swallow },
  { title: 'parrot', image: parrot },
];

class Birds extends React.Component {
  state = {
    dotCount: 0,
  };

  increaseNum = () => {
    if (this.state.dotCount < birds.length - 1) {
      this.setState((prevState) => ({ dotCount: prevState.dotCount + 1 }));
    } else {
      this.setState({ dotCount: 0 });
    }
  };

  decreaseNum = () => {
    if (this.state.dotCount > 0) {
      this.setState((prevState) => ({ dotCount: prevState.dotCount - 1 }));
    } else {
      this.setState({ dotCount: birds.length - 1 });
    }
  };

  dotClick = (i) => {
    this.setState(() => {
      return { dotCount: i };
    });
  };

  // Render "HTML"
  render() {
    return (
      <div id="birds" className="container birds__container apiarance">
        <h2 className="title birds__title">Birds</h2>
        <p className="text birds__text">Beautiful skins to play with</p>
        <div className="birds__galery">
          <button
            type="button"
            className="birds__galery-btn btn-left"
            onClick={this.decreaseNum}
          >
            <img src={btnLeft} className="btn-arrow" alt="" />
          </button>
          {/* Start Cards */}
          <div className="birds__galery-cards">
            {birds.map((bird, index) => (
              <BirdCard key={index} image={bird.image} title={bird.title} />
            ))}
          </div>
          {/* End Cards */}
          <button
            type="button"
            className="birds__galery-btn btn-right"
            onClick={this.increaseNum}
          >
            <img src={btnRight} className="btn-arrow" alt="" />
          </button>
        </div>
        <div className="birds__galery-dots">
          {birds.map((b, index) => (
            <span
              key={index}
              className={`galery__dot ${
                index === this.state.dotCount ? 'dot-active' : ''
              }`}
              onClick={this.dotClick.bind(null, index)}
            ></span>
          ))}
        </div>
      </div>
    );
  }
}

export default Birds;

import '../../../styles/burgerMenu.css';

import React from 'react';

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerToggle: false,
    };
  }

  handleChange = () => {
    this.setState((prevState) => ({
      burgerToggle: !prevState.burgerToggle,
    }));
  };

  render() {
    return (
      <div className="nav__navbar-burger">
        <button
          name="burgerToggle"
          onClick={this.handleChange}
          className={`burger__btn ${this.state.burgerToggle ? 'disabled' : ''}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          className={`burger__box ${this.state.burgerToggle ? 'active' : ''}`}
        >
          <li>
            <a
              href="#birds"
              className="text burger__item"
              name="burgerToggle"
              value={false}
              onClick={this.handleChange}
            >
              Birds
            </a>
          </li>
          <li>
            <a
              href="#tokenomics"
              className="text burger__item"
              name="burgerToggle"
              value={false}
              onClick={this.handleChange}
            >
              Tokenomics
            </a>
          </li>
          <li>
            <a
              href="#roadmap"
              className="text burger__item"
              name="burgerToggle"
              value={false}
              onClick={this.handleChange}
            >
              Roadmap
            </a>
          </li>
          <li>
            <a
              href="#team"
              className="text burger__item"
              name="burgerToggle"
              value={false}
              onClick={this.handleChange}
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/197qJuHtM2VPNi9KMi5y7IKoVglCPeZyk/view"
              target="_blank"
              rel="noreferrer"
              className="text burger__item"
              name="burgerToggle"
              value={false}
              onClick={this.handleChange}
            >
              Whitepaper
            </a>
          </li>
          <div className="close"></div>
        </ul>
        <div
          className={`exit-btn ${!this.state.burgerToggle ? 'disabled' : ''}`}
          name="burgerToggle"
          onClick={this.handleChange}
        ></div>
      </div>
    );
  }
}

export default BurgerMenu;

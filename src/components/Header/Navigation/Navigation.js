import '../../../styles/header.css';

import logo from '../../../images/header/logo.svg';
import DesktopMenu from './DesktopMenu';
import BurgerMenu from './BurgerMenu';

function Navigation() {
  return (
    <nav className="header__nav">
      <a className="nav__logo" href="/" alt="logo">
        <img src={logo} alt="logo" />
      </a>

      <DesktopMenu />
      <BurgerMenu />
    </nav>
  );
}

export default Navigation;

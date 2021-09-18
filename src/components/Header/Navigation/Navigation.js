import '../../../styles/header.css';

import logo from '../../../images/header/logo.svg';
import DesktopMenu from './DesktopMenu';
import BurgerMenu from './BurgerMenu';

function Navigation() {
  return (
    <nav className="header__nav">
      <img src={logo} alt="logo" className="nav__logo" />
      <DesktopMenu />
      <BurgerMenu />
    </nav>
  );
}

export default Navigation;

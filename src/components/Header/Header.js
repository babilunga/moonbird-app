import '../../styles/header.css';

import logo from '../../images/header/logo.svg';

import DesktopMenu from './Navigation/DesktopMenu';
import BurgerMenu from './Navigation/BurgerMenu';
import Main from './Main/Main';

function Header() {
  return (
    <header className="container header apiarance">
      <nav className="header__nav">
        <img src={logo} alt="logo" className="nav__logo" />
        <DesktopMenu />
        <BurgerMenu />
      </nav>
      <Main />
    </header>
  );
}

export default Header;

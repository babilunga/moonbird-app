import '../../styles/header.css';

import Main from './Main/Main';
import Navigation from './Navigation/Navigation';

function Header() {
  return (
    <header className="container header apiarance">
      <Navigation />
      <Main />
    </header>
  );
}

export default Header;

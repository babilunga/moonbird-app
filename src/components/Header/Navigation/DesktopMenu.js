import '../../../styles/header.css';

function DesktopMenu() {
  return (
    <ul className="nav__navbar">
      <li>
        <a href="#birds" className="text">
          Birds
        </a>
      </li>
      <li>
        <a href="#tokenomics" className="text">
          Tokenomics
        </a>
      </li>
      <li>
        <a href="#roadmap" className="text">
          Roadmap
        </a>
      </li>
      <li>
        <a href="#team" className="text">
          Team
        </a>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/197qJuHtM2VPNi9KMi5y7IKoVglCPeZyk/view"
          target="_blank"
          rel="noreferrer"
          className="text"
        >
          {/* 
        1uvrvjVzIL2X8g3O_vNXLr4zUHGLKwenc
        
         */}
          Whitepaper
        </a>
      </li>
    </ul>
  );
}

export default DesktopMenu;

import '../../styles/footer.css';
import youtube from '../../images/footer/yt.svg';
import telegram from '../../images/footer/tg.svg';
import instagram from '../../images/footer/in.svg';

function Footer() {
  return (
    <footer id="footer" className="footer__container">
      <h2 className="title footer__title">Join us in social media</h2>
      <div className="footer__media">
        <a
          href="https://www.youtube.com/channel/UCztflTF2yHEy7b6bYBZPJZg"
          target="_blank"
          rel="noreferrer"
          className="footer-media__link"
          id="youtube"
        >
          <img src={youtube} alt="youtube" className="media__image" />
        </a>
        <a
          href="https://t.me/MoonBird_official"
          target="_blank"
          rel="noreferrer"
          className="footer-media__link"
          id="telegram"
        >
          <img src={telegram} alt="telegram" className="media__image" />
        </a>
        <a
          href="https://instagram.com/moonbird_official"
          target="_blank"
          rel="noreferrer"
          className="footer-media__link"
          id="instagram"
        >
          <img src={instagram} alt="instagram" className="media__image" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

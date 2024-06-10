import '../../components/footer/Footer.scss';
import logoIcon from '/img/icons/logo.svg';
import arrowUp from '/img/icons/arrow-up.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo footer__logo">
        <img className="logo__img" src={logoIcon} alt="logo" />
      </div>

      <div className="actions footer__actions">
        <a className="actions__item" href="#">
          github
        </a>

        <a className="actions__item" href="#">
          contacts
        </a>

        <a className="actions__item" href="#">
          rights
        </a>
      </div>

      <div className="top-button footer__top-button">
        <p className="top-button__text">Back to top</p>

        <div className="top-button__button">
          <img className="top-button__icon" src={arrowUp} alt="Back to top" />
        </div>
      </div>
    </footer>
  );
};

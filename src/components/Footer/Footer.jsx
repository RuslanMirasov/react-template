import css from './Footer.module.scss';
import Logo from 'components/Logo/Logo';

const Footer = ({ children }) => {
  return (
    <footer className={css.Footer}>
      <div className={css.Container}>
        <Logo />
        {children}
      </div>
    </footer>
  );
};

export default Footer;

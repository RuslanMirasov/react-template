import css from './Header.module.scss';
import Logo from 'components/Logo/Logo';
import { Burger, Button } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import Navigation from 'components/Navigation/Navigation';

const Header = ({ children }) => {
  const { popupOpen } = usePopup();
  return (
    <header className={css.Header}>
      <div className={css.Container}>
        <Logo />
        <Navigation />
        <div className={css.HeaderUserInfo}>
          <Button size="small" variant="border-dark" onClick={() => popupOpen('login')}>
            Anmeldung
          </Button>
          <Burger />
        </div>

        {children}
      </div>
    </header>
  );
};

export default Header;

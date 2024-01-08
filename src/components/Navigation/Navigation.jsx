import Menu from 'components/Menu/Menu';
import css from './Navigation.module.scss';
import { usePopup } from 'contexts/PopupContext';

const Navigation = () => {
  const { isOpenMenu, menuToggle, isMobile } = usePopup();
  return (
    <nav className={`${css.Overlay} ${(isMobile && isOpenMenu) || !isMobile ? css.isOpen : ''}`} onClick={menuToggle}>
      <div className={`${css.Navigation} ${(isMobile && isOpenMenu) || !isMobile ? css.isOpen : ''}`} onClick={e => e.stopPropagation()}>
        <Menu />
      </div>
    </nav>
  );
};

export default Navigation;

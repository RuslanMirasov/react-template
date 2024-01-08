import { useState } from 'react';
import { usePopup } from 'contexts/PopupContext';
import css from './Burger.module.scss';

const Burger = ({ children }) => {
  const [isOpen, setIsOpen] = useState();
  const { isOpenMenu, menuToggle, isMobile } = usePopup();

  const handleClick = () => {
    setIsOpen(!isOpen);
    menuToggle();
  };

  return (
    <>
      {isMobile && (
        <button type="button" className={`${css.Burger} ${isOpenMenu ? css.isOpen : ''}`} onClick={handleClick}>
          <span>
            <b hidden>Open menu</b>
          </span>
        </button>
      )}
    </>
  );
};

export default Burger;

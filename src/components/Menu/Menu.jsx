import { usePopup } from 'contexts/PopupContext';
import { useEffect } from 'react';
import { addArrowsToMultipleLinks, arrowBtnAction } from 'utils/menuFunctions';
import MenuLink from './MenuLink';
import css from './Menu.module.scss';

const Menu = () => {
  const { popupOpen } = usePopup();

  useEffect(() => {
    addArrowsToMultipleLinks(css.Menu, css.More, handleArrowClick);
  }, []);

  const handleArrowClick = e => {
    arrowBtnAction(e.target, css.Open);
  };

  return (
    <ul className={`${css.Menu} custom-scrollbar`}>
      <MenuLink to="./" text="Startseite" />
      <MenuLink to="./books" text="Bücher">
        <ul>
          <MenuLink to="./books/book" text="Schritte plus neu A1.1">
            <ul>
              <MenuLink to="./books/book" text="Thema 1" />
              <MenuLink to="./books/book" text="Thema 2">
                <ul>
                  <MenuLink to="./books/book" text="Thema 1" />
                  <MenuLink to="./books/book" text="Thema 2" />
                  <MenuLink to="./books/book" text="Thema 3" />
                  <MenuLink to="./books/book" text="Thema 4" />
                </ul>
              </MenuLink>
              <MenuLink to="./books/book" text="Thema 3" />
              <MenuLink to="./books/book" text="Thema 4" />
            </ul>
          </MenuLink>
          <MenuLink to="./books/book" text="Schritte plus neu A1.2" />
          <MenuLink to="./books/book" text="Schritte plus neu A2.1" />
          <MenuLink to="./books/book" text="Schritte plus neu A2.2" />
          <MenuLink to="./books/book" text="Schritte plus neu B1.1" />
          <MenuLink to="./books/book" text="Schritte plus neu B1.2">
            <ul>
              <MenuLink to="./books/book" text="Thema 1" />
              <MenuLink to="./books/book" text="Thema 2">
                <ul>
                  <MenuLink to="./books/book" text="Thema 1" />
                  <MenuLink to="./books/book" text="Thema 2" />
                  <MenuLink to="./books/book" text="Etwas planen" />
                  <MenuLink to="./books/book" text="Thema 4" />
                </ul>
              </MenuLink>
              <MenuLink to="./books/book" text="Thema 3" />
              <MenuLink to="./books/book" text="Thema 4" />
            </ul>
          </MenuLink>
          <MenuLink to="./books/book" text="Schritte für schritte zum DTZ" />
          <MenuLink to="./books/book" text="Einfach besser 500 B2 Beruf" />
        </ul>
      </MenuLink>
      <MenuLink to="./books" text="Regeln" />
      <MenuLink onClick={() => popupOpen('callback')} text="Kontakt" />
    </ul>
  );
};

export default Menu;

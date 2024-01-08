import { Link } from 'react-router-dom';
import { usePopup } from 'contexts/PopupContext';

const MenuLink = ({ to, text, onClick, children }) => {
  const { menuClose } = usePopup();

  const handleClick = () => {
    if (!onClick) {
      menuClose();
      return;
    }
    onClick();
  };

  return (
    <li>
      <Link to={to} onClick={handleClick}>
        {text}
      </Link>
      {children}
    </li>
  );
};

export default MenuLink;

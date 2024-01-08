import { Link } from 'react-router-dom';
import css from './Button.module.scss';

const Button = ({ to, onClick, variant, size, full, blank, disabled, children }) => {
  const allButtonClasses = {
    [css.Button]: true,
    [css.Big]: size === 'big',
    [css.Small]: size === 'small',
    [css.BorderLight]: variant === 'border-light',
    [css.BorderDark]: variant === 'border-dark',
    [css.Black]: variant === 'black',
    [css.White]: variant === 'white',
    [css.Full]: full,
  };

  const currentClasses = Object.keys(allButtonClasses)
    .filter(key => allButtonClasses[key])
    .join(' ');

  const buttonElement = to ? (
    <Link to={to} className={currentClasses} target={blank ? '_blank' : undefined}>
      <span>{children}</span>
    </Link>
  ) : onClick ? (
    <button type="button" onClick={onClick} className={currentClasses} disabled={disabled}>
      <span>{children}</span>
    </button>
  ) : (
    <button type="submit" className={currentClasses} disabled={disabled}>
      <span>{children}</span>
    </button>
  );

  return buttonElement;
};

export default Button;

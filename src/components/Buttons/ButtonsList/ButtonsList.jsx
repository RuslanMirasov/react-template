import css from './ButtonsList.module.scss';

const ButtonsList = ({ align, children }) => {
  return (
    <div style={align && { justifyContent: align }} className={css.ButtonsList}>
      {children}
    </div>
  );
};

export default ButtonsList;

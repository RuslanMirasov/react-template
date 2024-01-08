import css from './InputText.module.scss';

const InputText = ({ type, name, value, label, required, placeholder, onChange }) => {
  return (
    <label className={css.Label}>
      {label && <span className={css.LabelText}>{label}</span>}
      <span className={css.LabelInput}>
        <input type={type} className={css.Input} name={name} value={value} required={required} placeholder={placeholder} onChange={onChange} />
      </span>
    </label>
  );
};

export default InputText;

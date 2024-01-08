import { useState } from 'react';
import { validateInput } from 'utils/formFunctions';
import { InputCheckbox, InputHidden, InputRadio, InputSelect, InputText, InputTextarea } from '../InputTypes';

const Input = ({ type, name, required, label, placeholder, value = '', options, checked = false }) => {
  const [inputValue, setInputValue] = useState(value);
  const [inputChecked, setInputChecked] = useState(checked);

  const handleChange = e => {
    setInputChecked(e.target.checked);
    setInputValue(e.target.value);
    validateInput(e.target);
  };

  return (
    <>
      {type === 'hidden' ? (
        <InputHidden type={type} name={name} value={inputValue} />
      ) : type === 'textarea' ? (
        <InputTextarea name={name} value={inputValue} label={label} placeholder={placeholder} required={required} onChange={handleChange} />
      ) : type === 'radio' ? (
        <InputRadio type={type} name={name} label={label} value={inputValue} required={required} onChange={handleChange} />
      ) : type === 'checkbox' ? (
        <InputCheckbox type={type} name={name} label={label} value={inputValue} checked={inputChecked} required={required} onChange={handleChange} />
      ) : type === 'select' ? (
        <InputSelect name={name} label={label} placeholder={placeholder} required={required} options={options} onChange={handleChange} />
      ) : (
        <InputText type={type} name={name} label={label} value={inputValue} required={required} placeholder={placeholder} onChange={handleChange} />
      )}
    </>
  );
};

export default Input;

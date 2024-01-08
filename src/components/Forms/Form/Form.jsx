import React from 'react';
import { validateForm } from 'utils/formFunctions';
import css from './Form.module.scss';

const Form = ({ method = 'post', onSubmit, children }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const errorsCount = validateForm(e.target);
    if (errorsCount > 0) {
      return;
    }
    onSubmit(formData);
  };

  return (
    <form action="#" method={method} className={css.Form} noValidate onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;

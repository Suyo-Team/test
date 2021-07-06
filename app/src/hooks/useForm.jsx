import { useState } from 'react';
import PropTypes from 'prop-types';

const useForm = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (newForm) => setForm(newForm);

  const handleInputChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleInputReset = () => setForm(initialForm);

  return { form, handleInputChange, handleChange, handleInputReset };
};

useForm.propTypes = {
  initialForm: PropTypes.object,
};

export default useForm;

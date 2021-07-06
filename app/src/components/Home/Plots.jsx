import PropTypes from 'prop-types';

import useForm from '../../hooks/useForm';

import '../../styles/Plots.css';

const initialState = {
  owner: '',
  address: '',
};

const Plots = ({ addPlot }) => {
  const { form, handleInputChange } = useForm(initialState);
  const { owner, address } = form;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!owner || !address) {
      console.log('Es necesario completar todos los campos');
    }

    addPlot({ owner, address });
  };

  return (
    <div className="plots__container">
      <h1>Registro de predio</h1>
      <p>Ingrese los datos para registrar su propiedad.</p>
      <form className="plots__container-form" onSubmit={handleSubmit}>
        <label htmlFor="owner">
          Ingresar un dueño:
          <input onChange={handleInputChange} id="owner" name="owner" type="text" value={owner} />
        </label>
        <label htmlFor="address">
          Dirección:
          <input onChange={handleInputChange} id="address" name="address" type="text" value={address} />
        </label>
        <button type="submit">Registrar Predio</button>
      </form>
    </div>
  );
};

Plots.propTypes = {
  addPlot: PropTypes.func.isRequired,
};

export default Plots;

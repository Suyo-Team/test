import Map from "./Map";
import { useState } from "react";
function Predio(props) {
  const [cord, setCord] = useState({ lat: 4.570868, lng: -74.297333 });
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const _onCLick = ({ x, y, lat, lng, event }) => {
    const miDireccion = new google.maps.LatLng(lat, lng);
    setCord({ lat, lng });
    console.log(miDireccion);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleSave = async () => {
    const options = {
      method: "POST",
      mode: "cors",

      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Token ${localStorage.getItem("sesion")}`,
      },
      body: JSON.stringify({
        address,
        owner: name,
        latitude: cord.lat.toFixed(6),
        longitude: cord.lng.toFixed(6),
      }),
    };
    const response = await fetch(
      "https://suyoapi.herokuapp.com/propertys/",
      options
    );
    if (response.status === 201) {
      const text = await response.text();

      const predio = JSON.parse(text);

      console.log(predio);
      props.setPredio([...props.predios, predio]);
      setName("");
      setAddress("");
    }
  };
  return (
    <>
      <div className='ui divider'></div>
      <div className='ui container'>
        <div className='ui form'>
          <div className='inline fields'>
            <div className='six wide field'>
              <label>Propietario</label>
              <input
                type='text'
                placeholder='Propietario'
                value={name}
                onChange={handleChangeName}></input>
            </div>
            <div className='six wide field'>
              <label>Dirección</label>
              <input
                type='text'
                placeholder='Dirección'
                value={address}
                onChange={handleChangeAddress}></input>
            </div>
            <div className='two wide field'>
              <button className='ui primary button' onClick={handleSave}>
                Guardar
              </button>
            </div>
          </div>
        </div>
        <div className='ten wide column'>
          <Map
            predios={props.predios}
            hanleClick={_onCLick}
            lat={cord.lat}
            lng={cord.lng}></Map>
        </div>
      </div>
    </>
  );
}

export default Predio;

import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { useState } from "react";

function Map(props) {
  const { hanleClick, lat, lng } = props;
  //   const [cord, setCord] = useState({});
  //   const _onCLick = ({ x, y, lat, lng, event }) => {
  //     const miDireccion = new google.maps.LatLng(lat, lng);
  //     setCord({ lat, lng });
  //     console.log(miDireccion);
  //   };
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 4.570868,
    lng: -74.297333,
  };
  const zoomLevel = 7;
  return (
    <>
      <div style={{ height: "70vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAey55fYGQoNvZjwQ7TiAQyWqEy66oZ5-M" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          onClick={hanleClick}>
          <Marker lat={lat} lng={lng}></Marker>
          {props.predios.map((e) => {
            return (
              <Marker
                owner={e.owner}
                lat={e.latitude}
                lng={e.longitude}
                key={e.id}></Marker>
            );
          })}
        </GoogleMapReact>
      </div>
    </>
  );
}

export default Map;

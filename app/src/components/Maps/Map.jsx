import { useCallback, useRef, useState } from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import PropTypes from 'prop-types';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 6.2471638,
  lng: -75.5765707,
};

const Map = ({ plots }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDODLwbcfIZ9-W3Lw0ky0hAVjBYdRZAms8',
  });
  const mapRef = useRef();
  const [selected, setSelected] = useState(null);

  const onMapLoad = useCallback((mapInstance) => {
    mapRef.current = mapInstance;
  }, []);
  return (
    <>
      { loadError && <h1>Error</h1> }
      {
        isLoaded
          ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={12}
              onLoad={onMapLoad}
            >
              {
                plots.map((plot) => (
                  <Marker
                    key={plot.id}
                    position={plot.coords}
                    onClick={() => setSelected(plot)}
                  />
                ))
              }

              {
                selected
                  ? (
                    <InfoWindow position={selected.coords}>
                      <div>
                        <h2>{selected.owner}</h2>
                        <p style={{ marginTop: '5px', fontSize: '15px' }}>
                          {selected.address}
                        </p>
                      </div>
                    </InfoWindow>
                  )
                  : null
              }
            </GoogleMap>
          )
          : <h1>Loading...</h1>
      }
    </>
  );
};

Map.propTypes = {
  plots: PropTypes.array.isRequired,
};

export default Map;

import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const AnyReactComponent = ({ text }) => <div>{text}</div>; // Este componente funciona como marcador, se inserta dentro del componente de 
// GoogleMap, y se ubica con coords.

function Map() {

  //estado con las coordenadas inicales
  const [coord, setCoord] = useState({
      lat: -34.8783801,
      lng: -56.2694428,
    })
//estado para ior cambiando el zoom
  const [zoom, setZoom] = useState({
    zoom: 15 
  })

  const montevideoHandler = () => {
    //se agregan una coordenada mas
    setCoord({
      lat: -34.8779073,
      lng: -56.2697556,
    })
    setZoom({ zoom: 15 })
  }

  const maldonadoHandler = () => {
    setCoord({
     lat: -34.9089283,
     lng: -54.9591083,
   })
   setZoom({ zoom: 15 })
  }

 
 
  return (
    <>
      <div className='map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAWw1hsb3bXbdMAnsHr9WvYIpCGPn9q3oM' }}
          defaultCenter={coord}
          defaultZoom={zoom.zoom}
          zoom={zoom.zoom}
          center={coord}
        >
          <AnyReactComponent
            lat='-34.8735903' /* para maldonado toma lat y lng específicas*/
            lng='-56.2458459'
            text={<Marker />}
          />
          <AnyReactComponent
            lat={coord.lat} /*para mont toma lo que haya en coord.last */
            lng={coord.lng}
            text={<Marker />}
          />
          <AnyReactComponent
            lat={coord.lat}  /*para mont toma lo que haya en coord.last */
            lng={coord.lng}
            text={<Marker />}
          />

        </GoogleMapReact>

      </div>
      <button onClick={montevideoHandler}>Montevideo</button>
      <button onClick={maldonadoHandler}>Maldonado</button>
    </>
  );

}

export default Map;

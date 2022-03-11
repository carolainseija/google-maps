import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
/* Otro intento no utilizado, trabaja con módulos distintos */

const mapStyles = {
  width: '100%',
  height: '100%'
};


export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB8V4D9AU514cuafd9aVbr-nhPks5TuaTA'
})(MapContainer);

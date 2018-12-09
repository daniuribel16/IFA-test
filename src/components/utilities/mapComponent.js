import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import map from '../../assets/images/map.jpg';
const apiKeyMaps = ''

export default class Map extends Component {
    
  defaultProps = {
    center: {
      lat: this.props.location.lat,
      lng: this.props.location.lng
    },
    zoom: 11
  };

  render() {
      return apiKeyMaps ? (
          <div style={style.map}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: apiKeyMaps }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            />
          </div>) : 
          (<img style={style.imgMap} src={map} alt="map" />)
  }
}

const style ={
  map: {
    height: '10em',
    width: '110%'
  },
  imgMap: {
    width: '100%',
  }
}
import React from 'react';
import ReactDOM from 'react-dom';

import Map, {GoogleApiWrapper}  from 'google-maps-react';
import Marker from 'google-maps-react/dist/components/Marker';
import InfoWindow from 'google-maps-react/dist/components/InfoWindow';
import axios from 'axios';


const Container = React.createClass({
  getInitialState: function() {
    return {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

    }
  },

 /* componentDidMount: function () {
        var mapOptions = {
            center: this.mapCenterLatLng(43.642,-79.407),
     }
  },*/

  onMarkerClick: function(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  },

  onInfoWindowClose: function() {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  },

  onMapClicked: function(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  },

  render: function() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    var markerClick = this.onMarkerClick;
    return (
      <Map google={this.props.google}
          style={{width: '100%', height: '100%', position: 'relative'}}
          initialCenter={this.props.initialCenter}
          center={this.props.initialCenter}
          className={'map'}
          zoom={10}
          onClick={this.onMapClicked}>
        
      
      
      {(this.props.markers).map(function(value,index){
        return(
          <Marker
                onClick={markerClick}
                name={value.name}
                position={{lat: value.lat, lng: value.lng}} />

        )
      })}


        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
});

export default GoogleApiWrapper({
  apiKey: "AIzaSyCrrMu2jrAV0faDFlMbsHDCBb26p9CppuM",
  libraries: ['places','visualization']
})(Container);

// export default Container;

/*class NpsForecastMap extends React.Component {
  state = { 
    forecast:{} 
  };

  propTypes = {
    np_url: React.PropTypes.string,
    init_lat: React.PropTypes.number,
    init_lng: React.PropTypes.number
  };

  markers = [];


  render() {
    return <div className="NpsForecastMap" ref="mapdiv">
    </div>
  }

  componentDidMount() {
    this.map = this.createMap()
    //this.loadFeatures()
  }

  createMap() {
    let mapOptions = {
      zoom: 3,
      center: this.mapCenter()
    }
    return new google.maps.Map(this.refs.mapdiv, mapOptions);
  }

  mapCenter() {
    return new google.maps.LatLng(
      this.props.init_lat,
      this.props.init_lng
    )
  }


  
 
};

//let init_lng = 75 ;
//let init_lat = 28  ;
//let nps_url = "https://raw.githubusercontent.com/gizm00/blog_code/master/appendto/react_nps/np.geojson" ;

export default GoogleApiWrapper({
  apiKey: "AIzaSyCrrMu2jrAV0faDFlMbsHDCBb26p9CppuM",
  libraries: ['places','visualization']
})(NpsForecastMap); */

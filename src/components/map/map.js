import React, {Component} from 'react'
import {withScriptjs, GoogleMap, Marker, withGoogleMap} from "react-google-maps";
import {compose, withProps} from 'recompose';
const API_KEY = 'MAP_API_KEY';

class Map extends Component {

    render() {
        const position = {
            lat: this.props.lat,
            lng: this.props.lng
        };
        return (
            <GoogleMap defaultZoom={12} defaultCenter={position}>
                {this.props.isMarkerShown && <Marker position={position}/>}
            </GoogleMap>
        )
    }
}

export default compose(withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + API_KEY,
    loadingElement: <div style={{
        height: `100%`
    }}/>,
    containerElement: <div/>,
    mapElement: <div style={{
            height: `100%`
        }}/>
}), withScriptjs, withGoogleMap)(Map)
import React from 'react';


import { Map, GoogleApiWrapper } from 'google-maps-react';


class MapContainer extends React.Component{

    render() {

        const mapStyles = {
            width: '50%',
            height: '30%',
        };


        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
    }
    
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCZQdWsNyakL3OEbvVherjO4c9HcqFc8'
})(MapContainer);
import {Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';


class MapContainer extends Component {
  render() {
    return (
<Map
google = {this.props.google}
style={{height: '100%', width: '100%'}}
zoom = {10}
initialcenter = {
{
  lat: 33.961055,
  lng: 10.015970
}

}
/>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: '***************************************'
})(MapContainer)

import { Marker, Popup, useMapEvents } from 'react-leaflet';

import Leaflet from 'leaflet';

import styles from './MapMarker.module.css';

import locationIcon from '../../assets/icon-location.svg';

const MapMarker = props => {
  const map = useMapEvents({
    locationfound() {
      map.flyTo(props.position);
    },
  });

  map.locate();

  const markerIcon = new Leaflet.Icon({
    iconUrl: locationIcon,
    iconRetinaUrl: locationIcon,
    iconSize: new Leaflet.Point(40, 50),
    className: styles['marker-icon'],
  });

  return (
    <Marker icon={markerIcon} position={props.position}>
      <Popup>{`${props.loc.country}, ${props.loc.region}, ${props.loc.city}`}</Popup>
    </Marker>
  );
};

export default MapMarker;

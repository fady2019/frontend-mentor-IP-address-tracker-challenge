import { MapContainer, TileLayer } from 'react-leaflet';
import MapMarker from './MapMarker';
import 'leaflet/dist/leaflet.css';

import styles from './Map.module.css';

const Map = props => {
  const location = props.location;

  const center = [location.lat, location.lng];
  const zoom = 13;

  const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const tileAttr =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  return (
    <MapContainer
      className={styles['map-container']}
      center={center}
      zoom={zoom}
    >
      <TileLayer url={tileURL} attribution={tileAttr} />

      <MapMarker position={center} loc={location} />
    </MapContainer>
  );
};

export default Map;

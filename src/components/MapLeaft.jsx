import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./Markers";
import "leaflet/dist/leaflet.css";

const position = [19.0348, -98.2172];

const MapLeaft = () => {
  return (
    <MapContainer
      center={position}
      zoom={9}
      scrollWheelZoom={false}
      style={{
        height: "90vh",
        width: "auto",
        zIndex: 0,
        position: "relative",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers />
    </MapContainer>
  );
};

export default MapLeaft;

import { Text, Flex } from "@chakra-ui/react";

import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./Markers";
import "leaflet/dist/leaflet.css";

const position = [19.0348, -98.2172];

const MapLeaft = () => {
  return (
    <Flex w={"full"} p={0} m={0} flexDir={"column"}>
      <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
        Ubicaciones de las respuestas
      </Text>
      <MapContainer
        center={position}
        zoom={12}
        scrollWheelZoom={false}
        style={{
          height: "90vh",
          width: "100%",
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
    </Flex>
  );
};

export default MapLeaft;

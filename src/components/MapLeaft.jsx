import { Text } from "@chakra-ui/react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import { useState } from "react";
import Markers from "./Markers";
import "leaflet/dist/leaflet.css";
const position = [19.0348, -98.2172];
const MapLeaft = () => {
  const [selectedQuestion, setSelectedQuestion] = useState("answer1");

  return (
    <>
      <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }} my={3}>
        Mapa de datos
      </Text>
      <select
        value={selectedQuestion}
        onChange={(e) => setSelectedQuestion(e.target.value)}
      >
        <option value="">Selecciona una pregunta</option>
        <option value="answer1">Pregunta 1</option>
        <option value="answer2">Pregunta 2</option>
        <option value="answer3">Pregunta 3</option>
        <option value="answer4">Pregunta 4</option>
        <option value="answer5">Pregunta 5</option>
        <option value="answer6">Pregunta 6</option>
        <option value="answer7">Pregunta 7</option>
      </select>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "86vh",
          width: "auto",
          zIndex: 0,
          position: "relative",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Markers selectedQuestion={selectedQuestion} />
      </MapContainer>
    </>
  );
};

export default MapLeaft;

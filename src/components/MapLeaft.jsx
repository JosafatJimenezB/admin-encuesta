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
        <option value="answer1">Es usted</option>
        <option value="answer2">Su negocio es</option>
        <option value="answer3">
          Si le ofrecieran alún crédito, ¿para qué lo usaria?
        </option>
        <option value="answer4">
          Si puede conectarse vía internet, ¿qué dispositivo podría usar?
        </option>
        <option value="answer5">
          ¿Usaría comercio electrónico a través de una APP para vender su
          producto o servicio?
        </option>
        <option value="answer6">
          ¿Cuenta con una terminal para el cobro con tarjeta de crédito?
        </option>
        <option value="answer7">
          ¿Qué tipo de capacitación le interesaría más para su negocio?
        </option>
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

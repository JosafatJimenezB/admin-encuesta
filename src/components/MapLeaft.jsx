import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
import { useState } from 'react'
import Markers from './Markers'
import 'leaflet/dist/leaflet.css'
const position = [19.0348, -98.2172]
const MapLeaft = () => {
  const [selectedQuestion, setSelectedQuestion] = useState('answer1')

  return (
    <>
      <select
        value={selectedQuestion}
        onChange={(e) => setSelectedQuestion(e.target.value)}
      >
        <option value="">Selecciona una pregunta</option>
        <option value="answer1">Pregunta 1</option>
        <option value="answer2">Pregunta 2</option>
        <option value="answer3">Pregunta 3</option>
      </select>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: '50vh',
          width: 'auto',
          zIndex: 0,
          position: 'relative'
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Markers selectedQuestion={selectedQuestion} />
      </MapContainer>
    </>
  )
}

export default MapLeaft

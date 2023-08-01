import { Marker, Popup } from 'react-leaflet'
import { useEffect, useState, useMemo } from 'react'

const Markers = ({ selectedQuestion }) => {
  const [markers, setMarkers] = useState([])

  const colorMap = useMemo(() => {
    return {
      azul: 'blue',
      rojo: 'red',
      verde: 'green'
    }
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://api-usuarios.vercel.app/api/v1/all'
        )
        const data = await response.json()
        console.log('data', data)

        setMarkers(data)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()
  }, [])

  const filteredMarkers = markers.filter((marker) => {
    const selectedResponse = marker.responses.find(
      (response) => Object.keys(response)[0] === selectedQuestion
    )
    return selectedResponse !== undefined
  })

  return (
    <>
      {filteredMarkers.map((marker) => {
        const selectedResponse = marker.responses.find(
          (response) => Object.keys(response)[0] === selectedQuestion
        )
        const color =
          selectedResponse !== undefined
            ? colorMap[selectedResponse[selectedQuestion]] || 'gray'
            : 'gray'
        const answer = selectedResponse
          ? selectedResponse[selectedQuestion]
          : ''
        return (
          <Marker
            key={marker.id}
            position={[marker.ubication.lat, marker.ubication.long]}
            icon={
              new L.Icon({
                iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
              })
            }
          >
            <Popup>
              {answer}
              <br />
              {marker.id}
            </Popup>
          </Marker>
        )
      })}
    </>
  )
}

export default Markers

import { Marker } from 'react-leaflet'
import { useEffect, useState } from 'react'

const Markers = () => {
  const [markers, setMarkers] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://api-usuarios.vercel.app/api/v1/all'
        )
        const data = await response.json()

        setMarkers(data)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()
  }, [])

  const colorMap = {
    azul: 'blue',
    rojo: 'red',
    verde: 'green'
  }

  return (
    <>
      {markers.map((marker) => {
        const color =
          marker.responses.length > 0
            ? colorMap[Object.values(marker.responses[0])[0]] || 'gray'
            : 'gray'
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
          />
        )
      })}
    </>
  )
}

export default Markers
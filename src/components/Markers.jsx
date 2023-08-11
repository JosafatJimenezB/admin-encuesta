import { Marker, Popup } from "react-leaflet";
import { useEffect, useState, useMemo } from "react";

const Markers = ({ selectedQuestion }) => {
  const [markers, setMarkers] = useState([]);

  const colorMap = useMemo(() => {
    return {
      azul: "blue",
      rojo: "red",
      verde: "green",
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_PUBLIC_DATA_ALL}/all`
        );
        const data = await response.json();
        console.log("data", data);

        setMarkers(data);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    }
    fetchData();
  }, []);

  const filteredMarkers = markers.filter((marker) => {
    const selectedResponse = marker.responses.find(
      (response) => Object.keys(response)[0] === selectedQuestion
    );
    return selectedResponse !== undefined;
  });

  return (
    <>
      {filteredMarkers.map((marker) => {
        const selectedResponse = marker.responses.find(
          (response) => Object.keys(response)[0] === selectedQuestion
        );
        const color =
          selectedResponse !== undefined
            ? colorMap[selectedResponse[selectedQuestion]] || "gray"
            : "gray";
        const answer = selectedResponse
          ? selectedResponse[selectedQuestion]
          : "";
        return (
          <Marker
            key={marker.id}
            position={[marker.ubication.lat, marker.ubication.long]}
            icon={
              new L.Icon({
                iconUrl: "/icons/" + color + ".svg",
                iconSize: [13, 19],
                iconAnchor: [14, 12],
                popupAnchor: [6, -8],
                shadowAnchor: [4, 62],
              })
            }
          >
            <Popup>
              {answer}
              <br />
              {`Latitud: ${marker.ubication.lat}`}
              <br />
              {`Longitud: ${marker.ubication.long}`}
            </Popup>
          </Marker>
        );
      })}
    </>
  );
};

export default Markers;

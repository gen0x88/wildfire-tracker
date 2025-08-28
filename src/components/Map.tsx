import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import { useState } from "react";
import { category, infoType, LocationInfo } from "./LocationInfo";

type mapTypes = {
  eventData?: any;
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
};

const Map = ({ eventData, center, zoom }: mapTypes) => {
  const [locationInfo, setLocationInfo] = useState<infoType | null>(null);
  const markers = eventData.map((ev: any) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title, description: ev.description, link: ev.link, categories: ev.categories })}
        />
      );
    }
  });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA4h-lr7HBj-gCjCPeV_2LlIw6WC-Ipxi4" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfo info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: { lat: 0, lng: 0 },
  zoom: 6,
};

export default Map;

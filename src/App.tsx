import React, { useEffect, useState } from "react";
import Map from "./components/Map";
import { Header } from "./components/Header";

function App() {
  const [eventData, setEventData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.gsfc.nasa.gov/api/v2.1/events?status=open"
      );
      const { events } = await res.json();
      setEventData(
        events.filter((ev: any) => ev.title.includes("Australia")).slice(0, 20)
      );
      setLoading(false);
      console.log(events);
    };

    fetchEvents();
  }, []);

  return (
    <div className="map">
      <Header />
      {!loading && eventData ? (
        <Map eventData={eventData} zoom={2} center={{ lat: 33, lng: 151 }} />
      ) : (
        <h1 className="loading">Loading...</h1>
      )}
    </div>
  );
}

export default App;

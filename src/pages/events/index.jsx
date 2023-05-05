import { useEffect, useState } from "react";
import { EventItem } from "../../component/event-item";
import "./style.css";

export const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch('http://16.170.37.57/api/v1/app/event/')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        console.log(data);
      })
      .catch((err) => {
        setError("произошла ошибка");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="box">
        {loading && <div>Loading...</div>}
        {error && <div style={{ color: "red" }}>{error}</div>}
        {events.map((e) => (
          <EventItem key={e.id} event={e} />
        ))}
      </div>
    </div>
  );
};

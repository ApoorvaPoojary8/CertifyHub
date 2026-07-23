import { useEffect, useState } from "react";
import api from "../../api/axios";
import { Calendar, MapPin, Trash2, Download } from "lucide-react";

export default function EventGrid() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/events", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEvents(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const deleteEvent = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await api.delete(`/events/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchEvents();
    } catch (error) {
      console.log(error);
    }
  };

  if (events.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No Events Found
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

      {events.map((event) => (

        <div
          key={event._id}
          className="bg-white rounded-2xl shadow-lg p-6"
        >

          <h2 className="text-xl font-bold">
            {event.title}
          </h2>

          <p className="text-gray-600 mt-2">
            {event.description}
          </p>

          <div className="mt-4 space-y-2 text-sm">

            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {event.date}
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {event.venue}
            </div>

          </div>

          {event.registrationQr && (
            <div className="mt-6 flex flex-col items-center">

              <img
                src={`http://localhost:5000/${event.registrationQr}`}
                alt="QR Code"
                className="w-44 h-44 border rounded-lg"
              />

              <a
                href={`http://localhost:5000/${event.registrationQr}`}
                download
                className="mt-3 flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <Download size={18} />
                Download QR
              </a>

            </div>
          )}

          <button
            onClick={() => deleteEvent(event._id)}
            className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
          >
            <Trash2 size={18} />
            Delete Event
          </button>

        </div>

      ))}

    </div>
  );
}
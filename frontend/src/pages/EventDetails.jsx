import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import UploadCSV from "../components/UploadCSV";
import UploadTemplate from "../components/UploadTemplate";

export default function EventDetails() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    fetchEvent();
    fetchParticipants();
  }, []);

  const fetchEvent = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get(`/events/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEvent(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchParticipants = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get(`/events/${id}/participants`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setParticipants(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!event) {
    return (
      <div className="p-10 text-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8">

      {/* Event Title */}

      <h1 className="text-4xl font-bold">{event.title}</h1>

      <p className="mt-3 text-gray-600">{event.description}</p>

      {/* Event Info */}

      <div className="grid md:grid-cols-4 gap-6 mt-8">

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold">Date</h3>
          <p>{new Date(event.date).toLocaleDateString()}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold">Time</h3>
          <p>{event.time}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold">Venue</h3>
          <p>{event.venue}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold">Capacity</h3>
          <p>{event.capacity}</p>
        </div>

      </div>

      {/* QR */}

      {event.registrationQr && (
        <div className="mt-8">
          <img
            src={`http://localhost:5000/${event.registrationQr}`}
            alt="QR"
            className="w-56 border rounded-lg"
          />
        </div>
      )}

      {/* Registration Button */}

      <div className="mt-6">
        <a
          href={event.registrationLink}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Open Registration Form
        </a>
      </div>

      {/* Participants */}

      <div className="mt-12 bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-5">
          Participants
        </h2>

        <UploadCSV
          eventId={id}
          onUploadSuccess={fetchParticipants}
        />

        <table className="w-full mt-6 border">

          <thead className="bg-gray-100">

            <tr>
              <th className="border p-3">Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">USN</th>
            </tr>

          </thead>

          <tbody>

            {participants.length === 0 ? (

              <tr>
                <td
                  colSpan={3}
                  className="border p-6 text-center text-gray-500"
                >
                  No participants yet
                </td>
              </tr>

            ) : (

              participants.map((participant) => (

                <tr key={participant._id}>

                  <td className="border p-2">
                    {participant.name}
                  </td>

                  <td className="border p-2">
                    {participant.email}
                  </td>

                  <td className="border p-2">
                    {participant.usn}
                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

      {/* Certificate Management */}

      <div className="mt-12 bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-6">
          Certificate Management
        </h2>

        <UploadTemplate eventId={id} />

        <div className="flex gap-4 mt-6">

          <button className="bg-purple-600 text-white px-5 py-2 rounded-lg">
            Generate Certificates
          </button>

          <button className="bg-orange-600 text-white px-5 py-2 rounded-lg">
            Download ZIP
          </button>

        </div>

      </div>

      {/* Email */}

      <div className="mt-12 bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-4">
          Email Certificates
        </h2>

        <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg">
          Send All Emails
        </button>

      </div>

    </div>
  );
}
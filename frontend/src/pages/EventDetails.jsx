import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios"

export default function EventDetails() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEvent();
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

  if (!event) {
    return (
      <div className="p-10 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold">
        {event.title}
      </h1>

      <p className="mt-4 text-gray-600">
        {event.description}
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-8">

        <div className="bg-white shadow rounded-xl p-5">
          <h3 className="font-semibold">Date</h3>
          <p>{event.date}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3 className="font-semibold">Time</h3>
          <p>{event.time}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3 className="font-semibold">Venue</h3>
          <p>{event.venue}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3 className="font-semibold">Capacity</h3>
          <p>{event.capacity}</p>
        </div>

      </div>

      {event.registrationQr && (
        <div className="mt-8">
          <img
            src={`http://localhost:5000/${event.registrationQr}`}
            alt="QR"
            className="w-56 rounded-lg border"
          />
        </div>
      )}

      <div className="mt-8">
        <a
          href={event.registrationLink}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Open Registration Form
        </a>
      </div>

      <div className="mt-12 bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-4">
          Participants
        </h2>

        <button className="bg-green-600 text-white px-5 py-2 rounded-lg">
          Fetch Responses
        </button>

        <table className="w-full mt-6 border">

          <thead className="bg-gray-100">

            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">USN</th>
            </tr>

          </thead>

          <tbody>

            <tr>

              <td
                colSpan={3}
                className="border p-6 text-center text-gray-500"
              >
                No responses yet
              </td>

            </tr>

          </tbody>

        </table>

      </div>

      <div className="mt-12 bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-6">
          Certificate Management
        </h2>

        <input
          type="file"
          className="border p-2 rounded-lg w-full"
        />

        <div className="flex gap-4 mt-6">

          <button className="bg-purple-600 text-white px-5 py-2 rounded-lg">
            Generate Certificates
          </button>

          <button className="bg-orange-600 text-white px-5 py-2 rounded-lg">
            Download ZIP
          </button>

        </div>

      </div>

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
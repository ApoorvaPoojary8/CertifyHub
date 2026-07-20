import { useEffect, useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import api from "../api/axios";
import StatsCard from "../components/StatsCard";
import EventTable from "../components/EventTable";
import {
  CalendarDays,
  Award,
  Mail,
} from "lucide-react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalEvents: 0,
    totalCertificates: 0,
    emailsSent: 0,
  });

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const [statsRes, eventsRes] = await Promise.all([
        api.get("/dashboard/stats"),
        api.get("/events"),
      ]);

      setStats(statsRes.data);
      setEvents(eventsRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <Sidebar />

      <main className="flex-1 p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="text-gray-500">
              Welcome back to CertifyHub
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg">
            Create Event
          </button>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Total Events</p>
            <h2 className="text-4xl font-bold mt-3">
              {stats.totalEvents}
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Certificates</p>
            <h2 className="text-4xl font-bold mt-3">
              {stats.totalCertificates}
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Emails Sent</p>
            <h2 className="text-4xl font-bold mt-3">
              {stats.emailsSent}
            </h2>
          </div>

        </div>

        {/* Events */}

        <div className="bg-white rounded-xl shadow mt-10 overflow-hidden">

          <div className="border-b p-6">
            <h2 className="text-2xl font-bold">
              Recent Events
            </h2>
          </div>

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>
                <th className="text-left p-4">Event</th>
                <th className="text-left p-4">Date</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Participants</th>
              </tr>

            </thead>

            <tbody>

              {events.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center py-10 text-gray-500"
                  >
                    No Events Found
                  </td>
                </tr>
              ) : (
                events.map((event) => (
                  <tr
                    key={event._id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4 font-medium">
                      {event.title}
                    </td>

                    <td className="p-4">
                      {new Date(event.date).toLocaleDateString()}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          event.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {event.status}
                      </span>
                    </td>

                    <td className="p-4">
                      {event.participants?.length ?? 0}
                    </td>
                  </tr>
                ))
              )}

            </tbody>

          </table>

        </div>

      </main>
    </div>
  );
}
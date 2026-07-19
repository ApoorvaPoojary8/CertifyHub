import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ExternalLink,
  FileText,
} from "lucide-react";

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5">
        <h2 className="text-xl font-bold">{event.title}</h2>

        <p className="text-sm text-blue-100 mt-1">
          {event.description}
        </p>
      </div>

      {/* Body */}
      <div className="p-5 space-y-4">

        <div className="flex items-center gap-3 text-gray-700">
          <Calendar size={18} className="text-blue-600" />
          <span>{event.date}</span>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <Clock size={18} className="text-blue-600" />
          <span>{event.time}</span>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <MapPin size={18} className="text-blue-600" />
          <span>{event.venue}</span>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <Users size={18} className="text-blue-600" />
          <span>{event.capacity} Participants</span>
        </div>

      </div>

      {/* Footer */}
      <div className="border-t p-5 flex flex-wrap gap-3">

        <a
          href={event.registrationLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          <ExternalLink size={16} />
          Registration
        </a>

        <button
          className="flex items-center gap-2 border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-lg transition"
        >
          <FileText size={16} />
          Certificates
        </button>

      </div>

    </div>
  );
}
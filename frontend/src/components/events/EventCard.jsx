import { useState } from "react";
import {
  Calendar,
  MapPin,
  Download,
  Trash2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function EventCard({
  event,
  onDelete,
  onFetchResponses,
  onGenerateCertificates,
  onDownloadZip,
  onSendEmails,
  onUploadTemplate,
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      {/* Header */}
      <h2 className="text-xl font-bold">{event.title}</h2>

      <p className="text-gray-600 mt-2">{event.description}</p>

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

      {/* QR */}
      {event.registrationQr && (
        <div className="mt-6 flex flex-col items-center">

          <img
            src={`http://localhost:5000/${event.registrationQr}`}
            alt="QR"
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

      {/* View Details */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
      >
        {showDetails ? (
          <>
            <ChevronUp size={18} />
            Hide Details
          </>
        ) : (
          <>
            <ChevronDown size={18} />
            View Details
          </>
        )}
      </button>

      {/* Expanded Section */}
      {showDetails && (
        <div className="mt-6 border-t pt-6">

          <h3 className="text-lg font-semibold mb-4">
            Event Details
          </h3>

          <div className="space-y-2">

            <p>
              <strong>Description:</strong> {event.description}
            </p>

            <p>
              <strong>Date:</strong> {event.date}
            </p>

            <p>
              <strong>Time:</strong> {event.time}
            </p>

            <p>
              <strong>Venue:</strong> {event.venue}
            </p>

            <p>
              <strong>Capacity:</strong> {event.capacity}
            </p>

          </div>

          {/* Registration */}
          <div className="mt-6">

            <a
              href={event.registrationLink}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block"
            >
              Open Registration Form
            </a>

          </div>

          {/* Participants */}
          <div className="mt-8">

            <h3 className="font-semibold text-lg">
              Participants
            </h3>

            <button
              onClick={() => onFetchResponses(event._id)}
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
            >
              Fetch Responses
            </button>

            <div className="mt-4 overflow-x-auto">

              <table className="w-full border">

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
                      className="border p-3 text-center"
                      colSpan="3"
                    >
                      Click "Fetch Responses"
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

          {/* Certificate */}
          <div className="mt-8">

            <h3 className="font-semibold text-lg">
              Certificate Template
            </h3>

            <input
              type="file"
              className="mt-4 border rounded-lg p-2 w-full"
              onChange={(e) =>
                onUploadTemplate(event._id, e.target.files[0])
              }
            />

            <div className="flex gap-4 mt-6">

              <button
                onClick={() =>
                  onGenerateCertificates(event._id)
                }
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
              >
                Generate Certificates
              </button>

              <button
                onClick={() => onDownloadZip(event._id)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg"
              >
                Download ZIP
              </button>

            </div>

          </div>

          {/* Email */}
          <div className="mt-8">

            <h3 className="font-semibold text-lg">
              Email Certificates
            </h3>

            <button
              onClick={() => onSendEmails(event._id)}
              className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg"
            >
              Send All Emails
            </button>

          </div>

        </div>
      )}

      {/* Delete */}
      <button
        onClick={() => onDelete(event._id)}
        className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
      >
        <Trash2 size={18} />
        Delete Event
      </button>

    </div>
  );
}
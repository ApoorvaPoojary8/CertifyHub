export default function EventTable({ events }) {
  return (
    <div className="bg-white rounded-xl shadow mt-10 overflow-hidden">

      <div className="p-6 border-b">

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
                className="text-center py-8"
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
                <td className="p-4 font-semibold">
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
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {event.status}
                  </span>
                </td>

                <td className="p-4">
                  {event.participants?.length || 0}
                </td>
              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}
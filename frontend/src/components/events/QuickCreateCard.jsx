import EventCard from "./EventCard";

export default function EventGrid() {
  const events = [
    {
      id: 1,
      title: "AI Workshop",
      description: "Hands-on AI workshop for beginners.",
      date: "25 July 2026",
      time: "10:00 AM",
      venue: "Main Auditorium",
      capacity: 150,
      registrationLink: "#",
    },
    {
      id: 2,
      title: "HackFest 2026",
      description: "24-hour hackathon with exciting prizes.",
      date: "30 July 2026",
      time: "09:00 AM",
      venue: "Innovation Lab",
      capacity: 300,
      registrationLink: "#",
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      description: "Learn React, Node.js and Tailwind CSS.",
      date: "05 August 2026",
      time: "11:00 AM",
      venue: "Seminar Hall",
      capacity: 200,
      registrationLink: "#",
    },
    {
      id: 4,
      title: "Cloud Computing Seminar",
      description: "Introduction to AWS, Azure and GCP.",
      date: "12 August 2026",
      time: "02:00 PM",
      venue: "Conference Hall",
      capacity: 180,
      registrationLink: "#",
    },
  ];

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Upcoming Events
          </h2>

          <p className="text-gray-500 mt-1">
            Manage all your created events.
          </p>
        </div>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
          {events.length} Events
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
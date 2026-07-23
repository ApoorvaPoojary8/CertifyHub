import { useState } from "react";
import api from "../../api/axios";

export default function CreateEventForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    venue: "",
    capacity: "",
    registrationLink: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const token = localStorage.getItem("token");

    const response = await api.post(
      "/events",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Event created successfully!");

    console.log(response.data);

    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
      venue: "",
      capacity: "",
      registrationLink: "",
    });

  } catch (error) {
    console.log(error);
    alert("Failed to create event");
  }
};

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6">
        Create New Event
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Event Name */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Event Name
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="AI Workshop"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Event Date
          </label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Time */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Time
          </label>

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Venue */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Venue
          </label>

          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            placeholder="Auditorium"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Capacity */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Capacity
          </label>

          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            placeholder="100"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Registration Link */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Google Form Link
          </label>

          <input
            type="url"
            name="registrationLink"
            value={formData.registrationLink}
            onChange={handleChange}
            placeholder="https://forms.google.com/..."
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">
            Description
          </label>

          <textarea
            rows={5}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter event description..."
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}
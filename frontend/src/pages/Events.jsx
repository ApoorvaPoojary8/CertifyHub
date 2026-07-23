import Sidebar from "../components/layout/Sidebar";
import NavEvents from "../components/layout/NavEvents";
import CreateEventForm from "../components/events/CreateEventForm";
import EventGrid from "../components/events/EventGrid";
import Footer from "../components/layout/Footer";

export default function Events() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Top Navbar */}
        <NavEvents />

        {/* Page Content */}
        <main className="pt-20 px-8 pb-8">
          

          <div className="mt-10">
            <EventGrid />
          </div>
        </main>

    
      </div>
    </div>
  );
}
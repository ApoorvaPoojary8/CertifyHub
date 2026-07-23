import CreateEventForm from "../components/events/CreateEventForm";
import Sidebar from "../components/layout/Sidebar";

export default function CreateEvent() {
  return (
   <div className="min-h-screen bg-slate-100 flex">
         <Sidebar />

      <div className="flex-1 p-6">
        <CreateEventForm />
      </div>
    </div>
  );
}
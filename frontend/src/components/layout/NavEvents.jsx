import {
  Search,
  Bell,
  Settings,
  Plus,
} from "lucide-react";

export default function NavEvents() {
  return (
    <header className="fixed top-0 left-72 right-0 h-16 bg-white border-b shadow-sm z-40">

      <div className="h-full px-8 flex items-center justify-between">

        {/* Search Bar */}
        <div className="relative w-full max-w-md">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search events..."
            className="
              w-full
              pl-11
              pr-4
              py-2.5
              rounded-lg
              border
              border-gray-200
              bg-gray-50
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

        </div>

        {/* Right Section */}

        <div className="flex items-center gap-3">

          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <Bell size={20} />
          </button>

          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <Settings size={20} />
          </button>

          <div className="h-8 w-px bg-gray-300" />

          <button
            className="
              flex
              items-center
              gap-2
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-5
              py-2.5
              rounded-lg
              transition
              shadow
            "
          >
            <Plus size={18} />
            Create Event
          </button>

        </div>

      </div>

    </header>
  );
}
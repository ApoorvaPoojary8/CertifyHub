import { useEffect, useState } from "react";
import Sidebar from "../components/layout/Sidebar";

const Profile = () => {
  const [organizer, setOrganizer] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("organizer"));
    setOrganizer(user);
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>

        <div className="bg-white rounded-xl shadow p-6 max-w-xl">
          <div className="mb-6">
            <label className="text-sm text-gray-500">Full Name</label>
            <p className="text-lg font-semibold">
              {organizer?.name || "Not Available"}
            </p>
          </div>

          <div>
            <label className="text-sm text-gray-500">Email</label>
            <p className="text-lg font-semibold">
              {organizer?.email || "Not Available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
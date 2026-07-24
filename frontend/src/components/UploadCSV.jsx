import { useState } from "react";
import api from "../api/axios";

export default function UploadCSV({
  eventId,
  onUploadSuccess,
}) {
  const [csvFile, setCsvFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadCSV = async () => {
    if (!csvFile) {
      return alert("Please select a CSV file");
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("csv", csvFile);

      const token = localStorage.getItem("token");

      await api.post(
        `/events/${eventId}/upload-csv`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("CSV uploaded successfully");

      if (onUploadSuccess) {
        onUploadSuccess();
      }

      setCsvFile(null);

    } catch (err) {
      console.log(err);
      alert("Failed to upload CSV");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-6 flex gap-4 items-center">

      <input
        type="file"
        accept=".csv"
        onChange={(e) =>
          setCsvFile(e.target.files[0])
        }
        className="border rounded-lg p-2"
      />

      <button
        onClick={uploadCSV}
        disabled={loading}
        className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
      >
        {loading ? "Uploading..." : "Upload CSV"}
      </button>

    </div>
  );
}
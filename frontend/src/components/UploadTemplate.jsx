import { useState } from "react";
import api from "../api/axios";

export default function UploadTemplate({
  eventId,
}) {
  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadTemplate = async () => {

    if (!template) {
      return alert("Please select a template");
    }

    try {

      setLoading(true);

      const formData = new FormData();
      formData.append("template", template);

      const token = localStorage.getItem("token");

      await api.post(
        `/events/${eventId}/upload-template`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Template uploaded successfully");

      setTemplate(null);

    } catch (err) {

      console.log(err);

      alert("Template upload failed");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="mb-6 flex gap-4 items-center">

      <input
        type="file"
        accept=".png,.jpg,.jpeg"
        onChange={(e) =>
          setTemplate(e.target.files[0])
        }
        className="border rounded-lg p-2"
      />

      <button
        onClick={uploadTemplate}
        disabled={loading}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
      >
        {loading ? "Uploading..." : "Upload Template"}
      </button>

    </div>
  );
}
import { useState } from "react";
import {
  Upload,
  FileText,
  Sparkles,
  Eye,
  Download,
  CheckCircle,
} from "lucide-react";

const GenerateCertificateCard = () => {
  const [template, setTemplate] = useState(null);
  const [csv, setCsv] = useState(null);
  const [progress] = useState(75);
  const [generated] = useState(true);

  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">
          <Sparkles className="text-blue-600" size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Generate Certificates
          </h2>

          <p className="text-slate-500 text-sm">
            Upload template and participant list
          </p>
        </div>
      </div>

      {/* Template Upload */}
      <label className="border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition">
        <Upload size={40} className="text-slate-400 mb-3" />

        <h3 className="font-semibold">
          Upload Certificate Template
        </h3>

        <p className="text-sm text-slate-500">
          SVG or PDF (Max 5MB)
        </p>

        <input
          type="file"
          hidden
          accept=".pdf,.svg"
          onChange={(e) => setTemplate(e.target.files[0])}
        />

        <div className="mt-4 text-sm text-slate-600">
          {template ? template.name : "No file selected"}
        </div>
      </label>

      {/* CSV Upload */}
      <label className="border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition">
        <FileText size={40} className="text-slate-400 mb-3" />

        <h3 className="font-semibold">
          Upload Participants CSV
        </h3>

        <p className="text-sm text-slate-500">
          CSV format only
        </p>

        <input
          type="file"
          hidden
          accept=".csv"
          onChange={(e) => setCsv(e.target.files[0])}
        />

        <div className="mt-4 text-sm text-slate-600">
          {csv ? csv.name : "No file selected"}
        </div>
      </label>

      {/* Generate Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
        Generate Certificates
      </button>

      {/* Progress */}
      <div>
        <div className="flex justify-between text-sm font-medium mb-2">
          <span>Generating Certificates...</span>

          <span>{progress}%</span>
        </div>

        <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="grid grid-cols-4 mt-4 text-xs text-center">
          <span className="text-blue-600 font-medium">
            Uploading
          </span>

          <span className="text-blue-600 font-medium">
            Reading CSV
          </span>

          <span className="text-blue-600 font-medium">
            Generating
          </span>

          <span className="text-slate-400">
            Completed
          </span>
        </div>
      </div>

      {/* Success */}
      {generated && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">

          <div className="flex items-center gap-2 text-green-700 font-semibold">
            <CheckCircle size={20} />

            128 Certificates Generated Successfully
          </div>

          <div className="grid grid-cols-2 gap-4 mt-5">

            <button className="border rounded-lg py-3 flex justify-center items-center gap-2 hover:bg-slate-50 transition">
              <Eye size={18} />

              Preview
            </button>

            <button className="border rounded-lg py-3 flex justify-center items-center gap-2 hover:bg-slate-50 transition">
              <Download size={18} />

              Download ZIP
            </button>

          </div>

        </div>
      )}
    </div>
  );
};

export default GenerateCertificateCard;
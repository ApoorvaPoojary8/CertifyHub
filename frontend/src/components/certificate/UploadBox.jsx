import { Upload } from "lucide-react";

const UploadBox = ({
  title,
  subtitle,
  accept,
  file,
  onChange,
  icon: Icon = Upload,
}) => {
  const inputId = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <label htmlFor={inputId} className="w-full cursor-pointer block">
      <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300">

        <div className="flex flex-col items-center text-center">

          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <Icon
              size={30}
              className="text-blue-600"
            />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-slate-800">
            {title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-slate-500 mt-2">
            {subtitle}
          </p>

          {/* Hidden Input */}
          <input
            id={inputId}
            className="hidden"
            type="file"
            accept={accept}
            onChange={(e) => onChange(e.target.files?.[0] || null)}
          />

          {/* File Name */}
          <div className="mt-6 w-full rounded-lg bg-slate-100 border border-slate-200 px-4 py-3 text-sm text-slate-600 truncate text-center">
            {file ? file.name : "No file selected"}
          </div>

          {/* Browse Button */}
          <span className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition">
            <Upload size={18} />
            Browse File
          </span>

        </div>

      </div>
    </label>
  );
};

export default UploadBox;
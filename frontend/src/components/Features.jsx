import {
  Upload,
  FileSpreadsheet,
  Sparkles,
  MailCheck,
} from "lucide-react";

const features = [
  {
    icon: <Upload size={32} />,
    title: "Upload Certificate Template",
    description:
      "Upload your certificate design once and reuse it for multiple events.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <FileSpreadsheet size={32} />,
    title: "Upload CSV Data",
    description:
      "Import thousands of participants instantly using CSV or Excel files.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <Sparkles size={32} />,
    title: "Generate in Bulk",
    description:
      "Generate hundreds of personalized certificates within seconds.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <MailCheck size={32} />,
    title: "Email Certificates",
    description:
      "Automatically deliver certificates to every participant via email.",
    color: "bg-red-100 text-red-600",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Powerful Features
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Everything you need to automate certificate generation,
            management, and email delivery for workshops,
            hackathons, webinars, and conferences.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
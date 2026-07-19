import {
  CalendarDays,
  Upload,
  FileSpreadsheet,
  Sparkles,
  MailCheck,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Create Event",
    description:
      "Create your event by adding its title, date, organizer details, and certificate information.",
    icon: CalendarDays,
  },
  {
    id: 2,
    title: "Upload Template",
    description:
      "Upload your certificate template and customize placeholders for participant details.",
    icon: Upload,
  },
  {
    id: 3,
    title: "Upload CSV",
    description:
      "Import participant data using CSV or Excel with automatic field mapping.",
    icon: FileSpreadsheet,
  },
  {
    id: 4,
    title: "Generate Certificates",
    description:
      "Generate personalized certificates in bulk within seconds.",
    icon: Sparkles,
  },
  {
    id: 5,
    title: "Send Emails",
    description:
      "Automatically email certificates to every participant and track delivery status.",
    icon: MailCheck,
  },
];

const Workflow = () => {
  return (
    <section
      id="workflow"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            How CertifyHub Works
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            A simple workflow that automates your entire certificate generation
            process from participant registration to email delivery.
          </p>
        </div>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 hidden md:block w-1 bg-blue-100"></div>

          <div className="space-y-10">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="flex items-start gap-6"
                >
                  <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                    <Icon size={24} />
                  </div>

                  <div className="flex-1 rounded-2xl bg-gray-50 p-6 shadow-sm hover:shadow-lg transition">
                    <span className="text-sm font-semibold text-blue-600">
                      STEP {step.id}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-gray-600 leading-7">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Workflow;
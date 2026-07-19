import GenerateCertificateCard from "../components/certificate/GenerateCertificateCard";
import EmailCertificateCard from "../components/certificate/EmailCertificateCard";

const Certificates = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Certificate Management
          </h1>

          <p className="mt-3 text-slate-600 max-w-3xl">
            Upload certificate templates, generate personalized certificates,
            preview them, download as ZIP, and send certificates directly to
            participants via email.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          <GenerateCertificateCard />

          <EmailCertificateCard />

        </div>

      </section>

    </div>
  );
};

export default Certificates;
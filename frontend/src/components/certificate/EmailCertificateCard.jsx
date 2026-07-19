import { useState } from "react";
import UploadBox from "./UploadBox";
import { Archive } from "lucide-react";

const EmailCertificateCard = () => {
  const [zip, setZip] = useState(null);

  return (
    <UploadBox
      title="Certificates ZIP"
      subtitle="Upload Generated ZIP File"
      accept=".zip"
      file={zip}
      onChange={setZip}
      icon={Archive}
    />
  );
};

export default EmailCertificateCard;
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendCertificateEmail =
async (
  email,
  name,
  pdfPath
) => {

  await transporter.sendMail({

    from: process.env.EMAIL_USER,

    to: email,

    subject:
      "Your Certificate",

    text:
      `Hello ${name},
       Please find your certificate attached.`,

    attachments: [
      {
        filename:
          `${name}.pdf`,
        path: pdfPath
      }
    ]

  });

};
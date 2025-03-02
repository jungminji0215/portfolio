import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export const sendEmail = async ({ email, message }) => {
  const mailData = {
    from: email,
    to: process.env.AUTH_USER,
    subject: "[BLOG] 에서 새로운 메세지가 왔습니다.",
    html: `
    <h1>${email} 로부터 메세지가 왔습니다.</h1>
    <div>${message}</div>
    `,
  };

  transporter.sendMail(mailData);
};

import nodemailer from "nodemailer";
import { MAIL_HOST, MAIL_PASS, MAIL_PORT, MAIL_USER } from "../config/env";

// Looking to send emails in production? Check out our Email API/SMTP product!
const transport = nodemailer.createTransport({
  host: MAIL_HOST,
  port: Number(MAIL_PORT),
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
});

export default transport;

import transport from "./transport";

interface Sender {
  address: string;
  name?: string;
}

const DEFAULT_SENDER: Sender = {
  address: "team@example.com",
  name: "Example Team",
};

const sendMail = async (
  recipient: string[],
  subject: string,
  message: string,
) => {

  await transport.sendMail({
    from: `"${DEFAULT_SENDER.name}" <${DEFAULT_SENDER.address}>`, // sender address
    to: recipient.join(", "), // list of recipients
    subject: subject, // subject line
    html: `<b>${message}</b>`, // HTML body
  });
};

export { sendMail };

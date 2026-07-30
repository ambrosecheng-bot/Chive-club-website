import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: "mehavenodad@gmail.com",
    pass: "puvr aeld xfjn iskt",
  },
});

function sendSignupEmail(userEmail) {
  try {
    const info = await transporter.sendMail({
      from: '"Sunny Mok" <mehavenodad@gmail.com>', // sender address
      to: userEmail//"alice@example.com, bob@example.com", // list of recipients
      subject: "Hello", // subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // HTML body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Preview URL is only available when using an Ethereal test account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } 
  catch (err) {
    console.error("Error while sending mail:", err);
  }
}

export { sendSignupEmail }

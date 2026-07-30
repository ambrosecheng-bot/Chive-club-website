import { getAllSignupData, updateCount } from './firebase.js';

const nodemailer = require("nodemailer");

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



function sendEmail(userEmail, count){
        // Set up the email contents
    const mailOptions = {
      from: '"Sunny Mok" <mehavenodad@gmail.com>',
      to: userEmail,
      subject: 'Hello from Node.js', //need to switch count to send diff email, maybe use different function
      text: 'This email was sent using Nodemailer!',
      html: '<b>This email was sent using Nodemailer!</b>', 
    };
    
    // Trigger the transmission
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log('Error occurred: ' + error.message);
      }
      console.log('Email sent successfully! Message ID: ' + info.messageId);
    });
}


async function sendDailyEmail() {
  const allData = await getAllSignupData();
  allData.forEach(item => {
    sendEmail(item.email, item.count);
    /*
	try {
    	if (item.count < 5) {
			updateCount(item, item.count);
    	console.log("Count increment code executed without runtime errors!");
		}
	} 
	catch (error) {
		console.error("Error incrementing count: ", error);
	}*/
    
  });
}

export { sendDailyEmail };

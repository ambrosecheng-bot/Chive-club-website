import emailjs from '@emailjs/nodejs';
import { getAllSignupData } from './firebase.js';

// Initialize EmailJS with your Public Key (Get this from your EmailJS Account Dashboard)
const PUBLIC_KEY = "XKOeiuX5zHgQT4aqf"
emailjs.init(PUBLIC_KEY);

function sendEmail(userEmail) {
    // These IDs come from your EmailJS dashboard after setup
    const serviceID = "service_55s2sal";
    const templateID = "template_v48jvlt";

    // Match these keys exactly with the {{variable_names}} inside your EmailJS template
    const templateParams = {
        to_email: userEmail
    };

    // Trigger the email sending process
    emailjs.send(serviceID, templateID, templateParams, { publicKey: PUBLIC_KEY })
        .then((response) => {
            console.log("Email sent successfully!", response.status, response.text);
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
        });
}

async function sendDailyEmail() {
  const allData = await getAllSignupData();
  allData.forEach(item => {
    sendEmail(item.email);
  });
}

export { sendDailyEmail };

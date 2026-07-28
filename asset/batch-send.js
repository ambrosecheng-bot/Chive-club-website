import emailjs from '@emailjs/nodejs';
import { getAllSignupData } from './firebase.js';

// Initialize EmailJS with your Public Key (Get this from your EmailJS Account Dashboard)
emailjs.init("XKOeiuX5zHgQT4aqf");

function sendEmail(userEmail) {
    // These IDs come from your EmailJS dashboard after setup
    const serviceID = "service_55s2sal";
    const templateID = "template_v48jvlt";

    // Match these keys exactly with the {{variable_names}} inside your EmailJS template
    const templateParams = {
        to_email: userEmail
    };

    // Trigger the email sending process
    emailjs.send(serviceID, templateID, templateParams)
        .then((response) => {
            console.log("Email sent successfully!", response.status, response.text);
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
            alert("Error sending email. Please try again.");
        });
}

function sendDailyEmail() {
  const allData = getAllSignupData();
  allData.forEach(item => {
    sendEmail(item.email);
  });
}

export { sendDailyEmail };

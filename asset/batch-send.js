import emailjs from '@emailjs/nodejs';
import { getAllSignupData } from './firebase.js';

// Initialize EmailJS with your Public Key (Get this from your EmailJS Account Dashboard)
const PUBLIC_KEY = /*"XKOeiuX5zHgQT4aqf"*/ "BXtcg16hSID5oBKDc"; // switched to sunnyyanlongmok's emailjs to preserve requests (we only have 200)
const PRIVATE_KEY = /*"m4Qc40mB5N4DMRJhGUSxS"*/ "QFcFKJH8TDFlBeD3vJT6-";
emailjs.init({
    publicKey: PUBLIC_KEY,
    privateKey: PRIVATE_KEY
});

function sendEmail(userEmail) {
    // These IDs come from your EmailJS dashboard after setup
    const serviceID = /*"service_55s2sal"*/ "service_1wh8ska"; //switched to sunnyyanlongmok's emailjs
    const templateID = /*"template_v48jvlt"*/ "template_c34qvk2";

    // Match these keys exactly with the {{variable_names}} inside your EmailJS template
    const templateParams = {
        to_email: userEmail
    };

    // Trigger the email sending process
    emailjs.send(serviceID, templateID, templateParams, { publicKey: PUBLIC_KEY, privateKey: PRIVATE_KEY })
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

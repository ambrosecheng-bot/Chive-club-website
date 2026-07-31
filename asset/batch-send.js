import emailjs from '@emailjs/nodejs';
import { getAllSignupData, updateCount } from './firebase.js';

// Initialize EmailJS with your Public Key (Get this from your EmailJS Account Dashboard)
const PUBLIC_KEY = "XKOeiuX5zHgQT4aqf"; // "BXtcg16hSID5oBKDc" //commented is sunnyyanlongmok's key
const PRIVATE_KEY = "m4Qc40mB5N4DMRJhGUSxS"; // "QFcFKJH8TDFlBeD3vJT6-"
emailjs.init({
    publicKey: PUBLIC_KEY,
    privateKey: PRIVATE_KEY
});

function sendEmail(userEmail, count) {
    // These IDs come from your EmailJS dashboard after setup
    const serviceID = "service_55s2sal"; // "service_1wh8ska"; //switched to sunnyyanlongmok's emailjs
	var templateID = "Nothing";
    switch (count){
			case 0: templateID = "template_ia5kmaa"; break;
			case 1: templateID = "template_e53ugey"; break;
			case 2: templateID = "template_2csycwb"; break;
			case 3: templateID = "template_ahnme5f"; break;
			case 4: templateID = "template_yumuumt"; break;
			default: return;
		}
    //const templateID = /*"template_v48jvlt"*/ "template_c34qvk2"; //old & new template

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
/*
// Update count
async function updateCount(userData, countPara) {
  try {
    await updateDoc(userData, {
      count: increment(countPara)
    });
    console.log("Count successfully incremented!");
  } catch (error) {
    console.error("Error incrementing count: ", error);
  }
}*/

async function sendDailyEmail() {
  const allData = await getAllSignupData();
  allData.forEach(item => {
    sendEmail(item.email, item.count);
	try {
    	if (item.count < 5) {
			updateCount(item, item.count);
    		console.log("Count increment code executed without runtime errors!");
		}
	} 
	catch (error) {
		console.error("Error incrementing count: ", error);
	}
    
  });
}

export { sendDailyEmail };

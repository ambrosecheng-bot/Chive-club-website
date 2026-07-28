import { sendSignupEmail } from './sendEmail.js';
import { getAllSignupData } from './firebase.js';

function sendDailyEmail() {
  const allData = getAllSignupData;
  allData.forEach(item => {
    sendSignupEmail(item.email);
  });
}

export { sendDailyEmail };

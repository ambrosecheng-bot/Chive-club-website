import { sendSignupEmail } from './sendEmail.js';
import { getAllSignupData } from './firebase.js';

const allData = getAllSignupData;
allData.forEach(item => {
  sendSignupEmail(item.email);
});

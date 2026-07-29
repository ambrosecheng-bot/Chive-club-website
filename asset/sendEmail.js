// Initialize EmailJS with your Public Key (Get this from your EmailJS Account Dashboard)
emailjs.init(/*"XKOeiuX5zHgQT4aqf"*/ "BXtcg16hSID5oBKDc"); //switched to sunnyyanlongmok's emailjs

function sendSignupEmail(userEmail) {
    // These IDs come from your EmailJS dashboard after setup
    const serviceID = /*"service_55s2sal"*/ "service_1wh8ska"; //switched to sunnyyanlongmok's emailjs (temporary)
    const templateID = /*"template_v48jvlt"*/ "template_c34qvk2";

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

export { sendSignupEmail };

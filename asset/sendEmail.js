// Initialize EmailJS with your Public Key (Get this from your EmailJS Account Dashboard)
emailjs.init("6bVmrqY2A_R6eVBDI");

export function sendEmail(userEmail) {
  // These IDs come from your EmailJS dashboard after setup
    const serviceID = "service_17wy0nn";
    const templateID = "template_z07sawl";

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

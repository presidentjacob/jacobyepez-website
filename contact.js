(function() {
    emailjs.init("aLYJge2ko5bbXsz5q"); // Replace with your EmailJS Public Key
})();

const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop page reload

    emailjs.sendForm("service_r322sac", "template_fchd5d5", this)
    .then(() => {
        statusMsg.textContent = "Message sent successfully!";
        statusMsg.style.color = "green";
        form.reset();
    }, (err) => {
        statusMsg.textContent = "Failed to send. Try again later.";
        statusMsg.style.color = "red";
        console.error("EmailJS error:", err);
    });
});
console.log('Site loaded');

// ✅ Initialize EmailJS
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("BrQ5-jaAzRl0OrP-B"); // <-- Replace after EmailJS setup

    const appointmentForm = document.getElementById("appointmentForm");

    if (appointmentForm) {
        appointmentForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Collect form data
            const formData = {
                name: document.getElementById("name").value,
                phone: document.getElementById("phone").value,
                email: document.getElementById("email").value,
                date: document.getElementById("date").value,
                time: document.getElementById("time").value,
                department: document.getElementById("department").value,
                doctor: document.getElementById("doctor").value,
                message: document.getElementById("message").value
            };

            // ✅ Send Email via EmailJS
            emailjs.send("service_e2jroob", "template_he2jcjm", formData)
                .then(() => {
                    alert(
                        `✅ Thank you, ${formData.name}!\n\n` +
                        `Your appointment request has been submitted.\n` +
                        `A confirmation email has been sent to ${formData.email}.\n\n` +
                        `We will contact you at ${formData.phone} to confirm your appointment.\n\n` +
                        `Date: ${formData.date}\nTime: ${formData.time}\nDepartment: ${formData.department}\n` +
                        `${formData.doctor ? 'Preferred Doctor: ' + formData.doctor : ''}`
                    );

                    appointmentForm.reset();
                })
                .catch((error) => {
                    console.error("EmailJS Error:", error);
                    alert("❌ Something went wrong while sending the email. Try again.");
                });
        });
    }

    // Highlight active nav link
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Set minimum appointment date to today
    const dateInput = document.getElementById("date");
    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.min = today;
    }

    // Button click animation
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            this.style.transform = "scale(0.95)";
            setTimeout(() => {
                this.style.transform = "";
            }, 150);
        });
    });
});

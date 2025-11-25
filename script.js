console.log("Site loaded");

// =============================
//  INITIALIZE EMAILJS
// =============================
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("BrQ5-jaAzRl0OrP-B"); // Replace with your EmailJS Public Key

    const appointmentForm = document.getElementById("appointmentForm");

    if (appointmentForm) {
        appointmentForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // COLLECT FORM DATA
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

            // =============================
            // SEND EMAIL USING EMAILJS
            // =============================
            emailjs
                .send("service_e2jroob", "template_he2jcjm", formData)
                .then(() => {
                    // SHOW SUCCESS POPUP
                    const popup = document.getElementById("successPopup");
                    popup.classList.add("show");

                    // AUTO HIDE POPUP
                    setTimeout(() => {
                        popup.classList.remove("show");
                    }, 3000);

                    // RESET FORM
                    appointmentForm.reset();
                })
                .catch((error) => {
                    console.error("EmailJS Error:", error);
                    alert("❌ Something went wrong while sending the email. Please try again.");
                });
        });
    }

    // =============================
    // ACTIVE MENU HIGHLIGHT
    // =============================
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // =============================
    // MINIMUM DATE SET TO TODAY
    // =============================
    const dateInput = document.getElementById("date");
    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.min = today;
    }

    // =============================
    // BUTTON CLICK ANIMATION
    // =============================
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            this.style.transform = "scale(0.95)";
            setTimeout(() => {
                this.style.transform = "";
            }, 150);
        });
    });
});

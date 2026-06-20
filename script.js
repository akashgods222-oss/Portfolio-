document.addEventListener("DOMContentLoaded", function() {
    
    // --- Theme Toggle ---
    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", function() {
            document.body.classList.toggle("light-mode");
        });
    }

    // --- Form Submission ---
    const pooraForm = document.querySelector("form");
    if (pooraForm) {
        pooraForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Page reload hone se rokne ke liye
            const msgDabba = document.getElementById("successMessage");
            if (msgDabba) {
                pooraForm.style.display = "none";
                msgDabba.innerHTML = "Thank you, Akash bhai! Form ekdum sahi submit ho gaya hai. 🔥";
            }
        });
    }

    // --- Project Popup Modal ---
    const horrorCard = document.getElementById("horrorCard");
    const projectModal = document.getElementById("projectModal");
    const closeModal = document.getElementById("closeModal");

    if (horrorCard && projectModal) {
        horrorCard.addEventListener("click", function() {
            projectModal.style.display = "flex";
        });
    }

    if (closeModal && projectModal) {
        closeModal.addEventListener("click", function() {
            projectModal.style.display = "none";
        });
    }
});

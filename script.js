document.addEventListener("DOMContentLoaded", function() {
    
    // --- Theme Toggle ---
    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", function() {
            document.body.classList.toggle("light-mode");
        });
    }

    // --- Form Submission ---
    const form = document.querySelector("form");
form.addEventListener("submit", async function(e) {
    e.preventDefault(); // Pehle default submit roko
    
    const formData = new FormData(form);
    
    // Yeh code background mein chupke se Formspree ko data bhej dega
    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    });
    
    if ( response.status === 200 || response.ok) {
        // Mail jaane ke baad screen par success message dikhao
        document.getElementById("SuccessMessage").innerText = "Message sent successfully! 🎉";
        form.reset(); // Form ke dabbe khaali karne ke liye
    } else {
        document.getElementById("SuccessMessage").innerText = "Opps! Kuch gadbad hui.";
    }
});

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

document.addEventListener("DOMContentLoaded", function() {

    // 📩 Form Submission ka dimaag
    const button = document.getElementById("myBtn");
    if (button) {
        button.addEventListener("click", function() {
            const nameValue = document.getElementById("userName").value.trim();
            const emailValue = document.getElementById("userEmail").value.trim();
            const msgDabba = document.getElementById("successMessage");
            const pooraForm = document.querySelector("form");
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (nameValue === "" || emailValue === "") {
                alert("Oi! Pehle apna naam aur email toh dalo bhai! ❌");
            } else if (!emailPattern.test(emailValue)) {
                alert("Akash bhai, email thoda galat lag raha hai. Sahi format dalo!");
            } else {
                pooraForm.style.display = "none";
                msgDabba.innerHTML = "Thank you, Akash bhai! Form ekdum sahi submit ho gaya hai. 🔥🚀";
            }
        });
    }

    // 🌓 Theme Toggle ka dimaag
    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", function() {
            document.body.classList.toggle("light-mode");
        });
    }

    // 🍿 Popup Modal ka dimaag
    const horrorCard = document.getElementById("horrorCard");
    const projectModal = document.getElementById("projectModal");
    const closeModal = document.getElementById("closeModal");

    // 1. Card par click hote hi popup show karo
    if (horrorCard && projectModal) {
        horrorCard.addEventListener("click", function() {
            projectModal.style.display = "flex";
        });
    }

    // 2. Cross (X) button par click hote hi popup gayab karo
    if (closeModal && projectModal) {
        closeModal.addEventListener("click", function() {
            projectModal.style.display = "none";
        });
    }

    // 3. Agar koi popup ke baahar kali screen par click kare, toh bhi band ho jaye
    if (projectModal) {
        projectModal.addEventListener("click", function(e) {
            if (e.target === projectModal) {
                projectModal.style.display = "none";
            }
        });
    }

}); // <-- Ab yeh main bracket ekdum aakhri mein sahi se band hua hai!

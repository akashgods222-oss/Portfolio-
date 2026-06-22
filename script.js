document.addEventListener("DOMContentLoaded", function() {
    // Saare functions ko initialize (start) karne ke liye
    initThemeToggle();
    initFormSubmission();
    initProjectModal();
});

// ========================================================
// 1. Theme Toggle Function (Re-usable block)
// ========================================================
function initThemeToggle() {
    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", function() {
            document.body.classList.toggle("light-mode");
        });
    }
}

// ========================================================
// 2. Form Submission Function with Alert Customization
// ========================================================
function initFormSubmission() {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", async function(e) {
        e.preventDefault(); 
        
        const formData = new FormData(form);
        
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                document.getElementById("SuccessMessage").innerText = "Message sent successfully! 🎉";
                
                // 🔥 Aaj ka challenge: User ko dynamic alert box dikhana
                alert("Thank you! Aapka message mujhe mil gaya hai. 👍");
                
                form.reset(); 
            } else {
                document.getElementById("SuccessMessage").innerText = "Oops! Kuch gadbad hui.";
            }
        } catch (error) {
            document.getElementById("SuccessMessage").innerText = "Network issue! Baad mein try karein.";
        }
    });
}

// ========================================================
// 3. Project Modal Function (With Event Bubbling Fix)
// ========================================================
function initProjectModal() {
    const horrorCard = document.getElementById("horrorCard");
    const projectModal = document.getElementById("projectModal");
    const closeModal = document.getElementById("closeModal");
    
    // 👇 Horror Card ke andar jo YouTube button hai use select kiya
    const ytButton = horrorCard ? horrorCard.querySelector("button") : null;

    if (horrorCard && projectModal) {
        horrorCard.addEventListener("click", function() {
            projectModal.style.display = "flex";
        });
    }

    // 🛑 MASTER STROKE: Jab user youtube button dabaye, toh modal NA khule!
    if (ytButton) {
        ytButton.addEventListener("click", function(e) {
            e.stopPropagation(); // Yeh line click ko card tak jaane se rok degi!
        });
    }

    if (closeModal && projectModal) {
        closeModal.addEventListener("click", function() {
            projectModal.style.display = "none";
        });
    }
}

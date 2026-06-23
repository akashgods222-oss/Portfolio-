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
// 3. Project Modal Function (With Final Event Bubbling Fix)
// ========================================================
function initProjectModal() {
    const horrorCard = document.getElementById("horrorCard");
    const projectModal = document.getElementById("projectModal");
    const closeModal = document.getElementById("closeModal");
    
    // 👇 CARD KE ANDAR JO 'A' TAG (LINK) HAI, USE TARGET KIYA
    const ytLink = horrorCard ? horrorCard.querySelector("a") : null;

    if (horrorCard && projectModal) {
        horrorCard.addEventListener("click", function() {
            projectModal.style.display = "flex";
        });
    }

    // 🛑 BRAKE SYSTEM: Link aur Button dono ke click ko card tak jaane se rok diya
    if (ytLink) {
        ytLink.addEventListener("click", function(e) {
            e.stopPropagation(); // Yeh line click ka signal upar card tak nahi jaane degi!
        });
    }

    if (closeModal && projectModal) {
        closeModal.addEventListener("click", function() {
            projectModal.style.display = "none";
        });
    }
}

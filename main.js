const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section--active');
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

const form = document.getElementById('contactForm');
const status = document.getElementById('form-status');

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "dd721ef2-15cf-444e-a186-4edacaec5548");

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        status.innerText = "Bericht verzonden!";
        form.reset();
    } else {
        status.innerText = "Er ging iets mis. Probeer het opnieuw.";
    }
});

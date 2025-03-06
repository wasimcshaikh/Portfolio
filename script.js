document.addEventListener("DOMContentLoaded", function () {
    // ===================== TYPING EFFECT =====================
    const textElement = document.getElementById("welcome-text");
    const text = "Welcome To My Portfolio !";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust typing speed here
        }
    }

    typeEffect();

    // ===================== SKILLS SECTION ANIMATION =====================
    const skillsSection = document.querySelector(".skills-section");
    const skillBoxes = document.querySelectorAll(".skill-box");

    function animateSkills() {
        skillBoxes.forEach((box, index) => {
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
            box.style.transition = `all 0.8s ease-in-out ${index * 0.2}s`; // Staggered effect
        });
    }

    const skillsObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    observer.unobserve(skillsSection); // Run animation only once
                }
            });
        },
        { rootMargin: "-100px", threshold: 0.3 }
    );

    skillsObserver.observe(skillsSection);

    // ===================== PROJECTS SECTION ANIMATION =====================
    const projectSection = document.getElementById("projects");
    const projectButtons = document.querySelectorAll(".project-btn");

    function fadeInProjects() {
        projectButtons.forEach((btn, index) => {
            setTimeout(() => {
                btn.style.opacity = "1";
                btn.style.animation = "fadeIn 0.5s ease-in-out";
            }, index * 300);
        });
    }

    const projectsObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    fadeInProjects();
                    observer.unobserve(projectSection); // Run animation only once
                }
            });
        },
        { rootMargin: "-100px", threshold: 0.3 }
    );

    projectsObserver.observe(projectSection);

    // ===================== CONTACT FORM HANDLER =====================
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all required fields!");
            return;
        }

        const mailtoLink = `mailto:shaikhwasim3010@gmail.com?subject=Contact From ${name}&body=
        Name: ${name}%0D%0A
        Email: ${email}%0D%0A
        Phone: ${phone}%0D%0A
        Message: ${message}`;

        window.location.href = mailtoLink; // Opens the user's email app

        alert("Your message has been sent successfully!");
        contactForm.reset(); // Clear form after submission
    });
});

"use strict";
const form = document.getElementById("resume-form");
const resumeDisplay = document.getElementById("resume-display");
const resumeContent = document.getElementById("resume-content");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    const resumeHTML = `
        <div class="resume-section">
            <h3>Personal Information</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
        </div>
        <div class="resume-section">
            <h3>Education Background</h3>
            <p>${education}</p>
        </div>
        <div class="resume-section">
            <h3>Professional Experience</h3>
            <p>${experience}</p>
        </div>
        <div class="resume-section">
            <h3>Core Skills</h3>
            <p>${skills}</p>
        </div>
    `;
    resumeContent.innerHTML = resumeHTML;
    resumeDisplay.classList.remove("hidden");
});

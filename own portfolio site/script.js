// Smooth scrolling for navigation links

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function(event) {

        event.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// Simple welcome message

console.log("Welcome to Surendra Yadav's Portfolio!");


// Project button effect

const projectButtons = document.querySelectorAll('.project-btn');

projectButtons.forEach(button => {

    button.addEventListener('click', function() {

        alert("Project details will be available soon!");

    });

});
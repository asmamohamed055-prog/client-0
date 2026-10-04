var typed = new Typed(".text", {
    strings: ["WEB DEVELOPER", "web Devloper"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});  
const paths = document.querySelectorAll(".path");

const percentages = [90, 90, 70, 80];

paths.forEach((path, index) => {
    const percentage = percentages[index];

    const circumference = 2 * Math.PI * 80;
    const offset = circumference - (percentage / 100) * circumference;

    path.style.strokeDasharray = circumference;
    path.style.strokeDashoffset = circumference;

    setTimeout(() => {
        path.style.strokeDashoffset = offset;
    }, 300);
});
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuIcon.classList.toggle("active");
});
// Check if it's a mobile device
function isMobileDevice() {
    return window.innerWidth <= 768;
}

// Listen for window resize and remove hamburger menu on desktop
window.addEventListener("resize", () => {
    if (!isMobileDevice()) {
        menu.classList.remove("active");
        menuIcon.classList.remove("active");
    }
});

function setProgress(progressBar, targetWidth) {
    const bar = document.getElementById(progressBar);
    bar.style.width = targetWidth + "%";
}

// Set the desired widths for each progress bar
setProgress("progress-bar-1", 80);
setProgress("progress-bar-2", 70);
setProgress("progress-bar-3", 30);
setProgress("progress-bar-4", 50);
setProgress("progress-bar-5", 60);
setProgress("progress-bar-6", 90);
setProgress("progress-bar-7", 80);





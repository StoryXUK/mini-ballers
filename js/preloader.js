window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main');

    // Hide preloader and show main content after a delay
    setTimeout(function () {
        preloader.style.opacity = '0';
        preloader.style.transform = 'translateY(-100%)';
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0)';
    }, 1200); // Adjust the delay (in milliseconds) as needed
});
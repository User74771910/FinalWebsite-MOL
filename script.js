// Optionally, you can add JavaScript for additional functionality, such as pausing on hover.

// Example:
const slider = document.getElementById('slider');

slider.addEventListener('mouseenter', () => {
    slider.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseleave', () => {
    slider.style.animationPlayState = 'running';
});



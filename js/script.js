// Portfolio Interactive Features
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio successfully loaded.');
    
    // Smooth scrolling confirmation logs (Optional customization helper)
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                console.log(`Navigating smoothly to section: ${targetId}`);
            }
        });
    });
});

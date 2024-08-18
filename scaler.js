// Function to create or update dots based on viewport size
function createDots(dotSize, gap) {
    const dotGrid = document.querySelector('.dot-grid');

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate number of columns and rows based on dot size
    const cols = Math.floor(viewportWidth / dotSize);
    const rows = Math.floor(viewportHeight / dotSize);

    // Set the grid template based on calculated rows and columns
    dotGrid.style.gridTemplateColumns = `repeat(${cols}, ${dotSize}px)`;
    dotGrid.style.gridTemplateRows = `repeat(${rows}, ${dotSize}px)`;

    // Reuse existing dots or create new ones if needed
    const totalDots = cols * rows;
    const currentDots = dotGrid.childElementCount;

    if (currentDots < totalDots) {
        const fragment = document.createDocumentFragment();
        for (let i = currentDots; i < totalDots; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            fragment.appendChild(dot);
        }
        dotGrid.appendChild(fragment);
    } else if (currentDots > totalDots) {
        for (let i = currentDots; i > totalDots; i--) {
            dotGrid.removeChild(dotGrid.lastChild);
        }
    }
}

// Function to calculate distance between two points
function getDistance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}

// Function to handle mouse move and scale dots within a certain radius
function handleMouseMoveOptimized(e) {
    const dots = document.querySelectorAll('.dot-grid .dot');
    const gridhoverbg = document.querySelector('.gridhoverbg');
    const gridRect = gridhoverbg.getBoundingClientRect();

    const mouseX = e.clientX - gridRect.left;
    const mouseY = e.clientY - gridRect.top;

    const radius = 150;  

    requestAnimationFrame(() => {
        for (let dot of dots) {
            const dotRect = dot.getBoundingClientRect();
            const dotX = dotRect.left + dotRect.width / 2;
            const dotY = dotRect.top + dotRect.height / 2;

            const distance = getDistance(mouseX, mouseY, dotX, dotY);

            if (distance < radius) {
                const scale = 0.2 + Math.max(1 - distance / radius, 0); // Add 0.2 to ensure minimum scale
                dot.style.transform = `scale(${scale})`;
            } else {
                dot.style.transform = 'scale(0.2)'; // Reset to minimum scale outside the radius
            }
        }
    });
}

// Throttle function to limit the rate at which the event is processed
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add mousemove event listener with throttling
document.addEventListener('mousemove', throttle(handleMouseMoveOptimized, 50)); // Throttle to 50ms delay (20 FPS)

// Create the dots based on your viewport dimensions and styles
createDots(20, 10); // Adjust dot size for performance

// Ensure the grid covers the entire screen and updates on window resize
window.addEventListener('resize', () => {
    createDots(20, 10); // Adjust only the number of dots needed
});

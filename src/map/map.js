let isDragging = false;
let startX,startY;
let x = 0, y = 0;

document.addEventListener('DOMContentLoaded', () => {
    const clickableImages = document.querySelectorAll('.clickable');
    
    clickableImages.forEach(image => {
        image.addEventListener('click', () => {
            const url = image.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });

        image.style.top = Math.random() * 80 + '%'; 
        image.style.left = Math.random() * 80 + '%';
    });
});

const whiteBoard  = document.getElementById("white-board");

function updatePosition(){
    gsap.to(whiteBoard, {
        x: x,
        y: y,
        duration: 0.2,
        ease: "power2.out",
    });
}

whiteBoard.addEventListener("mousedown", (element) => {
    element.preventDefault();
    isDragging = true;
    startX = element.clientX - x;
    startY = element.clientY - y;
    whiteBoard.style.cursor = "grabbing";
});

whiteBoard.addEventListener("mouseup", () => {
    isDragging = false;
    whiteBoard.style.cursor = "grab";
});
whiteBoard.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    x = e.clientX - startX;
    y = e.clientY - startY;
    updatePosition();
});
whiteBoard.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      startX = e.touches[0].clientX - x;
      startY = e.touches[0].clientY - y;
    }
});
whiteBoard.addEventListener("touchmove", (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    x = e.touches[0].clientX - startX;
    y = e.touches[0].clientY - startY;
    updateTransform();
});
whiteBoard.addEventListener("touchend", () => {
    isDragging = false;
  });
  
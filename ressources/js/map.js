let isDragging = false;
let startX, startY;


document.addEventListener('DOMContentLoaded', () => {
    const whiteBoard = document.getElementById("white-board");
    let x = -2500 + window.innerWidth / 2;
    let y = -2500 + window.innerHeight / 2;

    let count = 0;
    while (count < 30) {
        const div = document.createElement('div');
        div.className = `mapview__item`;

        const img = document.createElement('img');
        img.src = `/ressources/poisson1`;
        img.alt = `poisson`;
        img.className = `clickable`;
        img.width = `30`
        img.style.margin = '5px';

        div.appendChild(img);
        whiteBoard.appendChild(div);
        count++;
    }

    const mapItems = document.querySelectorAll('.mapview__item');
    mapItems.forEach(item => {
        const img = item.querySelector("img");
        if (img.classList.contains("clickable")) {
            img.addEventListener('click', () => {
                const url = img.getAttribute('data-url');
                if (url) {
                    window.location.href = url;
                }
            });
        }

        item.style.top = Math.random() * 80 + '%';
        item.style.left = Math.random() * 80 + '%';
    });

    function updatePosition() {
        // gsap.to(whiteBoard, {
        //     x: x,
        //     y: y,
        //     duration: 0.2,
        //     ease: "power2.out",
        // });
        whiteBoard.style.top = y + "px";
        whiteBoard.style.left = x + "px";
    }

    whiteBoard.addEventListener("mousedown", (element) => {
        console.log("click");
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

    whiteBoard.addEventListener("mouseleave", () => {
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
        updatePosition();
    });
    whiteBoard.addEventListener("touchend", () => {
        isDragging = false;
    });

    updatePosition();
});


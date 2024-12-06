let isDragging = false;
let startX, startY;


document.addEventListener('DOMContentLoaded', () => {
    const whiteBoard = document.getElementById("white-board");
    let x = -2500 + window.innerWidth / 2;
    let y = -2500 + window.innerHeight / 2;

    let count = 0;
    while (count < 300) {
        const div = document.createElement('div');
        div.className = `mapview__item`;

        const img = document.createElement('img');
        img.src = `/ressources/images/fish.png`;
        img.alt = `poisson`;
        img.className = `clickable`;
        img.width = `30`

        let rotation = Math.random() * 200 ; 
        img.rotate
        img.style.margin = '5px';
        img.style.transform = `rotate(${rotation}deg)`;

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
        const maxY = 200;
        console.log(y); 
        if (y > maxY) {
            console.log("Rollback triggered");
    
            // Définir la position cible pour le rollback
            const rollbackY = maxY;
    
            // Utiliser une animation (par exemple, GSAP ou CSS transitions) pour ramener à rollbackY
            gsap.to(whiteBoard, {
                top: `${rollbackY}px`,
                duration: 0.5, // Durée de l'animation en secondes
                ease: "power2.out",
                onUpdate: () => {
                    // Mettre à jour la valeur `y` pour suivre l'animation
                    const computedStyle = window.getComputedStyle(whiteBoard);
                    y = parseFloat(computedStyle.top);
                }
            });
        }
        if (y < - 4500){
            console.log("Rollback triggered");
    
            // Définir la position cible pour le rollback
            const rollbackY = -4500;
    
            // Utiliser une animation (par exemple, GSAP ou CSS transitions) pour ramener à rollbackY
            gsap.to(whiteBoard, {
                top: `${rollbackY}px`,
                duration: 0.5, // Durée de l'animation en secondes
                ease: "power2.out",
                onUpdate: () => {
                    // Mettre à jour la valeur `y` pour suivre l'animation
                    const computedStyle = window.getComputedStyle(whiteBoard);
                    y = parseFloat(computedStyle.top);
                }
            });

        }








        if (x < -3300) {
            console.log("Rollback triggered");
    
            // Définir la position cible pour le rollback
            const rollbackX = -3300;
    
            // Utiliser une animation (par exemple, GSAP ou CSS transitions) pour ramener à rollbackY
            gsap.to(whiteBoard, {
                left: `${rollbackX}px`,
                duration: 0.5, // Durée de l'animation en secondes
                ease: "power2.out",
                onUpdate: () => {
                    // Mettre à jour la valeur `y` pour suivre l'animation
                    const computedStyle = window.getComputedStyle(whiteBoard);
                    x = parseFloat(computedStyle.left);
                }
            });
        }
        console.log(x)
        if (x > 300) {
            console.log("Rollback triggered");
    
            // Définir la position cible pour le rollback
            const rollbackX = 300;
    
            // Utiliser une animation (par exemple, GSAP ou CSS transitions) pour ramener à rollbackY
            gsap.to(whiteBoard, {
                left: `${rollbackX}px`,
                duration: 0.5, // Durée de l'animation en secondes
                ease: "power2.out",
                onUpdate: () => {
                    // Mettre à jour la valeur `y` pour suivre l'animation
                    const computedStyle = window.getComputedStyle(whiteBoard);
                    x = parseFloat(computedStyle.left);
                }
            });
        }
        
        
        
        else {
            // Mettre à jour la position sans rollback
            whiteBoard.style.top = y + "px";
            whiteBoard.style.left = x + "px";
        }
        
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


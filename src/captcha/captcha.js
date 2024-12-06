function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener('DOMContentLoaded', () => {
    const plonge = document.getElementById("divPlongerCaptcha");
    const winArea = document.getElementById("divWinCaptcha");
    const player = document.getElementById("player");

    // Initialisation de la hauteur de divPlongerCaptcha
    plonge.style.height = (80 + getRandomInt(20)) + "%";

    // Initialisation de la position du player
    const element1Y = plonge.getBoundingClientRect().top;
    player.style.top = `${element1Y + 50}px`;  // Ajustez cette valeur pour positionner le player

    let isDragging = false;

    // Gestion du début du drag
    document.body.addEventListener("mousedown", () => {
        isDragging = true;  // Démarre le déplacement
    });

    // Gestion de la fin du drag
    document.body.addEventListener("mouseup", () => {
        if(winArea.getBoundingClientRect().top<=player.getBoundingClientRect().top
    && winArea.getBoundingClientRect().top + winArea.getBoundingClientRect().height>=
        player.getBoundingClientRect().top + player.getBoundingClientRect().height){
            window.location.href = "/src/map/map.html";
        }
        window.location.href = "/";
    });

    // Fonction qui sera exécutée en boucle
    function movePlayerLoop() {
        if (isDragging) {
            // Déplace le player
            player.style.top = parseInt(player.style.top) + getRandomInt(3) + 1 + "px";
        }
    }

    // Démarre la boucle toutes les 100ms
    const intervalId = setInterval(movePlayerLoop, (0.25 * Math.random() * 0.5) * 1000);

    // Pour arrêter l'intervalle (optionnel)
    // clearInterval(intervalId);
});
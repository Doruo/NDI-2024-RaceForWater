function chute() {
    const liste = document.getElementsByClassName("cache");
    for (let j = 0; j < liste.length; j++) {
        liste[j].classList.add("visible");
        liste[j].classList.remove("cache");
    }

    //const a = document.getElementById("zone-click")
}


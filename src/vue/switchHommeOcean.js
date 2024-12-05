let etat = "ocean";

//alterne l'etat entre ocean et humain
function alternerEtat(){
    let curEtat = etat === "ocean" ? "humain" : "ocean";
    
    // change le nom sur le bouton
    let switchButton = document.getElementById("buttonSwitchEtatHommeOcean");
    switchButton.textContent = etat;
    etat = curEtat;
    console.log("une page "+getEtat()+" est affiché");
}

function getEtat(){
    return etat;
}


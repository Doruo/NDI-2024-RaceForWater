//alterne l'etat entre ocean et humain
function alternerEtat(){
    let fichier = recupOrgane();
    let lieu = fichier[0];
    let organe = fichier[1];
    
    // on doit rediriger vers etat
    let etat = lieu === "ocean" ? "homme" : "ocean";
    
    let fichierToCall = etat+"_"+organe;
    window.location.href = `/src/vue/${fichierToCall}.html`;
    //window.location.href = 'ocean_coeur.html';
}

function recupOrgane(){
    // Obtenir le chemin de l'URL
    const path = window.location.pathname;

    // Extraire le nom du fichier
    let fileName = path.substring(path.lastIndexOf('/') + 1);
    fileName = fileName.split('.')[0];
    fileName = fileName.split('_');
    return fileName;
}



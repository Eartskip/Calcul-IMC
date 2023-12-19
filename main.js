function calculateIMC() {
    var tailleInput = document.getElementById("taille");
    var poidsInput = document.getElementById("poids");
    var resultDiv = document.getElementById("result");

    var taille = parseFloat(tailleInput.value);
    var poids = parseFloat(poidsInput.value);

    // Vérification des données saisies
    if (isNaN(taille) || isNaN(poids) || taille <= 0 || poids <= 0 || taille > 250 || poids > 200) {
        resultDiv.innerHTML = "Veuillez saisir des données valides.";
        return;
    }

    // Calcul de l'IMC
    var imc = poids / Math.pow((taille / 100), 2);
    imc = imc.toFixed(2);

    // Affichage du résultat
    resultDiv.innerHTML = "Votre IMC est " + imc + ". ";
    if (imc < 18.5) {
        resultDiv.innerHTML += "Vous êtes en sous-poids.";
    } else if (imc >= 18.5 && imc < 25) {
        resultDiv.innerHTML += "Votre poids est normal.";
    } else if (imc >= 25 && imc < 30) {
        resultDiv.innerHTML += "Vous êtes en surpoids.";
    } else {
        resultDiv.innerHTML += "Vous êtes en obésité.";
    }
}

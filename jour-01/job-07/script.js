// Fonction qui devra retourner l’entier le plus proche de zéro selon un tableau envoyé en paramètre.

function myNearZero(array) {
    let closest = array[0]; // Prend le premier élément comme le plus proche par défaut

    for (let i = 1; i < array.length; i++) {
        // Si la valeur absolue de l'élément actuel est inférieure à celle du plus proche
        if (absValue(array[i]) < absValue(closest)) {
            closest = array[i];
        } else if (absValue(array[i]) === absValue(closest) && array[i] > 0) {
            // Si deux nombres ont la même distance par rapport à zéro, choisissez le positif
            closest = array[i];
        }
    }

    return closest;
}

// Fonction pour trouver la valeur absolue sans utiliser Math.abs()
function absValue(num) {
    if (num < 0) {
        return -num;
    }
    return num;
}

// Test de la fonction
const testArray = [-10, -5, 3, 2, 8, -1];
const nearestToZero = myNearZero(testArray);
document.getElementById("output").innerText = `Le nombre le plus proche de zéro dans le tableau ${testArray.join(", ")} est : ${nearestToZero}`;

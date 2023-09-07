// Fonction qui devra retourner l’entier le plus proche de zéro selon un tableau envoyé en paramètre.

function mySquareArray(array) {
    // Utilise la méthode map pour élever chaque élément du tableau au carré
    return array.map(function(num) {
        return num * num;
    });
}

// Test de la fonction
const testArray = [1, 2, 3, 4, 5];
const squaredArray = mySquareArray(testArray);
document.getElementById("output").innerText = `Les nombres au carré pour le tableau ${testArray.join(", ")} sont : ${squaredArray.join(", ")}`;
// Fonction qui devra faire la somme des éléments dans un tableau et retourner cette somme.

function myArraySum(array) {
    let sum = 0; // Initialisation de la variable sum pour stocker la somme

    // Boucle pour parcourir chaque élément du tableau
    for (let i = 0; i < array.length; i++) {
        sum += array[i]; // Ajoute la valeur de l'élément courant à sum
    }

    return sum; // Retourne la somme
}

// Test de la fonction
const testArray = [1, 2, 3, 4, 5];
const result = myArraySum(testArray);
document.getElementById("output").innerText = `La somme des éléments du tableau est : ${result}`;
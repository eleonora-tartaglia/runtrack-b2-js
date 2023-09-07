// Fonction qui devra trier un tableau dans l’ordre croissant ou décroissant en fonction d’un paramètre passé en entrée.
// Affichage just in console

function myArraySort(array, sorting) {
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if ((sorting === "ASC" && array[i] > array[i + 1]) || 
                (sorting === "DESC" && array[i] < array[i + 1])) {
                // échange les éléments
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;

                swapped = true;
            }
        }
    } while (swapped);

    return array;
}

// Test de la fonction
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array:", testArray);
console.log("Sorted ASC:", myArraySort([...testArray], "ASC"));
console.log("Sorted DESC:", myArraySort([...testArray], "DESC"));



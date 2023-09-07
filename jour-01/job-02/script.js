// Fonction qui devra compter le nombre d’occurrences d’un caractère dans une chaîne de caractère donnée 
// et retourner ce nombre.

function myCountChar(haystack, needle) {
    let count = 0;
    
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            count++;
        }
    }
    
    return count;
}

// Test de la fonction
const testString = "Je m'arrache les cheveux !!!";
const testChar = "a";
const result = myCountChar(testString, testChar);
document.getElementById("output").innerText = `Le caractère '${testChar}' apparaît ${result} fois dans la chaîne : "Je m'arrache les cheveux !!!" `;
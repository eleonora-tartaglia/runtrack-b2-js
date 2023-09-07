// Fonction qui devra déterminer si une chaîne de caractère se trouve dans une autre en retournant un booléen.

function myIsInString(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let match = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return true;
        }
    }
    return false;
}

// Test de la fonction
const stringHaystack = "Bonjour, comment ça va ?";
const stringNeedle = "comment";
const result = myIsInString(stringHaystack, stringNeedle);
document.getElementById("output").innerText = result ? `La chaîne '${stringNeedle}' est présente.` : `La chaîne '${stringNeedle}' n'est pas présente.`;

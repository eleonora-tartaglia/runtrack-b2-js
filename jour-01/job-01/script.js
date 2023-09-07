// Fonction qui devra passer une chaine de caractères en majuscule.

function myUpperCase(string) {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    let result = '';

    for (let i = 0; i < string.length; i++) {
        let found = false;
        for (let j = 0; j < lowerCase.length; j++) {
            if (string[i] === lowerCase[j]) {
                result += upperCase[j];
                found = true;
                break;
            }
        }
        if (!found) {
            result += string[i];
        }
    }
    
    return result;
}

// Test de la fonction
const testString = "Je suis en retard, toujours en retard..!";
document.getElementById("output").innerText = myUpperCase(testString);

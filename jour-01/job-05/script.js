// Fonction qui devra retourner l’ensemble des nombres premiers jusqu’à un nombre donné.

function isPrime(number) {
    if (number <= 1) return false; // 0 et 1 ne sont pas des nombres premiers
    if (number <= 3) return true; // 2 et 3 sont des nombres premiers

    // Vérifie la divisibilité par 2 et 3
    if (number % 2 === 0 || number % 3 === 0) return false;

    // Vérifie la divisibilité par tous les nombres jusqu'à la racine carrée du nombre
    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function myPrimeList(limit) {
    const primes = []; // Tableau pour stocker les nombres premiers

    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) { // Si le nombre est premier
            primes.push(i); // Ajoute le nombre au tableau primes
        }
    }

    return primes; // Retourne le tableau de nombres premiers
}

// Test de la fonction
const limit = 50; // Par exemple, chercher les nombres premiers jusqu'à 50
const primes = myPrimeList(limit);
document.getElementById("output").innerText = `Les nombres premiers jusqu'à ${limit} sont : ${primes.join(", ")}`;
// Message toutes les 30 secondes
setInterval(function () {
    alert("Please, use me ...");
}, 30000);

function calculer() {
    let gauche = document.getElementById("gauche").value.trim();
    let droite = document.getElementById("droite").value.trim();
    let operateur = document.getElementById("operateur").value;

    // Vérification que ce sont bien des entiers positifs
    if (!/^\d+$/.test(gauche) || !/^\d+$/.test(droite)) {
        alert("Error :(");
        console.log("Error :(");
        return;
    }

    let a = parseInt(gauche, 10);
    let b = parseInt(droite, 10);
    let resultat;

    // Cas division ou modulo par zéro
    if ((operateur === "/" || operateur === "%") && b === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    // Calcul
    switch (operateur) {
        case '+':
            resultat = a + b;
            break;
        case '-':
            resultat = a - b;
            break;
        case '*':
            resultat = a * b;
            break;
        case '/':
            resultat = a / b;
            break;
        case '%':
            resultat = a % b;
            break;
        default:
            alert("Error :(");
            console.log("Error :(");
            return;
    }

    alert(resultat);
    console.log(resultat);
}

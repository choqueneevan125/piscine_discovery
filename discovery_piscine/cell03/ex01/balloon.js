const ballon = document.getElementById('ballon');
const couleur = ['red', 'rgb(60, 179, 113)', 'blue'];
let couleurIndex = 0;
let taille = 200;
ballon.style.backgroundColor = couleur[couleurIndex];

ballon.addEventListener('click', () => {
    taille += 10;
    ballon.style.width = `${taille}px`;
    ballon.style.height = `${taille}px`;

    couleurIndex = (couleurIndex + 1) % couleur.length;
    ballon.style.backgroundColor = couleur[couleurIndex];

    if(taille >= 420) {
        taille = 200;
    }
});

ballon.addEventListener('mouseleave', () => {
    taille = Math.max(200, taille - 5);
    ballon.style.width = `${taille}px`;
    ballon.style.height = `${taille}px`;

    if(taille != 200) {
        couleurIndex = (couleurIndex - 1 + couleur.length) % couleur.length;
        ballon.style.backgroundColor = couleur[couleurIndex];
    }
});
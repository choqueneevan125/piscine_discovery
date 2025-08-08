$(document).ready(function() {
    const $ballon = $('#ballon');
    const couleur = ['red', 'rgb(60, 179, 113)', 'blue'];
    let couleurIndex = 0;
    let taille = 200;

    // Initialisation couleur et taille
    $ballon.css({
        'background-color': couleur[couleurIndex],
        'width': taille + 'px',
        'height': taille + 'px'
    });

    // Au clic, agrandir et changer couleur
    $ballon.on('click', function() {
        taille += 10;
        $ballon.css({
            'width': taille + 'px',
            'height': taille + 'px'
        });

        couleurIndex = (couleurIndex + 1) % couleur.length;
        $ballon.css('background-color', couleur[couleurIndex]);

        if (taille >= 420) {
            taille = 200;
        }
    });

    // Au mouseleave, réduire taille et changer couleur si besoin
    $ballon.on('mouseleave', function() {
        taille = Math.max(200, taille - 5);
        $ballon.css({
            'width': taille + 'px',
            'height': taille + 'px'
        });

        if (taille != 200) {
            couleurIndex = (couleurIndex - 1 + couleur.length) % couleur.length;
            $ballon.css('background-color', couleur[couleurIndex]);
        }
    });
});

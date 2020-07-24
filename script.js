var empire = "empire"
var rebel = "rebel"
var activeplayer = empire
var counter = 0



$('div').click(function () {
    if ($(this).html() === "") {
        counter++
        $('#counterturns').html(counter)
        if (activeplayer === empire) {
            $(this).html(`<img src="empire.svg" alt="X">`);
            $('#queljoueur').html(`<img src="rebel.svg" alt="O">`);
            activeplayer = rebel;
            $('#erreur').html(``);
        }
        else {
            $(this).html(`<img src="rebel.svg" alt="O">`);
            $('#queljoueur').html(`<img src="empire.svg" alt="X">`);
            activeplayer = empire;
            $('#erreur').html(``);
        }
    } else { $('#erreur').html(`La case est déjà occupée!`) }
})


$('button').click(function () {
    $('div').html(``);
    $('#draw').html(``)
    counter = 0
    $('#counterturns').html(counter)
})

if (counter === 9) {

}
else { $('#draw').html(`Egalité!`) }





/* Algo du morpion en pseudo code

VARIABLES
joueur1, joueur2, joueurActif, compteur



DEBUT ALGO
A l'evenement clic sur une case
    SI le contenu de la case est vide
    ALORS
        SI le joueur actif est joueur 1
        ALORS
            dans la case, on affiche X
            Le joueur actif devient le joueur 2
        SINON
            dans la case, on affiche O
            Le joueur actif devient le joueur 1
        FIN SI
    SINON
        Afficher message d'erreur
    FIN SI
    SI compteur == 9
    ALORS
        //TOUT tester
        SINON AFFICHER match nul
    SINON SI compteur >= 5
    ALORS  //On teste la victoire
        SI case1 == case2 ET case2 == case3 ET case1 == X
        ALORS
            AFFICHER joueur 1 a gagné
        SINON SI case1 == case2 ET case2 == case3 et case1 == O
        ALORS
            AFFICHER joueur 2 a gagné



        etc.
        FIN SI
    FIN SI



FIN ALGO

horizontal
    IF
        top-left,
        top-middle
        top-right
        = rebel

    THEN  rebel win

    IF
        ML
        MM
        MR
        = rebel

    THEN rebel win

    IF
        BL
        BM
        BR
        =rebel

    THEN rebel win

vertical
    IF
        TL
        ML
        BL
        = rebel

    THEN rebel win

    IF
        TM
        MM
        BM
        = rebel

    THEN rebel win

    IF
        TR
        MR
        BR
        = rebel

    THEN rebel win

diagonal
    IF
        TL
        MM
        BR
        = rebel

    THEN rebel win

    IF
        TR
        MM
        BL
        = rebel

    THEN rebel win */
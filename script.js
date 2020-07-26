var empire = "empire"
var rebel = "rebel"
var activeplayer = empire
var counter = 0
var countergame = 0




$('div').click(function () {
    if ($(this).html() === "") {
        counter++
        $('#counterturns').html(counter)
        if (activeplayer === empire) {
            $(this).html(`<img src="empire.svg" alt="X">`);
            $('#queljoueur').html(`<img src="rebel.svg" alt="O">`);
            activeplayer = rebel;
            $('#error').html(``);
        }
        else {
            $(this).html(`<img src="rebel.svg" alt="O">`);
            $('#queljoueur').html(`<img src="empire.svg" alt="X">`);
            activeplayer = empire;
            $('#error').html(``);
        }
    } else { $('#error').html(`La case est déjà occupée!`) }

    if (counter >= 5) {
        /* haut horizontal */
        if ($('#top-left').html() == $('#top-middle').html() && $('#top-middle').html() == $('#top-right').html() && $('#top-left').html() != '') {
            $("#ENDGAME").css("display", "block");
            if (activeplayer === rebel) $('#empireWin').html(`The Empire strikes back!`)
            else if (activeplayer === empire) $('#rebelWin').html(`The Rebellion won!`)
        }
        /* milieu horizontal */
        if ($('#middle-left').html() == $('#middle-middle').html() && $('#middle-middle').html() == $('#middle-right').html() && $('#middle-left').html() != '') {
            $("#ENDGAME").css("display", "block");
            if (activeplayer === rebel) $('#empireWin').html(`The Empire strikes back!`)
            else if (activeplayer === empire) $('#rebelWin').html(`The Rebellion won!`)
        }
        /* bas horizontal */
        if ($('#bottom-left').html() == $('#bottom-middle').html() && $('#bottom-middle').html() == $('#bottom-right').html() && $('#bottom-left').html() != '') {
            $("#ENDGAME").css("display", "block");
            if (activeplayer === rebel) $('#empireWin').html(`The Empire strikes back!`)
            else if (activeplayer === empire) $('#rebelWin').html(`The Rebellion won!`)
        }
        /* gauche vertical */
        if ($('#top-left').html() == $('#middle-left').html() && $('#middle-left').html() == $('#bottom-left').html() && $('#top-left').html() != '') {
            $("#ENDGAME").css("display", "block");
            if (activeplayer === rebel) $('#empireWin').html(`The Empire strikes back!`)
            else if (activeplayer === empire) $('#rebelWin').html(`The Rebellion won!`)
        }
        /* milieu vertical */
        if ($('#top-middle').html() == $('#middle-middle').html() && $('#middle-middle').html() == $('#bottom-middle').html() && $('#top-middle').html() != '') {
            $("#ENDGAME").css("display", "block");
            if (activeplayer === rebel) $('#empireWin').html(`The Empire strikes back!`)
            else if (activeplayer === empire) $('#rebelWin').html(`The Rebellion won!`)
        }
        /* droite vertical */
        if ($('#top-right').html() == $('#middle-right').html() && $('#middle-right').html() == $('#bottom-right').html() && $('#top-right').html() != '') {
            $("#ENDGAME").css("display", "block");
            if (activeplayer === rebel) $('#empireWin').html(`The Empire strikes back!`)
            else if (activeplayer === empire) $('#rebelWin').html(`The Rebellion won!`)
        }
        /* diagonal 1 */
        if ($('#top-left').html() == $('#middle-middle').html() && $('#middle-middle').html() == $('#bottom-right').html() && $('#top-left').html() != '') {
            $("#ENDGAME").css("display", "block");
            if (activeplayer === rebel) $('#empireWin').html(`The Empire strikes back!`)
            else if (activeplayer === empire) $('#rebelWin').html(`The Rebellion won!`)
        }
        /* diagonal 2 */
        if ($('#top-right').html() == $('#middle-middle').html() && $('#middle-middle').html() == $('#bottom-left').html() && $('#top-right').html() != '') {
            $("#ENDGAME").css("display", "block");
            if (activeplayer === rebel) $('#empireWin').html(`The Empire strikes back!`)
            else if (activeplayer === empire) $('#rebelWin').html(`The Rebellion won!`)
        }
        if (counter === 9) { $('#draw').html(`Egalité!`) }
    }
}
)





$('#restart').click(function () {
    $("#ENDGAME").css("display", "none");
    $('div').html(``);
    $('#draw').html(``);
    $('#error').html(``);
    $('#empireWin').html(``);
    $('#rebelWin').html(``);
    counter = 0;
    $('#counterturns').html(counter);
    countergame += 1;
    $('#countergame').html(countergame);
})

$('#reset').click(function () {
    $("#ENDGAME").css("display", "none");
    $('div').html(``);
    $('#draw').html(``);
    $('#error').html(``);
    $('#empireWin').html(``);
    $('#rebelWin').html(``);
    counter = 0;
    $('#counterturns').html(counter);
    countergame = 0;
    $('#countergame').html(countergame);
})







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
        Afficher message d'error
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
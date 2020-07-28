var empire = "empire"
var rebel = "rebel"
var activeplayer = empire
var counter = 0
var countergame = 0
var empirecount = 0 //pour plus tard, pas encore fonctionnel
var rebelcount = 0 //pour plus tard, pas encore fonctionnel

/* AJOUTER COMPTEUR VICTOIRE PAR EQUIPE! */


$('div').click(function () { // permettre click sur cases
    if ($(this).html() === "") { // si case est vide alors...
        counter++ // au clic augmenter compte de coups joués
        $('#counterturns').html(counter) //afficher le compte sur html
        if (activeplayer === empire) {// si au tour de l'empire ...
            $(this).html(`<img src="empire.svg" alt="X">`); // ...alors mettre icone empire dans case au click
            $('#queljoueur').html(`<img src="rebel.svg" alt="O">`); // indiquer au jouer qui doit jouer ensuite
            activeplayer = rebel; //changer joueur actif apres click
            $('#error').html(``); // supprimer derreur au click sur nouvelle case si une erreur a eu lieu au tour precedent
        }
        else {
            $(this).html(`<img src="rebel.svg" alt="O">`); // sinon remplir avec icone rebelle
            $('#queljoueur').html(`<img src="empire.svg" alt="X">`); // indiquer au jouer qui doit jouer ensuite
            activeplayer = empire; //changer joueur actif apres click
            $('#error').html(``);// supprimer erreur au click si une erreur a eu lieu au tour precedent
        }
    } else { $('#error').html(`La case est déjà occupée!`) } //si case deja occupée alors afficher message derreur

    if (counter >= 5) { // 5 etant le nombre de coups minimum pour gagner, verifier conditions de victoire au 5 tour et chaque coup suivant
        /* haut horizontal */
        if ($('#top-left').html() == $('#top-middle').html() && $('#top-middle').html() == $('#top-right').html() && $('#top-left').html() != '') { //condition victoire
            $("#ENDGAME").css("display", "block"); //si victoire alors afficher carré transparent par dessus afin de bloquer le click et forcer l'arret du jeu
            if (activeplayer === rebel) $('#empireWin').html(`The Empire strikes back!`) // si le nouveau joueur actif apres la victoire est rebelle alors afficher victoire pour empire
            else if (activeplayer === empire) $('#rebelWin').html(`The Rebellion won!`) // si le nouveau joueur actif apres la victoire est empire alors afficher victoire pour rebelle
        }
        /* milieu horizontal */
        else if ($('#middle-left').html() == $('#middle-middle').html() && $('#middle-middle').html() == $('#middle-right').html() && $('#middle-left').html() != '') {
            $("#ENDGAME").css("display", "block");
            if (activeplayer === rebel) $('#empireWin').html(`The Empire strikes back!`)
            else if (activeplayer === empire) $('#rebelWin').html(`The Rebellion won!`)
        }
        /* bas horizontal */
        else if ($('#bottom-left').html() == $('#bottom-middle').html() && $('#bottom-middle').html() == $('#bottom-right').html() && $('#bottom-left').html() != '') {
            $("#ENDGAME").css("display", "block");
            if (activeplayer === rebel) $('#empireWin').html(`The Empire strikes back!`)
            else if (activeplayer === empire) $('#rebelWin').html(`The Rebellion won!`)
        }
        /* gauche vertical */
        else if ($('#top-left').html() == $('#middle-left').html() && $('#middle-left').html() == $('#bottom-left').html() && $('#top-left').html() != '') {
            $("#ENDGAME").css("display", "block");
            if (activeplayer === rebel) $('#empireWin').html(`The Empire strikes back!`)
            else if (activeplayer === empire) $('#rebelWin').html(`The Rebellion won!`)
        }
        /* milieu vertical */
        else if ($('#top-middle').html() == $('#middle-middle').html() && $('#middle-middle').html() == $('#bottom-middle').html() && $('#top-middle').html() != '') {
            $("#ENDGAME").css("display", "block");
            if (activeplayer === rebel) $('#empireWin').html(`The Empire strikes back!`)
            else if (activeplayer === empire) $('#rebelWin').html(`The Rebellion won!`)
        }
        /* droite vertical */
        else if ($('#top-right').html() == $('#middle-right').html() && $('#middle-right').html() == $('#bottom-right').html() && $('#top-right').html() != '') {
            $("#ENDGAME").css("display", "block");
            if (activeplayer === rebel) $('#empireWin').html(`The Empire strikes back!`)
            else if (activeplayer === empire) $('#rebelWin').html(`The Rebellion won!`)
        }
        /* diagonal \ */
        else if ($('#top-left').html() == $('#middle-middle').html() && $('#middle-middle').html() == $('#bottom-right').html() && $('#top-left').html() != '') {
            $("#ENDGAME").css("display", "block");
            if (activeplayer === rebel) $('#empireWin').html(`The Empire strikes back!`)
            else if (activeplayer === empire) $('#rebelWin').html(`The Rebellion won!`)
        }
        /* diagonal / */
        else if ($('#top-right').html() == $('#middle-middle').html() && $('#middle-middle').html() == $('#bottom-left').html() && $('#top-right').html() != '') {
            $("#ENDGAME").css("display", "block");
            if (activeplayer === rebel) $('#empireWin').html(`The Empire strikes back!`)
            else if (activeplayer === empire) $('#rebelWin').html(`The Rebellion won!`)
        }
        else if (counter === 9) { $('#draw').html(`Egalité!`) } // si aucune condition de victoire respectée alors afficher Egalité
    }
}
)





$('#restart').click(function () { // si click sur bouton recommencer alors...
    $("#ENDGAME").css("display", "none"); //enlever le carré transparent qui bloque le jeu
    $('div').html(``); // vider les cases
    $('#draw').html(``); // vider message egalité
    $('#error').html(``); // vider message erreur
    $('#empireWin').html(``); // vider message victoire empire
    $('#rebelWin').html(``); // vider message victoire rebelle
    counter = 0; // remettre compteur de tours à 0
    $('#counterturns').html(counter); // afficher le compteur sur html
    countergame += 1; // ajouter 1 au compteur de jeu joués
    $('#countergame').html(countergame); // afficher compteur jeux joués sur html
})

$('#reset').click(function () { // si click sur bouton reset alors...
    $("#ENDGAME").css("display", "none");
    $('div').html(``);
    $('#draw').html(``);
    $('#error').html(``);
    $('#empireWin').html(``);
    $('#rebelWin').html(``);
    counter = 0;
    $('#counterturns').html(counter);
    countergame = 0;// remettre compteur de jeux à 0
    $('#countergame').html(countergame);
})





/* les commentaires suivants sont mon brouillon en pseudo code */

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
/*
=========================================
GALAXY NOVA
GAME.JS
=========================================
*/

"use strict";

// Joueur
let player = null;

// Démarrage
document.getElementById("playBtn").addEventListener("click", () => {

    document.getElementById("mainMenu").classList.add("hidden");
    document.getElementById("hud").classList.remove("hidden");

    startNewGame();

});

// Nouvelle partie
function startNewGame() {

    player = new Player();

    GAME.level = 1;
    GAME.score = 0;
    GAME.coins = CONFIG.START_COINS;
    GAME.lives = CONFIG.START_LIVES;

    // Réinitialisation
    enemies.length = 0;
    bullets.length = 0;
    effects.length = 0;

    startGame();

}

// Mise à jour
function updateGame(delta) {

    if (player) {
        player.update(delta);
    }

    // Mise à jour des ennemis
    updateEnemies(delta);

}

// Affichage
function renderGame() {

    // Joueur
    if (player) {
        player.draw();
    }

    // Ennemis
    drawEnemies();

}
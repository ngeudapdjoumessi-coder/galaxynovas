/*
=========================================
GALAXY NOVA ENGINE v1.0
Auteur : Galaxy Nova Project
=========================================
*/

"use strict";

// Canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Taille de l'écran
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Configuration
const CONFIG = {
    FPS: 60,
    START_COINS: 50,
    START_LIVES: 3,
    PLAYER_SPEED: 7,
    BULLET_SPEED: 12,
    ENEMY_SPEED: 2,
    STAR_COUNT: 180
};

// État du jeu
const GAME = {
    running: false,
    paused: false,
    level: 1,
    score: 0,
    coins: CONFIG.START_COINS,
    lives: CONFIG.START_LIVES,
    lastFrame: 0
};

// Collections
const stars = [];
const bullets = [];
const enemies = [];
const effects = [];// Création du fond étoilé

function createStars() {

    stars.length = 0;

    for (let i = 0; i < CONFIG.STAR_COUNT; i++) {

        stars.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height,

            radius: Math.random() * 2 + 1,

            speed: Math.random() * 3 + 1

        });

    }

}

createStars();

function updateStars() {

    for (const star of stars) {

        star.y += star.speed;

        if (star.y > canvas.height) {

            star.y = 0;

            star.x = Math.random() * canvas.width;

        }

    }

}

function drawStars() {

    ctx.fillStyle = "white";

    for (const star of stars) {

        ctx.beginPath();

        ctx.arc(

            star.x,

            star.y,

            star.radius,

            0,

            Math.PI * 2

        );

        ctx.fill();

    }

}// Nettoyage

function clearScreen() {

    ctx.fillStyle = "#000814";

    ctx.fillRect(

        0,

        0,

        canvas.width,

        canvas.height

    );

}

// Boucle principale

function loop(timestamp) {

    if (!GAME.running)
        return;

    const delta = timestamp - GAME.lastFrame;

    GAME.lastFrame = timestamp;

    clearScreen();

    updateStars();

    drawStars();

    if (typeof updateGame === "function")
        updateGame(delta);

    if (typeof renderGame === "function")
        renderGame();

    requestAnimationFrame(loop);

}

function startGame() {

    GAME.running = true;

    GAME.lastFrame = performance.now();

    requestAnimationFrame(loop);

}

function stopGame() {

    GAME.running = false;

}

console.log("Galaxy Nova Engine chargé.");
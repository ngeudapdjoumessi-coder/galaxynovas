/*
=========================================
GALAXY NOVA
CONTROLS.JS
=========================================
*/

"use strict";

const Keys = {};

// Clavier
window.addEventListener("keydown", (e) => {
    Keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
    Keys[e.key] = false;
});

// État tactile
const Touch = {
    x: 0,
    y: 0,
    active: false
};

// Joystick
const joystick = document.getElementById("joystick");

if (joystick) {

    joystick.addEventListener("touchstart", (e) => {
        Touch.active = true;
    });

    joystick.addEventListener("touchmove", (e) => {

        const touch = e.touches[0];

        Touch.x = touch.clientX;

        Touch.y = touch.clientY;

    });

    joystick.addEventListener("touchend", () => {

        Touch.active = false;

    });

}
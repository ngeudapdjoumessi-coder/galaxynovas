/*
=========================================
GALAXY NOVA
PLAYER.JS
=========================================
*/

"use strict";

class Player {

    constructor(){

        this.width = 64;
        this.height = 64;

        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - 140;

        this.speed = CONFIG.PLAYER_SPEED;

        this.color = "#00d4ff";

    }

    update(delta){

        // Déplacement clavier

        if(Keys["ArrowLeft"] || Keys["a"]){

            this.x -= this.speed;

        }

        if(Keys["ArrowRight"] || Keys["d"]){

            this.x += this.speed;

        }

        if(Keys["ArrowUp"] || Keys["w"]){

            this.y -= this.speed;

        }

        if(Keys["ArrowDown"] || Keys["s"]){

            this.y += this.speed;

        }

        // Empêcher de sortir de l'écran

        this.x = Math.max(
            0,
            Math.min(canvas.width - this.width, this.x)
        );

        this.y = Math.max(
            0,
            Math.min(canvas.height - this.height, this.y)
        );

    }

    draw(){

        ctx.fillStyle = this.color;

        ctx.beginPath();

        ctx.moveTo(this.x + this.width/2, this.y);

        ctx.lineTo(this.x, this.y + this.height);

        ctx.lineTo(this.x + this.width, this.y + this.height);

        ctx.closePath();

        ctx.fill();

    }

}/*
=========================================
GESTION DU CLAVIER
=========================================
*/

const Keys = {};

window.addEventListener("keydown",(e)=>{

    Keys[e.key]=true;

});

window.addEventListener("keyup",(e)=>{

    Keys[e.key]=false;

});
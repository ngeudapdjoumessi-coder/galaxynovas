/*
=========================================
GALAXY NOVA
ENEMY.JS
=========================================
*/

"use strict";

class Enemy{

    constructor(){

        this.width = 60;
        this.height = 60;

        this.x = Math.random() * (canvas.width - this.width);

        this.y = -this.height;

        this.speed = CONFIG.ENEMY_SPEED + Math.random()*2;

        this.life = 1;

        this.image = new Image();

        this.image.src = "assets/images/enemy1.png";

    }

    update(){

        this.y += this.speed;

    }

    draw(){

        if(this.image.complete){

            ctx.drawImage(
                this.image,
                this.x,
                this.y,
                this.width,
                this.height
            );

        }else{

            ctx.fillStyle = "#ff3333";

            ctx.fillRect(
                this.x,
                this.y,
                this.width,
                this.height
            );

        }

    }

}
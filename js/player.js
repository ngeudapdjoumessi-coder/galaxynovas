/*
=========================================
GALAXY NOVA
PLAYER.JS
=========================================
*/

"use strict";

class Player {

    constructor(){

        this.width = 80;
        this.height = 80;

        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height - 140;

        this.speed = CONFIG.PLAYER_SPEED;

        this.image = new Image();
        this.image.src = "assets/images/player.png";

    }

    update(){

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

        this.x = Math.max(0,Math.min(canvas.width-this.width,this.x));
        this.y = Math.max(0,Math.min(canvas.height-this.height,this.y));

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

            ctx.fillStyle="#00d4ff";
            ctx.fillRect(this.x,this.y,this.width,this.height);

        }

    }

}
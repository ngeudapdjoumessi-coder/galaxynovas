// Apparition des ennemis

let enemyTimer = 0;

function updateEnemies(delta){

    enemyTimer += delta;

    if(enemyTimer > 1200){

        enemies.push(new Enemy());

        enemyTimer = 0;

    }

    for(let i=enemies.length-1;i>=0;i--){

        enemies[i].update();

        // Ennemi sorti de l'écran

        if(enemies[i].y > canvas.height){

            enemies.splice(i,1);

            continue;

        }

        // Collision avec le joueur

        if(player){

            if(

                enemies[i].x < player.x + player.width &&
                enemies[i].x + enemies[i].width > player.x &&
                enemies[i].y < player.y + player.height &&
                enemies[i].y + enemies[i].height > player.y

            ){

                GAME.lives--;

                enemies.splice(i,1);

                if(GAME.lives <= 0){

                    stopGame();

                    alert("GAME OVER");

                }

            }

        }

    }

}/*
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
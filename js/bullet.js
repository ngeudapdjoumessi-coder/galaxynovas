/*
=========================================
GALAXY NOVA
BULLET.JS
=========================================
*/

"use strict";

class Bullet {

    constructor(x, y) {

        this.width = 10;
        this.height = 28;

        this.x = x;
        this.y = y;

        this.speed = CONFIG.BULLET_SPEED;

        this.damage = 1;

        this.image = new Image();
        this.image.src = "assets/images/bullet.png";

    }

    update() {

        this.y -= this.speed;

    }

    draw() {

        if (this.image.complete) {

            ctx.drawImage(
                this.image,
                this.x,
                this.y,
                this.width,
                this.height
            );

        } else {

            ctx.fillStyle = "#00ffff";

            ctx.fillRect(
                this.x,
                this.y,
                this.width,
                this.height
            );

        }

    }

}function updateBullets() {

    for (let i = bullets.length - 1; i >= 0; i--) {

        bullets[i].update();

        if (bullets[i].y < -40) {

            bullets.splice(i, 1);

            continue;

        }

        // Collision avec les ennemis

        for (let j = enemies.length - 1; j >= 0; j--) {

            const b = bullets[i];
            const e = enemies[j];

            if (

                b.x < e.x + e.width &&
                b.x + b.width > e.x &&
                b.y < e.y + e.height &&
                b.y + b.height > e.y

            ) {

                e.life -= b.damage;

                bullets.splice(i, 1);

                if (e.life <= 0) {

                    enemies.splice(j, 1);

                    // +1 pièce
                    GAME.coins++;

                    // +100 points
                    GAME.score += 100;

                }

                break;

            }

        }

    }

}

function drawBullets() {

    for (const bullet of bullets) {

        bullet.draw();

    }

}
function drawEnemies(){

    for(const enemy of enemies){

        enemy.draw();

    }

}// Apparition des ennemis

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

}function drawEnemies(){

    for(const enemy of enemies){

        enemy.draw();

    }

}
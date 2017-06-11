if (this.randomDir == "enemyMoveRight"){
//        console.log(this.randomDir);
        enemies[i][1] += enemies[i][1] + 1;
        /*if (enemies[i][1] == width - enemy_w){
          this.randomDir = "enemyMoveLeft";
        }*/
      } else if (this.randomDir == "enemyMoveLeft") {
        enemies[i][1] += enemies[i][1] - 1;
        /*if (enemies[i][1] == 0){
          this.randomDir = "enemyMoveRight";
        }*/
      } 


      if (this.randomDir == "enemyMoveRight"){
        enemies[i][1] += enemies[i][1] + 1;
      } else if (this.randomDir == "enemyMoveLeft") {
        enemies[i][1] += enemies[i][1] - 1;
      } 
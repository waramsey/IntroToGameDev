import Coordinates from "../../GameEngine/base/Coordinates.js";
import EnemyProjectile from "../prefabs/EnemyProjectile.js";
import Point from "../../GameEngine/base/Point.js";
import SceneManager from "../SceneManager.js";
import Time from "../../GameEngine/base/Time.js";


export default class BossBehavior {
  
    speedX = 5;
    speedY = .5;
    scaleChange = 0.2;
    fireDelay = 50; //lower fireDelay is better
    shootingCount = 0;

    start() {
        
    }

    update() {
        // ================================================
        // MOVEMENT - Would prefer the y velocity be a sin wave
        // ================================================
        
        this.gameObject.velocityX = this.speedX;
        //this.gameObject.velocityY = (this.scaleChange*Math.sin(Time.deltaTime) + 2)/2;
        this.gameObject.velocityY = this.speedY;

        if (this.gameObject.x > 500)
        {
            this.speedX = -5;
        }
        else if (this.gameObject.x < 150)
        {
            this.speedX = 5;
        }
        
        if (this.gameObject.y > 125)
        {
            //this.gameObject.velocityY = -(this.scaleChange*Math.sin(Time.deltaTime) + 2)/2;;
            this.speedY = -.5;
        }
        else if (this.gameObject.y < 105)
        {
            //this.gameObject.velocityY = (this.scaleChange*Math.sin(Time.deltaTime) + 2)/2;
            this.speedY = .5;
        }


        if (Coordinates.coords[1] > 50 && Coordinates.coords[1] < 125 && Coordinates.coords[0] > this.gameObject.x)
        {
            this.speedX = 20;
            this.speedY = 0;
        }
        if(Coordinates.coords[1] > 50 && Coordinates.coords[1] < 125 && Coordinates.coords[0] < this.gameObject.x)
        {
            this.speedX = -20;
            this.speedY = 0;
        }

        // =================================================
        // ATTACK
        // =================================================

        if (this.shootingCount % this.fireDelay == 0)
        {
            let shot = SceneManager.currentScene.instantiate(EnemyProjectile, new Point(this.gameObject.x, this.gameObject.y + 60), 0, "projectile", SceneManager.currentScene.children, SceneManager.currentScene.pX, SceneManager.currentScene.pY); 
            shot.velocityY = 8;
        }
        this.shootingCount++;


        if((Math.floor(Math.trunc(Time.deltaTime)) + 1)  % 10 == 0)
        {
            // probably wanna make a giant projectile blast rather than the enemy projectiles
            let wallBlast = SceneManager.currentScene.instantiate(EnemyProjectile, new Point(78, Coordinates.coords[1]-10), 0, "projectile", SceneManager.currentScene.children, SceneManager.currentScene.pX, SceneManager.currentScene.pY); 
            wallBlast.velocityX = 15;
        }


        // give it an occasional shield

        // give it an enrage (faster fire rate)







    }
}
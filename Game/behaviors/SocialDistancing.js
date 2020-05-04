import Coordinates from "../../GameEngine/base/Coordinates.js";
import SmallEnemyProjectile from "../prefabs/SmallEnemyProjectile.js";
import Point from "../../GameEngine/base/Point.js";
import SceneManager from "../SceneManager.js";

export default class SocialDistancing {

    enemySpeed;
    fireDelay = 25; //lower fireDelay is better
    shootingCount = 0;
    fireOffset = 30;
    
    start() {
        
    }

    update() {
        // if time, add bounds so that small objects dont wiggle when on axis


        // diagonals
        if (Coordinates.coords[0] > this.gameObject.x + 200 && Coordinates.coords[1] > this.gameObject.y)
        {
            this.gameObject.x += Math.sqrt((this.enemySpeed * this.enemySpeed) / 2);
            this.gameObject.y += Math.sqrt((this.enemySpeed * this.enemySpeed) / 2);
        }
        else if (Coordinates.coords[0] > this.gameObject.x + 200 && Coordinates.coords[1] < this.gameObject.y)
        {
            this.gameObject.x += Math.sqrt((this.enemySpeed * this.enemySpeed) / 2);
            this.gameObject.y -= Math.sqrt((this.enemySpeed * this.enemySpeed) / 2);
        }
        else if (Coordinates.coords[0] < this.gameObject.x + 200 && Coordinates.coords[1] > this.gameObject.y)
        {
            this.gameObject.x -= Math.sqrt((this.enemySpeed * this.enemySpeed) / 2);
            this.gameObject.y += Math.sqrt((this.enemySpeed * this.enemySpeed) / 2);
        }
        else if (Coordinates.coords[0] < this.gameObject.x + 200 && Coordinates.coords[1] < this.gameObject.y)
        {
            this.gameObject.x -= Math.sqrt((this.enemySpeed * this.enemySpeed) / 2);
            this.gameObject.y -= Math.sqrt((this.enemySpeed * this.enemySpeed) / 2);
        }
        
        
        // cardinals
        else if (Coordinates.coords[0] > this.gameObject.x + 200)
        {
            this.gameObject.x -= -this.enemySpeed;
        }
        else if (Coordinates.coords[0] < this.gameObject.x + 200)
        {
            this.gameObject.x += -this.enemySpeed;
        }
        else if (Coordinates.coords[1] > this.gameObject.y)
        {
            this.gameObject.y -= -this.enemySpeed;
        }
        else if (Coordinates.coords[1] < this.gameObject.y)
        {
            this.gameObject.y += -this.enemySpeed;
        }


        // SHOOTING
        if (this.shootingCount % this.fireDelay == 0)
        {
            if (Coordinates.coords[0] < this.gameObject.x)
            {
                this.fireOffset = -30;
            }
            else{
                this.fireOffset = 30;
            }

            let shot = SceneManager.currentScene.instantiate(SmallEnemyProjectile, new Point(this.gameObject.x + this.fireOffset, this.gameObject.y), 0, "Projectile", SceneManager.currentScene.children, SceneManager.currentScene.pX, SceneManager.currentScene.pY); 
            
            
            
            if (Coordinates.coords[0] < this.gameObject.x)
            {
                shot.velocityX = -8;
            }
            else
            {
                shot.velocityX = 8;
            }
        }
        this.shootingCount++;

    }
}
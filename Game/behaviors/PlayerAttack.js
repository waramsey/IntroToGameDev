import Input from "../../GameEngine/base/Input.js";
import GameObject from "../../GameEngine/base/GameObject.js"
import Component from "../../GameEngine/base/Component.js"
import Projectile from "../prefabs/Projectile.js"
import SceneManager from "../SceneManager.js"
import Point from "../../GameEngine/base/Point.js";

export default class PlayerAttack
{
    fireDelay = 5; //lower fireDelay is better
    shootingCount = 0;
    start() {

    }

    // checks for key input, spawns projectile in direction
    update() {
        // up arrow
        if (Input.keys[38])
        {
            if (this.shootingCount % this.fireDelay == 0)
            {
                let shot = SceneManager.currentScene.instantiate(Projectile, new Point(this.gameObject.x, this.gameObject.y - 30), 0, "projectile", SceneManager.currentScene.children, SceneManager.currentScene.pX, SceneManager.currentScene.pY); 
                shot.velocityY = -10;
            }
            this.shootingCount++;
        }
        // down arrow
        else if (Input.keys[40])
        {
            if (this.shootingCount % this.fireDelay == 0)
            {
                let shot = SceneManager.currentScene.instantiate(Projectile, new Point(this.gameObject.x, this.gameObject.y + 30), 0, "projectile", SceneManager.currentScene.children, SceneManager.currentScene.pX, SceneManager.currentScene.pY); 
                shot.velocityY = 10;
            }
            this.shootingCount++;
        }
        // left arrow
        else if (Input.keys[37])
        {
            if (this.shootingCount % this.fireDelay == 0)
            {
                let shot = SceneManager.currentScene.instantiate(Projectile, new Point(this.gameObject.x - 30, this.gameObject.y), 0, "projectile", SceneManager.currentScene.children, SceneManager.currentScene.pX, SceneManager.currentScene.pY); 
                shot.velocityX = -10;
            }
            this.shootingCount++;
        }
        // right arrow
        else if (Input.keys[39])
        {
            if (this.shootingCount % this.fireDelay == 0)
            {
                let shot = SceneManager.currentScene.instantiate(Projectile, new Point(this.gameObject.x + 30, this.gameObject.y), 0, "projectile", SceneManager.currentScene.children, SceneManager.currentScene.pX, SceneManager.currentScene.pY); 
                shot.velocityX = 10;
            }
            this.shootingCount++;
        }
    }
}
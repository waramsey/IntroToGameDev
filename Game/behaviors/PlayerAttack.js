import Input from "../../GameEngine/base/Input.js";
import GameObject from "../../GameEngine/base/GameObject.js"
import Component from "../../GameEngine/base/Component.js"
import Projectile from "../prefabs/Projectile.js"
import SceneManager from "../SceneManager.js"
import Point from "../../GameEngine/base/Point.js";

export default class PlayerAttack
{
    rateOfFire = 10; //lower rate of fire is better
    shootingCount = 0;
    start() {

    }

    // checks for key input, spawns projectile in direction
    update() {
        // up arrow
        if (Input.keys[38])
        {
            if (this.shootingCount % this.rateOfFire == 0)
            {
                let shot = SceneManager.currentScene.instantiate(Projectile, new Point(this.gameObject.x, this.gameObject.y - 30), 0, "projectile", SceneManager.currentScene.children, SceneManager.currentScene.pX, SceneManager.currentScene.pY); 
                shot.velocityY = -10;
            }
            this.shootingCount++;
        }
        // down arrow
        if (Input.keys[40])
        {

        }
        // left arrow
        if (Input.keys[37])
        {

        }
        // right arrow
        if (Input.keys[39])
        {

        }
    }
}
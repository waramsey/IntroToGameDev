import Input from "../../GameEngine/base/Input.js";
import GameObject from "../../GameEngine/base/GameObject.js"
import Component from "../../GameEngine/base/Component.js"
import Projectile from "../prefabs/Projectile.js"
import SceneManager from "../SceneManager.js"
import Point from "../../GameEngine/base/Point.js";

export default class PlayerAttack
{
    start() {

    }

    // checks for key input, spawns projectile in direction
    update() {
        // up arrow
        if (Input.keys[38])
        {
            let shot = SceneManager.currentScene.instantiate(Projectile, new Point(this.gameObject.x, this.gameObject.y - 25), 0, "projectile", SceneManager.currentScene.children); 

            shot.velocityY = -10; 
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
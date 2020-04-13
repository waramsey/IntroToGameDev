import Base from "../../GameEngine/Base.js"
import SceneManager from "../SceneManager.js"
import Point from "../../GameEngine/base/Point.js";
import CollisionCircle from "../prefabs/CollisionCircle.js"

export default class CollisionPlayerBehavior {
    playerHealth;

    start() {
        console.log("Player Collision Started");

    }
    update() {

        
    }
    onCollisionEnter(otherGameObject){
        console.log("in collision");
    }

    onCollisionStay(collisionObject){
        
        console.log("" + this.playerHealth);
        //if (collisionObject.gameObject.)
        //if enemy, take damage
        // should health be located in gameObject???
        this.takeDamage(1);

    }

    takeDamage(x)
    {
        if (this.playerHealth > 0)
        {
            this.playerHealth -= x;
        }
    }
}
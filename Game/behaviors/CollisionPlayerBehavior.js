import Base from "../../GameEngine/Base.js";
import SceneManager from "../SceneManager.js";
import Point from "../../GameEngine/base/Point.js";
import CollisionCircle from "../prefabs/CollisionCircle.js";
import HealthBehavior from "./HealthBehavior.js";

export default class CollisionPlayerBehavior {

    start() {
        //console.log("Player Collision Started");

    }
    update() {

        
    }
    
    onCollisionEnter(otherGameObject){
        console.log("in collision");
    }

    onCollisionStay(collisionObject){
        
        if (collisionObject.gameObject.tag == "Enemy")
        {
            this.gameObject.components.filter(i => i.takeDamage).forEach(i => i.takeDamage(1));
        }
    }
}
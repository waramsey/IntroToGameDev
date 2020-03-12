import Base from "../../GameEngine/Base.js"
import SceneManager from "../SceneManager.js"
import Point from "../../GameEngine/base/Point.js";
import CollisionCircle from "../prefabs/CollisionCircle.js"

export default class CollisionCircleBehavior {
    
    start() {
        console.log("Collision circle started");

    }
    update() {

        
    }
    onCollisionEnter(otherGameObject){
        console.log("in collision");
    }

    onCollisionStay(collisionObject){
        console.log("on collision stay");
        collisionObject.gameObject.components.filter(i => i.stroke).forEach(i => i.stroke = "red");
        collisionObject.gameObject.components.filter(i => i.fill).forEach(i => i.fill = "red");
    }


}
import Base from "../../engine/Base.js"
import SceneManager from "../SceneManager.js"
//import Point from "../../engine/base/Point.js";
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
    }


}
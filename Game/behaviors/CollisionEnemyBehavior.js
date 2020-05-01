import Base from "../../GameEngine/Base.js"
import SceneManager from "../SceneManager.js"
import Point from "../../GameEngine/base/Point.js";
import CollisionCircle from "../prefabs/CollisionCircle.js"
import RGBFill from "./RGBFill.js";

export default class CollisionEnemyBehavior {
    
    start() {
        //console.log("Collision Enemy started");

    }
    update() {

        
    }
    onCollisionEnter(otherGameObject){
        console.log("in collision");
    }

    onCollisionStay(collisionObject){
        //collisionObject.gameObject.components.filter(i => i.fill).forEach(i => i.fill = "white");
    }


}
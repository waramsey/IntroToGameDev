import Base from "../../GameEngine/Base.js"
import SceneManager from "../SceneManager.js"
import Point from "../../GameEngine/base/Point.js";
import CollisionCircle from "../prefabs/CollisionCircle.js"
import RGBFill from "./RGBFill.js";

export default class CollisionEnemyBehavior {
    
    start() {

    }
    update() {

        
    }
    onCollisionEnter(otherGameObject){
        console.log("in collision");
    }

    onCollisionStay(collisionObject){
        console.log("in collision");

    }
}
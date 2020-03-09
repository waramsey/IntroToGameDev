import Base from "../../GameEngine/Base.js"
import SceneManager from "../SceneManager.js"
import Point from "../../GameEngine/base/Point.js";
import CollisionCircle from "../prefabs/CollisionCircle.js"
import Input from "../../GameEngine/base/Input.js";

export default class DotBehavior extends Base.Behavior {
    
    start() {
        console.log("Dot started");

    }
    update() {
        
    }
    onCollisionEnter(otherGameObject){
        //console.log("in collision");
    }

    onCollisionStay(collisionObject){
        SceneManager.destroy(collisionObject.gameObject);
        SceneManager.instantiate(CollisionCircle, new Point(Math.random() * 400, Math.random() * 400), 0);
        //console.log("on collision stay");
    }
}
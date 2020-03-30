import Base from "../../GameEngine/Base.js"
import SceneManager from "../SceneManager.js"
import Point from "../../GameEngine/base/Point.js";
import CollisionRectangle from "../prefabs/CollisionRectangle.js"

export default class CollisionRectangleBehavior extends Base.Component {
    
    start() {
        console.log("Collision rectangle started");

    }
    update() {

        
    }
    onCollisionEnter(otherGameObject){
        console.log("in collision");
    }

    onCollisionStay(collisionObject){
        console.log("on collision stay: rectangle");
        collisionObject.gameObject.components.filter(i => i.stroke).forEach(i => i.stroke = "black");
        collisionObject.gameObject.components.filter(i => i.fill).forEach(i => i.fill = "blue");
    }


}
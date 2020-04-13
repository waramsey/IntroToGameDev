import Base from "../../GameEngine/Base.js"
import SceneManager from "../SceneManager.js"
import Point from "../../GameEngine/base/Point.js";
import CollisionRectangle from "../prefabs/CollisionRectangle.js"

export default class CollisionWallBehavior extends Base.Component {
    
    start() {
        //console.log("Collision Wall started");

    }
    update() {

        
    }
    onCollisionEnter(otherGameObject) {
        console.log("in collision");
    }

    onCollisionStay(collisionObject) {
        
        if (this.gameObject.x - collisionObject.gameObject.x > 48 || this.gameObject.x - collisionObject.gameObject.x < -48)
        {
            collisionObject.gameObject.x = collisionObject.gameObject.previousX;
        }
        else if (this.gameObject.y - collisionObject.gameObject.y > 48 || this.gameObject.y - collisionObject.gameObject.y < -48)
        {
            collisionObject.gameObject.y = collisionObject.gameObject.previousY;
        }
    }
}
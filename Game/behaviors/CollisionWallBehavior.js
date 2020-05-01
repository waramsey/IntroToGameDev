import Base from "../../GameEngine/Base.js"

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
        collisionObject.gameObject.x = collisionObject.gameObject.previousX;
        collisionObject.gameObject.y = collisionObject.gameObject.previousY;
    }
}
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
        if (this.gameObject.x - collisionObject.gameObject.x > 48 || this.gameObject.x - collisionObject.gameObject.x < -48) {
            collisionObject.gameObject.x = collisionObject.gameObject.previousX;
        } else {
            collisionObject.gameObject.y = collisionObject.gameObject.previousY;
        }
    }
}
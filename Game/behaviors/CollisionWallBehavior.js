import Base from "../../GameEngine/Base.js"

export default class CollisionWallBehavior extends Base.Component {
    
    start() {

    }
    
    update() {

    }

    onCollisionEnter(otherGameObject) {

    }

    onCollisionStay(collisionObject) {
        collisionObject.gameObject.x = collisionObject.gameObject.previousX;
        collisionObject.gameObject.y = collisionObject.gameObject.previousY;
    }
}
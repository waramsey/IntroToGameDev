import RGBFill from "./RGBFill.js";

export default class CollisionRainbowBehavior {
    
    start() {

    }
    update() {

    }
    
    onCollisionEnter(otherGameObject){

    }

    onCollisionStay(collisionObject){
        collisionObject.gameObject.addComponent(new RGBFill());
    }
}
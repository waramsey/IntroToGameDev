export default class UpdateUnderCamera {
    
    start() {

    }
    update() {

        
    }
    onCollisionEnter(otherGameObject){
        console.log("in collision");
    }

    onCollisionStay(collisionObject){
        collisionObject.gameObject.enabled = true;
    }
}
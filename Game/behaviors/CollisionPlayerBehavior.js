export default class CollisionPlayerBehavior {

    start() {

    }
    update() {
        
    }
    
    onCollisionEnter(otherGameObject){
        console.log("in collision");
    }

    onCollisionStay(collisionObject){
        
        if (collisionObject.gameObject.tag == "Enemy")
        {
            this.gameObject.components.filter(i => i.takeDamage).forEach(i => i.takeDamage(1));
        }
    }
}
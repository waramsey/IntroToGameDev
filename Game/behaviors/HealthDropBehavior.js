export default class HealthDropBehavior
{    
    start() {

    }

    update() {

    }

    onCollisionEnter(otherGameObject){
    }

    onCollisionStay(collisionObject){
        if (collisionObject.gameObject.tag == "Player")
        {
            collisionObject.gameObject.components.filter(i => i.takeThisMedKit).forEach(i => i.takeThisMedKit(5));
            this.gameObject.delete = true;
        }
    }
}
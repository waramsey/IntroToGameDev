export default class EnemyProjectileBehavior
{
    // unused, and how much dmg?
    projectileDamage;
    
    start() {

    }

    update() {

    }

    onCollisionEnter(otherGameObject){
        console.log("in collision");
    }

    onCollisionStay(collisionObject){
        // currently only serves as a player projectile
        if (collisionObject.gameObject.tag == "Player")
            collisionObject.gameObject.components.filter(i => i.takeDamage).forEach(i => i.takeDamage(2));

        // if (collisionObject.gameObject.tag != "Camera" && collisionObject.gameObject.tag != "pickup")
        //     this.gameObject.delete = true;
    }
}
export default class ProjectileBehavior
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
        if (collisionObject.gameObject.tag == "Enemy" || collisionObject.gameObject.tag == "Crystal" || collisionObject.gameObject.tag == "Boss")
            collisionObject.gameObject.components.filter(i => i.takeDamage).forEach(i => i.takeDamage(5));

        if (collisionObject.gameObject.tag != "Camera")
            this.gameObject.delete = true;
    }
}
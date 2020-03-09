import NameableParent from "./NameableParent.js";

export default class Scene extends NameableParent {

    constructor(name) {
        super(name);
        
    }

    draw(ctx, width, height) {
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,width,height);
        for (let i = 0; i < this.children.length; i++) {
            let gameObject = this.children[i];
            gameObject.draw(ctx);
        }
    }

    update(collidableType, collisionHelper) {
        for (let i = 0; i < this.children.length; i++) {
            let gameObject = this.children[i];
            gameObject.update();
        }

        //collision behavior
        let collidableChildren = [];
        this.getCollidable(this.children, collidableChildren, collidableType);

        for (let i = 0; i < collidableChildren.length; i++) {
            for (let j = i + 1; j < collidableChildren.length; j++) {
                if (collisionHelper.inCollision(collidableChildren[i], collidableChildren[j])) {
                    let gameObjectOne = collidableChildren[i].gameObject;
                    let gameObjectTwo = collidableChildren[j].gameObject;

                    for (let i = 0; i < gameObjectOne.components.length; i++) {
                        let component = gameObjectOne.components[i];
                        if (component.onCollisionStay) {
                            component.onCollisionStay(collidableChildren[j])
                        }
                    }

                    for (let j = 0; j < gameObjectTwo.components.length; j++) {
                        let component = gameObjectTwo.components[j];
                        if (component.onCollisionStay) {
                            component.onCollisionStay(collidableChildren[i]);
                        }
                    }

                }
            }
        }
    }

    getCollidable(children, collidableChildren) {
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            try {
                let collidableComponent = child.getComponent(CircleCollider);
                if (collidableComponent) {
                    collidableChildren.push(child);
                }
            } catch (e) {
                for (let j = 0; j < child.children.length; j++) {
                    this.getCollidable(child.children[j], collidableChildren);
                }
            }
        }
    }
}
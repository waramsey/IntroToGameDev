import NameableParent from "./NameableParent.js";

export default class Scene extends NameableParent {
    gameObjects = [];

    constructor() {
        super();
        
    }

    draw(ctx, width, height) {
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,width,height);
        for (let i = 0; i < this.gameObjects.length; i++) {
            let gameObject = this.gameObjects[i];
            gameObject.draw(ctx);
        }
    }

    update() {
        for (let i = 0; i < this.gameObjects.length; i++) {
            let gameObject = this.gameObjects[i];
            gameObject.update();
        }

        //collision behavior
        let collidableChildren = [];
        this.getCollidable(this.children, collidableChildren);
        console.log(collidableChildren); //for debugging
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
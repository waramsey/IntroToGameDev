import GameObject from "./GameObject.js";

export default class Room extends GameObject{

    constructor(name) {
        super(name)

    }

    draw(ctx) {
        for (let i = 0; i < this.children.length; i++) {
            let gameObject = this.children[i];
            gameObject.draw(ctx);
        }
    }

    update() {
        for (let i = 0; i < this.children.length; i++) {
            let gameObject = this.children[i];
            gameObject.update();
        }
    }
}
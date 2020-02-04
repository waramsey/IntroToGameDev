class GameObject {
    x;
    y;
    scaleX;
    scaleY;
    rotation;
    components = [];

    constructor(x=0, y=0, scaleX=1, scaleY=1, rotation=0) {
        this.x = x;
        this.y = y;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.rotation = rotation;
    }

    addComponent(component) {
        this.components.push(component);
        component.gameObject = this;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scaleX, this.scaleY);
        ctx.rotate(this.rotation);

        for (let i = 0; i < this.components.length; i++) {
            let component = this.components[i];
            if (component.draw) {
                component.draw(ctx);
            }
        }

        ctx.restore();
    }

    update() {
        for (let i = 0; i < this.components.length; i++) {
            let component = this.components[i];
            if (component.update) {
                component.update();
            }
        }
    }
}

export default GameObject;
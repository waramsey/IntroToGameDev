class GameObject {
    x;
    y;
    scaleX;
    scaleY;
    rotation;
    velocityX;
    velocityY;
    originPointX;
    originPointY;
    delete = false;
    components = [];

    constructor(x=0, y=0, scaleX=1, scaleY=1, rotation=0) {
        this.x = x;
        this.y = y;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.rotation = rotation;
        this.velocityX = 0;
        this.velocityY = 0;
        this.originPointX = this.x;
        this.originPointY = this.y;
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

        this.x += this.velocityX;
        this.y += this.velocityY;
    }

    getComponent(type) {
        for(let i = 0; i < this.components.length; i++) {
            let component = this.components[i];
            if (component instanceof type) {
                return component;
            }
        }
        throw "Error, couldn't find type " + type;
    }
}

export default GameObject;
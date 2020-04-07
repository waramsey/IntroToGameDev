import NameableParent from "./NameableParent.js";
import Point from "./Point.js";

export default class GameObject extends NameableParent {
    x;
    y;
    scaleX;
    scaleY;
    rotation;
    velocityX = 0;
    velocityY = 0;
    originPointX;
    originPointY;
    delete = false;
    components = [];

    get location() {
        return new Point(this.x, this.y);
    }

    constructor(x=0, y=0, scaleX=1, scaleY=1, rotation=0) {
        super();
        
        [this.x, this.y, this.scaleX, this.scaleY, this.rotation] = [x, y, scaleX, scaleY, rotation];
        this.originPointX = this.x;
        this.originPointY = this.y;
    }

    addComponent(component) {
        this.components.push(component);
        component.gameObject = this;
    }

    draw(ctx) {
        ctx.save();

        if (this.hasComponent("RectTransform")) {
            let rectTransform = this.getComponent("RectTransform");
            let anchorHorizontal = rectTransform.anchorHorizontal;
            let anchorVertical = rectTransform.anchorVertical;

            let screenWidth = ctx.canvas.width;
            let screenHeight = ctx.canvas.height;

            let tx = 0;
            let ty = 0;

            switch (anchorHorizontal) {
                case "left":
                    tx = 0;
                    break;
                case "center":
                    tx = screenWidth/2;
                    break;
                case "right":
                    tx = screenWidth;
                    break;
                default:
                    console.log("You have a bad value for anchorHorizontal " + anchorHorizontal);
            }

            switch (anchorVertical) {
                case "top":
                    ty = 0;
                    break;
                case "middle":
                    ty = screenHeight/2;
                    break;
                case "bottom":
                    ty = screenHeight;
                    break;
                default:
                    console.log("You have a bad value for anchorVertical " + anchorVertical);
            }

            ctx.translate(tx,ty);
        }

        ctx.translate(this.x, this.y);
        ctx.scale(this.scaleX, this.scaleY);
        ctx.rotate(this.rotation);

        this.components.filter(i => i.draw).forEach(i => i.draw(ctx));
        
        this.children.filter(i => i.draw).forEach(i => i.draw(ctx));

        ctx.restore();
    }

    update() {
        this.components.filter(i => i.update).forEach(i => i.update());

        this.children.forEach(i => i.update());

        this.x += this.velocityX;
        this.y += this.velocityY;
    }

    getComponent(type) {
        if (typeof (type) === 'string' || type instanceof String) {
            let component = this.components.find(i => i.constructor.name === type);
            if (component) return component;
            throw "Error, couldn't find type " + type;
        } else {
            let component = this.components.find(i => i instanceof type);
            if (component) return component;
            throw "Error, couldn't find type " + type;
        }
    }

    hasComponent(type) {
        if (typeof (type) === 'string' || type instanceof String) {
            let component = this.components.find(i => i.constructor.name === type);
            if (component) return true;
            return false;
        } else {
            let component = this.components.find(i => i instanceof type);
            if (component) return true;
           false;
        }
    }

    recursiveCall(functionName){
        for(let i = 0; i < this.components.length; i++){
            let component = this.components[i];
            if(component[functionName]){
                component[functionName]();
            }
        }
        //Now call the function on the children
        for(let i = 0; i < this.children.length; i++){
            let child = this.children[i];
            child.recursiveCall(functionName);
        }
    }
}
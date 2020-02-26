import Component from ".././base/Component.js"
import GameObject from ".././base/GameObject.js"
import CrystalComponent from ".././components/CrystalComponent.js"
import CrystalBehavior from "../behaviors/CrystalBehavior.js"

class Crystal extends Component{
    size;
    parts = [6];
    constructor(size){
        super();
        this.size = size;
        this.buildCrystal();
    }
    buildCrystal() {
        for (let i = 0; i < 6; i++) {
            if (i % 2 == 0) {
                this.parts[i] = new GameObject(this.x, this.y, 1, 1, 0);
            } else {
                this.parts[i] = new GameObject(this.x, this.y, 1, 1, 0.785398);
            }

            //push it onto the scene?
            this.parts[i].addComponent(new CrystalBehavior());
            if (i < 2) {
                this.parts[i].addComponent(new CrystalComponent(this.size, this.size));
            } else if (i < 4) {
                this.parts[i].addComponent(new CrystalComponent(this.size*0.7, this.size*0.7));
            } else {
                this.parts[i].addComponent(new CrystalComponent(this.size*0.7*0.7, this.size*0.7*0.7));
            }
        }
        

    }
    draw(ctx){
        ctx.save();
        {
            for (let i = 0; i < this.parts.length; i++) {
                this.parts[i].draw(ctx);
            }
        }
        ctx.restore();
    }
    update() {
        for (let i = 0; i < this.parts.length; i++) {
            this.parts[i].update();
        }
    }
}

export default Crystal;
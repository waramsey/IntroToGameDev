import Base from "../../GameEngine/Base.js";
import Components from "../../GameEngine/Components.js";
import GameBehaviors from "../GameBehaviors.js";
import GameObject from "../../GameEngine/base/GameObject.js";


class Crystal extends Base.GameObject {
    size = 50;
    parts = [6];

    constructor(x, y){
        super(x, y);
        this.buildCrystal();
    }

    buildCrystal() {
        // this.CrystalGameObject.addComponent(new GameBehaviors.GrowShrink());
        for (let i = 0; i < 6; i++) {
            if (i % 2 == 0) {
                this.parts[i] = new GameObject(this.x, this.y, 1, 1, 0);
            } else {
                this.parts[i] = new GameObject(this.x, this.y, 1, 1, 0.785398);
            }

            //push it onto the scene?
            this.parts[i].addComponent(new GameBehaviors.CrystalBehavior());
            if (i < 2) {
                this.parts[i].addComponent(new Components.CrystalComponent(this.size, this.size));
            } else if (i < 4) {
                this.parts[i].addComponent(new Components.CrystalComponent(this.size*0.7, this.size*0.7));
            } else {
                this.parts[i].addComponent(new Components.CrystalComponent(this.size*0.7*0.7, this.size*0.7*0.7));
            }
        }
        

    }
    draw(ctx){
        super.draw(ctx);
        ctx.save();
        {
            for (let i = 0; i < this.parts.length; i++) {
                this.parts[i].draw(ctx);
            }
        }
        ctx.restore();
    }
    update() {
        super.update();
        for (let i = 0; i < this.parts.length; i++) {
            this.parts[i].update();
        }
    }
}

export default Crystal;
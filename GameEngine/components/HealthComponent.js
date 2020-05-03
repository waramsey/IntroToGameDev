import Coordinates from "../base/Coordinates.js";
import Base from "../Base.js";

export default class HealthComponent extends Base.Component{
    width;
    height;
    fill;
    stroke;
    
    constructor(){
        super();
    }

    draw(ctx){
        this.update();
        
        ctx.save();
        {
            ctx.translate(-this.width/2, -this.height/2);
            ctx.fillStyle = this.fill;
            ctx.strokeStyle = this.stroke;
            ctx.fillRect(0,0, this.width, this.height);
            ctx.strokeRect(0, 0, this.width, this.height);
        }
        ctx.restore();
    }

    update() {
        
        // want healthbar to not shrink but to decrease from right to left
        this.width = 550 * (Coordinates.coords[6] / Coordinates.coords[5]);
        
        // would also like it to turn red
    
    }
}
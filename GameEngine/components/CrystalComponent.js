import Base from "../Base.js";

export default class CrystalComponent extends Base.Component{
    width;
    height;
    fill;
    stroke;

    constructor(){
        super();
    }
    draw(ctx){
        ctx.save();
        {
            ctx.translate(-this.width/2, -this.height/2);
            ctx.fillStyle = this.fill;
            ctx.strokeStyle = this.stroke;
            ctx.lineWidth = 2;
            ctx.fillRect(0,0, this.width, this.height);
            ctx.strokeRect(0, 0, this.width, this.height);
        }
        ctx.restore();
    }
}
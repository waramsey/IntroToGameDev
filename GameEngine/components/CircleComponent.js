import Base from "../Base.js";

export default class CircleComponent extends Base.Component{
    radius;
    fill;
    stroke;
    constructor(){
        super();
    }
    draw(ctx){
        ctx.save();
        {
            ctx.fillStyle = this.fill;
            ctx.strokeStyle = this.stroke;
            ctx.beginPath();
            ctx.arc(0,0,this.radius,0,2*Math.PI);
            ctx.fill();
            ctx.stroke();
        }
        ctx.restore();
    }
    update() {

    }
}
import Component from ".././base/Component.js"

class CircleComponent extends Component{
    radius;
    fill;
    stroke;
    constructor(radius, fill, stroke){
        super();
        this.radius = radius;
        this.fill = fill;
        this.stroke = stroke;
    }
    draw(ctx){
        ctx.save();
        {
            //ctx.translate(-this.width/2, -this.height/2);
            ctx.fillStyle = this.fill;
            ctx.strokeStyle = this.stroke;
            ctx.beginPath();
            ctx.arc(0,0,this.radius,0,2*Math.PI);
            ctx.fill();
            ctx.stroke();
        }
        ctx.restore();
    }
}

export default CircleComponent;
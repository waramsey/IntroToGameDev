import Component from "./Component.js"

class CrystalComponent extends Component{
    width;
    height;
    fill;
    stroke;
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }
    draw(ctx){
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
}

export default CrystalComponent;
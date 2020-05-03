import Base from "../Base.js";

export default class ParticleRenderer extends Base.Component {
    size;
    fill;
    stroke;
    rotationSpeed = 0.01;
    lifespan = 10;
    
    constructor(fill, stroke, size) {
        super();
        this.fill = fill;
        this.stroke = stroke;
        this.size = size;
    }

    draw(ctx) {
        ctx.save();
        {
            // ctx.translate(-this.size/2,-this.size/2)
            // ctx.fillStyle = this.fill;
            // ctx.strokeStyle = this.stroke;
            // ctx.fillRect(0, 0, this.size, this.size);
            // ctx.strokeRect(0, 0, this.size, this.size);
            ctx.fillStyle = this.fill;
            ctx.strokeStyle = this.stroke;
            ctx.beginPath();
            ctx.arc(0,0,this.size,0,2*Math.PI);
            ctx.fill();
            ctx.stroke();
        }
        ctx.restore();
    }

    update() {
        this.gameObject.rotation += this.rotationSpeed;
        this.lifespan--;
        //Tag for Deletion
        if (this.lifespan <= 0) {
            this.gameObject.delete = true;
        }
    }
}
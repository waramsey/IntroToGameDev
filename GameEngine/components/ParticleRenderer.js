import Base from "../Base.js";

export default class ParticleRenderer extends Base.Component {
    size;
    fill;
    stroke;
    rotationSpeed = 0.01;
    lifespan = 20;
    
    constructor() {
        super();
    }

    draw(ctx) {
        ctx.save();
        {
            ctx.translate(-this.size/2,-this.size/2)
            ctx.fillStyle = this.fill;
            ctx.strokeStyle = this.stroke;
            ctx.fillRect(0, 0, this.size, this.size);
            ctx.strokeRect(0, 0, this.size, this.size);
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
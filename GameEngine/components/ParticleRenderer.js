import Component from "../base/Component.js"

class ParticleRenderer extends Component {
    size;
    rotationSpeed = 0.01;
    lifespan = 20;
    fill;
    stroke;
    
    constructor(fill, stroke, size) {
        super();
        this.fill = fill;
        this.stroke = stroke;
        this.size = size;
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

export default ParticleRenderer;
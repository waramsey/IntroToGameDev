import Component from "./Component.js"

class ParticleRenderer extends Component {
    size;
    rotationSpeed = 0.01;
    lifespan = 100;
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
        if (this.lifespan < 0) {
            //delete object
            this.fill = "black";
            this.stroke = "black"
        }
    }
}

export default ParticleRenderer;
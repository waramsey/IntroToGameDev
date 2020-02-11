import Component from "./Component.js"

class ParticleRenderer extends Component {
    size = 10; //size of the outer edge of the tile
    rotationSpeed = 0.01;
    lifespan = 100;
    fill;
    stroke;
    
    constructor(fill, stroke) {
        super();
        this.fill = fill;
        this.stroke = stroke;
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
            this.stroke = "black";
        }
    }
}

export default ParticleRenderer;
import Component from "../base/Component.js"

class TileComponent extends Component {
    edgeSize = 50; //size of the outer edge of the tile
    innerTile; //size of the smaller tiles on the inside
    gap = 3.5; //space between smaller tiles
    fill;
    stroke;
    
    constructor(fill, stroke) {
        super();
        this.innerTile = (this.edgeSize/2) - this.gap;
        this.fill = fill;
        this.stroke = stroke;
    }

    draw(ctx) {
        ctx.save();
        {
            ctx.translate(-this.edgeSize/2,-this.edgeSize/2)
            ctx.fillStyle = this.fill;
            ctx.strokeStyle = this.stroke;

            ctx.fillRect(0, 0, this.innerTile, this.innerTile);
            ctx.strokeRect(0, 0, this.innerTile, this.innerTile);

            ctx.fillRect(this.innerTile + this.gap, 0, this.innerTile, this.innerTile);
            ctx.strokeRect(this.innerTile + this.gap, 0, this.innerTile, this.innerTile);

            ctx.fillRect(0, this.innerTile + this.gap, this.innerTile, this.innerTile);
            ctx.strokeRect(0, this.innerTile + this.gap, this.innerTile, this.innerTile);

            ctx.fillRect(this.innerTile + this.gap, this.innerTile + this.gap, this.innerTile, this.innerTile);
            ctx.strokeRect(this.innerTile + this.gap, this.innerTile + this.gap, this.innerTile, this.innerTile);
        }
        ctx.restore();
    }
}

export default TileComponent;
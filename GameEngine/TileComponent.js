import Component from "./Component.js"

class TileComponent extends Component {
    edgeSize; //size of the outer edge of the tile
    innerTile; //size of the smaller tiles on the inside
    fill;
    stroke;
    
    constructor(edgeSize, fill, stroke) {
        super();
        this.edgeSize = edgeSize;
        this.innerTile = (edgeSize/2) - 3;
        this.fill = fill;
        this.stroke = stroke;
    }

    draw(ctx) {
        ctx.save();
        {
            ctx.fillStyle = this.fill;
            ctx.strokeStyle = this.stroke;

            ctx.fillRect(0, 0, this.innerTile, this.innerTile);
            ctx.strokeRect(0, 0, this.innerTile, this.innerTile);

            ctx.fillRect(this.innerTile, 0, this.innerTile, this.innerTile);
            ctx.strokeRect(this.innerTile, 0, this.innerTile, this.innerTile);

            ctx.fillRect(0, this.innerTile, this.innerTile, this.innerTile);
            ctx.strokeRect(0, this.innerTile, this.innerTile, this.innerTile);

            ctx.fillRect(this.innerTile, this.innerTile, this.innerTile, this.innerTile);
            ctx.strokeRect(this.innerTile, this.innerTile, this.innerTile, this.innerTile);
        }
        ctx.restore();
    }

    update() {

    }
}

export default TileComponent;
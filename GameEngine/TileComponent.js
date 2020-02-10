import Component from "./Component.js"

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

    draw(ctx, x=0, y=0) {
        ctx.save();
        {
            ctx.fillStyle = this.fill;
            ctx.strokeStyle = this.stroke;

            ctx.fillRect(x, y, this.innerTile, this.innerTile);
            ctx.strokeRect(x, y, this.innerTile, this.innerTile);

            ctx.fillRect(this.innerTile + this.gap + x, y, this.innerTile, this.innerTile);
            ctx.strokeRect(this.innerTile + this.gap + x, y, this.innerTile, this.innerTile);

            ctx.fillRect(x, this.innerTile + this.gap + y, this.innerTile, this.innerTile);
            ctx.strokeRect(x, this.innerTile + this.gap + y, this.innerTile, this.innerTile);

            ctx.fillRect(this.innerTile + this.gap + x, this.innerTile + this.gap + y, this.innerTile, this.innerTile);
            ctx.strokeRect(this.innerTile + this.gap + x, this.innerTile + this.gap + y, this.innerTile, this.innerTile);
        }
        ctx.restore();
    }

    update() {

    }
}

export default TileComponent;
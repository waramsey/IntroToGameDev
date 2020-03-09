import Base from "../Base.js";

export default class TileComponent extends Base.Component {
    edgeSize = 50; //size of the outer edge of the tile
    gap = 3.5; //space between smaller tiles
    innerTile = (this.edgeSize/2) - this.gap; //size of the smaller tiles on the inside
    fill;
    stroke;
    
    constructor() {
        super();
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
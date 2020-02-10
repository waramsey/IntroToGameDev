import Component from "./Component.js"

class RenderRoom extends Component {
    layout;

    constructor(layout) {
        this.layout = layout;
    }

    draw(ctx) {
        ctx.save()
        {
            for (let i = 0; i < this.layout.length; i++) {
                for (let j = 0; j < this.layout[i].length; j++) {
                    this.layout[i][j].draw(ctx,i,j); //this will draw the tile at the location
                }
            }
        }
        ctx.restore()
    }

    update() {

    }
}

export default RenderRoom;
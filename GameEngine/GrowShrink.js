import Component from "./Component.js"

class GrowShrink extends Component {
    time = 0;
    scaleChange = 0.2;

    update() {
        this.time++;
        this.gameObject.scaleX = (this.scaleChange*Math.sin(this.time/25) + 2)/2;
        this.gameObject.scaleY = (this.scaleChange*Math.sin(this.time/25) + 2)/2;
    }
}

export default GrowShrink;
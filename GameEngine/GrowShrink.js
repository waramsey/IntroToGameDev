import Component from "./Component.js"

class GrowShrink extends Component {
    time = 0;

    update() {
        this.time++;
        this.gameObject.scaleX = (Math.sin(this.time/25) + 2)/2;
        this.gameObject.scaleY = (Math.sin(this.time/25) + 2)/2;
    }
}

export default GrowShrink;
import Component from "../../GameEngine/base/Component.js"
import Time from "../../GameEngine/base/Time.js"

class GrowShrink extends Component {
    scaleChange = 0.2;

    update() {
        this.gameObject.scaleX = (this.scaleChange*Math.sin(Time.deltaTime) + 2)/2;
        this.gameObject.scaleY = (this.scaleChange*Math.sin(Time.deltaTime) + 2)/2;
    }
}

export default GrowShrink;
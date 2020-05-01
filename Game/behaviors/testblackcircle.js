import Base from "../../GameEngine/Base.js";

export default class testblackcircle extends Base.Component {
    maxSize = 24;
    currentSize = 0;

    constructor() {
        super()
    }

    update() {
        if (this.currentSize < this.maxSize) {
            this.currentSize += 0.1;
        }
        this.gameObject.components.filter(i => i.radius).forEach(i => i.radius = this.currentSize);
    }
}
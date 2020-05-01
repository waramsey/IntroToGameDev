import Time from "../../GameEngine/base/Time.js"

export default class RGBFill {
    offset = 1.571;

    update() {
        let r = Math.floor(Math.sin(Time.deltaTime)*127+128)
        let g = Math.floor(Math.sin(Time.deltaTime + this.offset)*127+128)
        let b = Math.floor(Math.sin(Time.deltaTime - this.offset)*127+128)

        this.gameObject.components.filter(i => i.fill).forEach(i => i.fill = 'rgb(' + r + ',' + g + ',' + b + ')');
    }
}
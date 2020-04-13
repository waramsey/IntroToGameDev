export default class RGBFill {
    time = 0;
    offset = 1.571;

    update() {
        this.time += .02;
        let r = Math.floor(Math.sin(this.time)*127+128)
        let g = Math.floor(Math.sin(this.time + this.offset)*127+128)
        let b = Math.floor(Math.sin(this.time - this.offset)*127+128)

        this.gameObject.components.filter(i => i.fill).forEach(i => i.fill = 'rgb(' + r + ',' + g + ',' + b + ')');
    }
}
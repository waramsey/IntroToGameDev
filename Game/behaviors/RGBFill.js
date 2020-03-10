class RGBStroke {
    time = 0;

    update() {
        this.time += .1;
        let r = Math.floor(Math.sin(this.time)*127+128)
        let g = Math.floor(Math.sin(this.time/2)*127+128)
        let b = Math.floor(Math.sin(this.time/3)*127+128)

        this.gameObject.components.filter(i => i.fill).forEach(i => i.fill = 'rgb(' + r + ',' + g + ',' + b + ')');
    }
}

export default RGBStroke;
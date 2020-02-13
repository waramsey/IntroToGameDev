import CrystalComponent from "./CrystalComponent.js";

class CrystalBehavior {
    time = 0;
    
    start() {
        this.gameObject.x = 50;
        this.gameObject.y = 50;
        this.gameObject.rotation = 0;
        this.gameObject.velocityX = 0;
        this.gameObject.velocityY = 0;
        
    }

    update() {
        
        this.time+=.01;
        this.gameObject.getComponent(CrystalComponent).fill = '#' + (0x1000000+(Math.sin(this.time/100) + .1)*0xffffff).toString(16).substr(1,6);
        
    }
}

export default CrystalBehavior;
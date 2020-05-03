export default class BossBehavior {

    posX = 101;
    speed = 4;
    
    start() {
        
    }

    update() {
        // would prefer to initialize this in start()
        if (this.posX < -200 || this.posX > 200) {
            this.speed *= -1;
        }
        this.gameObject.x += this.speed;
        this.posX += this.speed;
    }
}
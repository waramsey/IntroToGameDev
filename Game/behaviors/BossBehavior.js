export default class BossBehavior {

    posX = 101;
    speed = 2;
    start() {
        /*
        this.gameObject.x = 0;
        this.gameObject.y = 0;
        this.gameObject.rotation = 0;
        this.gameObject.velocityX = 2;
        this.gameObject.velocityY = 0;
        */
    }

    update() {
        // would prefer to initialize this in start()
        if (this.posX < -100 || this.posX > 100) {
            this.speed *= -1;
        }
        this.gameObject.x += this.speed;
        this.posX += this.speed;
    }
}
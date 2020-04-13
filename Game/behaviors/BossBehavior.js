export default class BossBehavior {

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
        if (this.gameObject.velocityX == 0)
        {
            this.gameObject.velocityX = 5;
        }

        if (this.gameObject.x >= this.gameObject.originPointX + 100 || this.gameObject.x <= this.gameObject.originPointX - 100)
        {
            this.gameObject.velocityX *= -1;
        }
    }
}
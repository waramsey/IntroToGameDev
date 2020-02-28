class BossBehavior {

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
            this.gameObject.velocityX = 1;
        }

        if (this.gameObject.x >= this.gameObject.originPointX + 50 || this.gameObject.x <= this.gameObject.originPointX - 50)
        {
            this.gameObject.velocityX *= -1;
        }

        // what kind of behaviors to give him? 
        // bump forward if player is in front of him? 
        // orbiting circles that shoot at player and return? 
        // breath attack?
        // slash attack?
    }
}

export default BossBehavior;
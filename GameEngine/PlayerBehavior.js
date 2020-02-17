class PlayerBehavior {

    //will probably need components for:
        //character model
        //user input (move & swing sword)
        //collision
    start() {
        this.gameObject.x = 0;
        this.gameObject.y = 0;
        this.gameObject.rotation = 0;
        this.gameObject.velocityX = 0;
        this.gameObject.velocityY = 0;
        
    }

    update() {
        
        // better way to do this?
        // there is a way to reduce latency of
        // changes in movement, forgot how though
        let player = this.gameObject;        

        document.addEventListener('keydown', function(event) 
        {  
            if (event.keyCode == 68)
            {
                player.velocityX = 10;
            }
            if (event.keyCode == 65)
            {
                player.velocityX = -10;
            }
            if (event.keyCode == 87)
            {
                player.velocityY = -10;
            }
            if (event.keyCode == 83)
            {
                player.velocityY = 10;
            }

        });

        document.addEventListener('keyup', function(event) 
        {  
            if (event.keyCode == 68)
            {
                player.velocityX = 0;
            }
            if (event.keyCode == 65)
            {
                player.velocityX = 0;
            }
            if (event.keyCode == 87)
            {
                player.velocityY = 0;
            }
            if (event.keyCode == 83)
            {
                player.velocityY = 0;
            }        
        });

    }
}

export default PlayerBehavior;
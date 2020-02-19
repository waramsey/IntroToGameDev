import Input from "./Input.js";

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
        
        let player = this.gameObject;        

         
        if (Input.keys[68])
        {
            player.velocityX = 10;
        }
        if (Input.keys[65])
        {
            player.velocityX = -10;
        }
        if (Input.keys[87])
        {
            player.velocityY = -10;
        }
        if (Input.keys[83])
        {
            player.velocityY = 10;
        }

        //
        
        if (!Input.keys[68] && !Input.keys[65])
        {
            player.velocityX = 0;
        }
        if (!Input.keys[87] && !Input.keys[83])
        {
            player.velocityY = 0;
        }   
    }
}

export default PlayerBehavior;
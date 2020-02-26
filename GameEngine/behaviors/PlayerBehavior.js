import Input from "../base/Input.js";

class PlayerBehavior {

    //will probably need components for:
        //character model
        //user input (move & swing sword)
        //collision

    start() {
        // just discovered the start function in Behaviors don't do anything. Need to initialize a game object here?
        /*
        this.gameObject.x = 0;
        this.gameObject.y = 0;
        this.gameObject.rotation = 0;
        this.gameObject.velocityX = 0;
        this.gameObject.velocityY = 0;
        */
    }

    update() {
         
        if (Input.keys[68])
        {
            this.gameObject.velocityX = 10;
        }
        if (Input.keys[65])
        {
            this.gameObject.velocityX = -10;
        }
        if (Input.keys[87])
        {
            this.gameObject.velocityY = -10;
        }
        if (Input.keys[83])
        {
            this.gameObject.velocityY = 10;
        }

        //
        
        if (!Input.keys[68] && !Input.keys[65])
        {
            this.gameObject.velocityX = 0;
        }
        if (!Input.keys[87] && !Input.keys[83])
        {
            this.gameObject.velocityY = 0;
        }   
    }
}

export default PlayerBehavior;
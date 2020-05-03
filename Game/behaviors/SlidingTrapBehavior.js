import Coordinates from "../../GameEngine/base/Coordinates.js";

export default class SlidingTrapBehavior {
  

    start() {
        
    }

    update() {
                
        if (Coordinates.coords[0] < (this.gameObject.x + 25) && Coordinates.coords[0] > (this.gameObject.x - 25))
        {
            this.gameObject.velocityY = 20;
        }
        // return to original position
        else
        {
            this.gameObject.velocityY = -3;
        }
    }
} 
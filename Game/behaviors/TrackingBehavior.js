import Coordinates from "../../GameEngine/base/Coordinates.js";

export default class TrackingBehavior {

    enemySpeed;
    
    start() {
        
    }

    update() {
        // if time, add bounds so that small objects dont wiggle when on axis


        // diagonals
        if (Coordinates.coords[0] > this.gameObject.x && Coordinates.coords[1] > this.gameObject.y)
        {
            this.gameObject.x += Math.sqrt((this.enemySpeed * this.enemySpeed) / 2);
            this.gameObject.y += Math.sqrt((this.enemySpeed * this.enemySpeed) / 2);
        }
        else if (Coordinates.coords[0] > this.gameObject.x && Coordinates.coords[1] < this.gameObject.y)
        {
            this.gameObject.x += Math.sqrt((this.enemySpeed * this.enemySpeed) / 2);
            this.gameObject.y -= Math.sqrt((this.enemySpeed * this.enemySpeed) / 2);
        }
        else if (Coordinates.coords[0] < this.gameObject.x && Coordinates.coords[1] > this.gameObject.y)
        {
            this.gameObject.x -= Math.sqrt((this.enemySpeed * this.enemySpeed) / 2);
            this.gameObject.y += Math.sqrt((this.enemySpeed * this.enemySpeed) / 2);
        }
        else if (Coordinates.coords[0] < this.gameObject.x && Coordinates.coords[1] < this.gameObject.y)
        {
            this.gameObject.x -= Math.sqrt((this.enemySpeed * this.enemySpeed) / 2);
            this.gameObject.y -= Math.sqrt((this.enemySpeed * this.enemySpeed) / 2);
        }
        
        
        // cardinals
        else if (Coordinates.coords[0] > this.gameObject.x)
        {
            this.gameObject.x -= -this.enemySpeed;
        }
        else if (Coordinates.coords[0] < this.gameObject.x)
        {
            this.gameObject.x += -this.enemySpeed;
        }
        else if (Coordinates.coords[1] > this.gameObject.y)
        {
            this.gameObject.y -= -this.enemySpeed;
        }
        else if (Coordinates.coords[1] < this.gameObject.y)
        {
            this.gameObject.y += -this.enemySpeed;
        }
    }
}
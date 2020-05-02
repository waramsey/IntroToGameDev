import Coordinates from "../../GameEngine/base/Coordinates.js";
import Input from "../../GameEngine/base/Input.js";
import SceneManager from "../SceneManager.js";

export default class MovementBehavior {
    playerSpeed;
    roomX = 0;
    roomY = 0;

    update() {
        // diagonals
        if (Input.keys[68] && Input.keys[87])
        {
            this.gameObject.x += Math.sqrt((this.playerSpeed * this.playerSpeed) / 2);
            this.gameObject.y -= Math.sqrt((this.playerSpeed * this.playerSpeed) / 2);
        }
        else if (Input.keys[68] && Input.keys[83])
        {
            this.gameObject.x += Math.sqrt((this.playerSpeed * this.playerSpeed) / 2);
            this.gameObject.y += Math.sqrt((this.playerSpeed * this.playerSpeed) / 2);
        }
        else if (Input.keys[65] && Input.keys[87])
        {
            this.gameObject.x -= Math.sqrt((this.playerSpeed * this.playerSpeed) / 2);
            this.gameObject.y -= Math.sqrt((this.playerSpeed * this.playerSpeed) / 2);
        }
        else if (Input.keys[65] && Input.keys[83])
        {
            this.gameObject.x -= Math.sqrt((this.playerSpeed * this.playerSpeed) / 2);
            this.gameObject.y += Math.sqrt((this.playerSpeed * this.playerSpeed) / 2);
        }
        // cardinals
        else if (Input.keys[68])
        {
            this.gameObject.x -= -this.playerSpeed;
        }
        else if (Input.keys[65])
        {
            this.gameObject.x += -this.playerSpeed;
        }
        else if (Input.keys[87])
        {
            this.gameObject.y += -this.playerSpeed;
        }
        else if (Input.keys[83])
        {
            this.gameObject.y -= -this.playerSpeed;
        }
        


        //Loops when going off the side of the map
        if(this.gameObject.x < 5 + 650 * this.roomX) { //leaving left
            this.roomX--;
            SceneManager.currentScene.findByName("Main Camera").x -= 650;
        } else if (this.gameObject.x > 645 + 650 * this.roomX) { //leaving right
            this.roomX++;
            SceneManager.currentScene.findByName("Main Camera").x += 650;
        } else if (this.gameObject.y < 5 + 450 * this.roomY) { //leaving up
            this.roomY--;
            SceneManager.currentScene.findByName("Main Camera").y -= 450;
        } else if (this.gameObject.y > 445 + 450 * this.roomY) { //leaving down
            this.roomY++;
            SceneManager.currentScene.findByName("Main Camera").y += 450;
        }

        Coordinates.coords[0] = this.gameObject.x;
        Coordinates.coords[1] = this.gameObject.y;  
    }
}
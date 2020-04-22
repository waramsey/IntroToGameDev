import Input from "../../GameEngine/base/Input.js";
import SceneManager from "../SceneManager.js";

export default class MovementBehavior {
    playerSpeed;
    roomX = 0;
    roomY = 0;

    update() {
        if (Input.keys[68])
        {
            this.gameObject.x -= -this.playerSpeed;
        }
        if (Input.keys[65])
        {
            this.gameObject.x += -this.playerSpeed;
        }
        if (Input.keys[87])
        {
            this.gameObject.y += -this.playerSpeed;
        }
        if (Input.keys[83])
        {
            this.gameObject.y -= -this.playerSpeed;
        }


        //Loops when going off the side of the map
        if(this.gameObject.x < 5 + 650 * this.roomX) { //leaving left
            this.roomX--;
            // this.gameObject.x = 625 + 650 * this.roomX;
            SceneManager.currentScene.findByName("Main Camera").x -= 650;
        } else if (this.gameObject.x > 645 + 650 * this.roomX) { //leaving right
            this.roomX++;
            // this.gameObject.x = 25 + 650 * this.roomX;
            SceneManager.currentScene.findByName("Main Camera").x += 650;
        } else if (this.gameObject.y < 5 + 450 * this.roomY) { //leaving up
            this.roomY--;
            // this.gameObject.y = 425 + 450 * this.roomY;
            SceneManager.currentScene.findByName("Main Camera").y -= 450;
        } else if (this.gameObject.y > 445 + 450 * this.roomY) { //leaving down
            this.roomY++;
            // this.gameObject.y = 25 + 450 * this.roomY;
            SceneManager.currentScene.findByName("Main Camera").y += 450;
        }
    }
}
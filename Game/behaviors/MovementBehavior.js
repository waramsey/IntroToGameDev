import Input from "../../GameEngine/base/Input.js";
import SceneManager from "../SceneManager.js";
import CameraComponent from "../../GameEngine/components/CameraComponent.js";

export default class MovementBehavior {
    playerSpeed;

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
        if(this.gameObject.x < 10) { //leaving left
            this.gameObject.x = 625;
            SceneManager.currentScene.findByName("Main Camera").x -= 650;
        } else if (this.gameObject.x > 640) { //leaving right
            this.gameObject.x = 25;
            SceneManager.currentScene.findByName("Main Camera").x += 650;
        } else if (this.gameObject.y < 10) { //leaving up
            this.gameObject.y = 425;
            SceneManager.currentScene.findByName("Main Camera").y -= 450;
        } else if (this.gameObject.y > 440) { //leaving down
            this.gameObject.y = 25;
            SceneManager.currentScene.findByName("Main Camera").y += 450;
        }
    }
}
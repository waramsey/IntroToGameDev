import Input from "../../GameEngine/base/Input.js";

export default class PlayerBehavior {
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
        if(this.gameObject.x < 10) {
            this.gameObject.x = 625;
        } else if (this.gameObject.x > 640) {
            this.gameObject.x = 25;
        } else if (this.gameObject.y < 10) {
            this.gameObject.y = 425;
        } else if (this.gameObject.y > 440) {
            this.gameObject.y = 25;
        }
    }
}
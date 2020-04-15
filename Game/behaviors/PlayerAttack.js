import Input from "../../GameEngine/base/Input.js";

export default class PlayerAttack
{
    start() {

    }

    // checks for key input, spawns projectile in direction
    update() {
        // up arrow
        if (Input.keys[38])
        {
            //var shot = new Projectile();
            //shot.x = Player.x;
            //shot.y = Player.y;
            //shot.velocityY = -10;
        }
        // down arrow
        if (Input.keys[40])
        {

        }
        // left arrow
        if (Input.keys[37])
        {

        }
        // right arrow
        if (Input.keys[39])
        {

        }
    }
}
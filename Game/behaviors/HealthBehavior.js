import Coordinates from "../../GameEngine/base/Coordinates.js";
import Scenes from "../../Game/Scenes.js";
import SceneManager from "../SceneManager.js";

export default class HealthBehavior {
    MAXHEALTH;
    health;

    update() {
        //console.log(this.health);
    }

    takeDamage(x)
    {
        if (this.health > 0)
        {
            this.health -= x;
        }
        else {
            
            if (this.gameObject.tag == "Crystal")
            {
                Coordinates.coords[2] -= 1; 
            }
            
            // something here keeps reverting back to boss scene rather than to victory scene
            // if we were to continue with this, we would just iterate the scene by +1, making scenes for each level
            if (this.gameObject.tag == "Boss")
            {
                SceneManager.currentScene = "VictoryScene";
            }

            this.gameObject.delete = true;
        }
    }

    takeThisMedKit(x)
    {
        if (this.health + x > MAXHEALTH)
        {
            this.health = MAXHEALTH;
        }
        else{
            this.health += x;
        }
    }
}
import Base from "../../GameEngine/Base.js"
import SceneManager from "../SceneManager.js"

export default class HealthBehavior {
    MAXHEALTH;
    health;

    update() {
        console.log(this.health);
    }
    

    takeDamage(x)
    {
        if (this.health > 0)
        {
            this.health -= x;
        }
        else {
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
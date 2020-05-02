import Coordinates from "../../GameEngine/base/Coordinates.js";

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
            
            if (this.gameObject.tag == "Boss")
            {
                Coordinates.coords[3]--;
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
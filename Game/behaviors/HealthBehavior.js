import Coordinates from "../../GameEngine/base/Coordinates.js";
import HealthDrop from "../prefabs/HealthDrop.js"
import Point from "../../GameEngine/base/Point.js";
import SceneManager from "../SceneManager.js"

export default class HealthBehavior {
    MAXHEALTH;
    health;

    update() {
        if (this.gameObject.tag == "Player")
        {
            Coordinates.coords[4] = this.health;
        }
        if(this.gameObject.tag == "Boss")
        {
            if (this.MAXHEALTH > Coordinates.coords[5])
            {
                this.MAXHEALTH = Coordinates.coords[5];
            }
            
            if (this.health > this.MAXHEALTH)
            {
                this.health = this.MAXHEALTH;
            }
            
            Coordinates.coords[6] = this.health;

        }
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

                Coordinates.coords[5] -= 250;
                
            }
            
            if (this.gameObject.tag == "Boss")
            {
                Coordinates.coords[3]--;
            }
            
            this.gameObject.delete = true;

            this.randomHealthDrop();

        }
    }

    takeThisMedKit(x)
    {
        this.health = parseInt(this.health);
        
        if (x > 5)
        {
            x = this.MAXHEALTH / 4;
        }

        if (this.health + x > this.MAXHEALTH)
        {
            this.health = this.MAXHEALTH;
        }
        else{
            this.health += x;
        }
    }

    randomHealthDrop()
    {
        let luck = (Math.floor(Math.random() * 100));

        // could use a switch here if we wanted more depth
        if (this.health < 50)
        {
            luck += 20;
        }

        if (luck >= 90 && luck <= 100)
        {
            let drop = SceneManager.currentScene.instantiate(HealthDrop, new Point(this.gameObject.x, this.gameObject.y), 0, "pickup", SceneManager.currentScene.children, SceneManager.currentScene.pX, SceneManager.currentScene.pY); 
        }
    }
}
import Base from "../../GameEngine/Base.js";
import Time from "../../GameEngine/base/Time.js";

export default class OrbitBehavior extends Base.Behavior {
    id;
    distance = 40;
    
    start(){

    }
    
    update(){     
        this.gameObject.x = Math.cos(Time.deltaTime)*this.distance;
        this.gameObject.y = Math.sin(Time.deltaTime)*this.distance;
    }
}
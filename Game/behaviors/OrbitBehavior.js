import Base from "../../GameEngine/Base.js";

export default class OrbitBehavior extends Base.Behavior {
    id;
    time = 0;
    distance = 40;
    
    start(){
        // which of the hp orbs is it?
        this.time += this.id * 2.0944;
    }
    
    update(){
        this.time += 0.07;
        
        this.gameObject.x = Math.cos(this.time)*this.distance;
        this.gameObject.y = Math.sin(this.time)*this.distance;
    }
}
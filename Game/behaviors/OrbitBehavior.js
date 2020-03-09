//import Base from "../../engine/Base.js"

export default class OrbitBehavior { //extends Base.Behavior{
    time = 0;
    distance = 75;
    
    start(){
        
    }
    
    update(){
        this.time+=.01;
        
        this.gameObject.x = Math.cos(this.time)*this.distance;
        this.gameObject.y = Math.sin(this.time)*this.distance;
    }
}
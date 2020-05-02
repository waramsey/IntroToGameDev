import Base from "../Base.js";
import Coordinates from "../base/Coordinates.js";

export default class HealthText extends Base.Component{
    text;
    font = "30px serif";
    fill = "green";

    constructor(){
        super();
    }
   
    draw(ctx){
        
        this.text = Coordinates.coords[4];
      
        ctx.save();
        {
            ctx.fillStyle = this.fill;
            ctx.font = this.font;
            ctx.fillText(this.text,-ctx.measureText(this.text).width/2,0);
        }
        ctx.restore();
    }
}
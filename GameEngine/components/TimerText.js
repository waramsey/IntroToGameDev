import Base from "../Base.js";
import Time from "../base/Time.js"

export default class TimerText extends Base.Component{
    text;
    font = "white";
    fill = "white";

    constructor(){
        super();
    }
    draw(ctx){
        this.timeIncr()
        ctx.save();
        {
            ctx.fillStyle = this.fill;
            ctx.font = this.font;
            ctx.fillText(this.text,-ctx.measureText(this.text).width/2,0);
        }
        ctx.restore();
    }
    timeIncr()
    {
        if (Time.deltaTime < 60)
            this.text = 60 - Math.trunc(Time.deltaTime);
        else
            this.text = "TIME UP"
    }
}
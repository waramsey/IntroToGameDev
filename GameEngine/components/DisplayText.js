import Base from "../Base.js";

export default class DisplayText extends Base.Component{
    text;
    font = "50px serif";
    fill = "white";

    constructor(){
        super();
    }

    draw(ctx){
        ctx.save();
        {
            ctx.fillStyle = this.fill;
            ctx.font = this.font;
            ctx.fillText(this.text,-ctx.measureText(this.text).width/2,0);
        }
        ctx.restore();
    }
}
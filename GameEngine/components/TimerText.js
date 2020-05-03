import Coordinates from "../base/Coordinates.js";
import Scenes from "../../Game/Scenes.js";
import SceneManager from "../../Game/SceneManager.js";
import Base from "../Base.js";
import Time from "../base/Time.js"

export default class TimerText extends Base.Component{
    text;
    font = "35px serif";
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
            if (this.text == "TIME UP")
            {
                ctx.fillText(this.text,-ctx.measureText(this.text).width/2 + 250,100);
            }
            else
                ctx.fillText(this.text,-ctx.measureText(this.text).width/2 + 5,18);
        }
        ctx.restore();
    }

    timeIncr(){
        if (Time.deltaTime < (60 + Coordinates.coords[8]))
        {
            Coordinates.coords[7] = 60 - Math.trunc(Time.deltaTime);
            this.text = Coordinates.coords[7] + Coordinates.coords[8];
        }
        else
        {
            this.font = "50px serif";
            this.fill = "red";
            this.text = "TIME UP";
        }
             
        if (Coordinates.coords[2] == 0 || (this.text == "TIME UP" && Time.deltaTime > (62 + Coordinates.coords[8])))
        {
            SceneManager.currentScene = "BossScene";
        }
    }
}
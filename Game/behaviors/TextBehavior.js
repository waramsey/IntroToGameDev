import TextComponent from "../../GameEngine/components/TextComponent.js"
import Time from "../../GameEngine/base/Time.js";

export default class TextBehavior {
    
    update()
    {
        if (Time.deltaTime < 60){
            this.gameObject.getComponent(TextComponent).text = Math.trunc(Time.deltaTime);
        } else {
            this.gameObject.getComponent(TextComponent).text = "TIME UP"
        }
    }
}
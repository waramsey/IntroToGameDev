import TextComponent from "../../GameEngine/components/TextComponent.js"

class TextBehavior {
    time = 1800;
    
    update()
    {
        if (this.time > 0)
        {           
            this.time -= 1;
            this.gameObject.getComponent(TextComponent).text = Math.trunc(this.time/30);
        }
        else
        {
            this.gameObject.getComponent(TextComponent).text = "TIME UP"
        }
    
    }
}

export default TextBehavior;
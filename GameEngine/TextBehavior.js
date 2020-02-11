import TextComponent from "./TextComponent.js"

class TextBehavior {
    time = 60;
    
    start(){

    }
    
    update()
    {
        // need to iterate this if statement once a second
        if (this.time > 0)
        {           
            this.time -= 1;
            this.gameObject.getComponent(TextComponent).text = this.time;
        }
        else
        {
            this.gameObject.getComponent(TextComponent).text = "TIME UP"
        }
    
    }
}

export default TextBehavior;
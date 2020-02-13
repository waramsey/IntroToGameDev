import TextComponent from "./TextComponent.js"

class TextBehavior {
    time = 180;
    
    start(){

    }
    
    update()
    {
        // need to iterate this if statement once a second
        
        //let time = this.gameObject;
        
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
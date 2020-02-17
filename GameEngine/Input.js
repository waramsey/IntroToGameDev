export default class Input 
{    
    keys() 
    {
        let dKeyDown = false;
        let sKeyDown = false;
        let wKeyDown = false;
        let aKeyDown = false;
        
        document.addEventListener('keydown', function(event) 
        {        
            if (event.keyCode == 68)
            {
                dKeyDown = true;
            }
            if (event.keyCode == 65)
            {
                aKeyDown = true;
            }
            if (event.keyCode == 87)
            {
                wKeyDown = true;
            }
            if (event.keyCode == 83)
            {
                sKeyDown = true;;
            }
        });

        document.addEventListener('keyup', function(event) 
        {  
            if (event.keyCode == 68)
            {
                dKeyDown = false;
            }
            if (event.keyCode == 65)
            {
                aKeyDown = false;
            }
            if (event.keyCode == 87)
            {
                wKeyDown = false;
            }
            if (event.keyCode == 83)
            {
                sKeyDown = false;;
            }        
        });
    }
}

import Scene from "./Scene.js";
import GameObject from "./GameObject.js";
import TileComponent from "./TileComponent.js";
import PlayerComponent from "./PlayerComponent.js";
import TextComponent from "./TextComponent.js";
import CrystalComponent from "./CrystalComponent.js";
import PlayerBehavior from "./PlayerBehavior.js";
import TextBehavior from "./TextBehavior.js";
import CrystalBehavior from "./CrystalBehavior.js";
import EmitParticles from "./EmitParticles.js";
import GrowShrink from "./GrowShrink.js";

let gameScene = new Scene();
let pauseScene = new Scene();
let currentScene = gameScene;
let screen = document.getElementById('screen');
let canv, ctx;
    

document.getElementById('button').onclick = function startGame() {
    screen.innerHTML = "<canvas id='canv' width='640px' height='480px'></canvas>"
    canv = document.querySelector("#canv");
    ctx = canv.getContext('2d');
    setInterval(gameLoop, 33);
    currentScene = gameScene;

    //GAME SCENE
    {
        let CrystalGameObject = new GameObject(500,200, 1.25, 1.25, .785398);
        gameScene.gameObjects.push(CrystalGameObject);
        CrystalGameObject.addComponent(new CrystalComponent(125, 125, "black", "white"));
        CrystalGameObject.addComponent(new CrystalBehavior());

        let tile = new GameObject(200,200)
        gameScene.gameObjects.push(tile)
        tile.addComponent(new TileComponent("black","white"))
        tile.addComponent(new EmitParticles("black",6,gameScene))

        let PlayerGameObject = new GameObject(100,100);
        gameScene.gameObjects.push(PlayerGameObject);
        PlayerGameObject.addComponent(new PlayerComponent(50, 50, "white", "white"));
        PlayerGameObject.addComponent(new PlayerBehavior());

        let textTimer = new GameObject(555,50);
        gameScene.gameObjects.push(textTimer);
        textTimer.addComponent(new TextComponent(200,"small-caps 20px georgia","white"));
        textTimer.addComponent(new TextBehavior());
    }

    //PAUSE SCENE
    {
        let pauseText = new GameObject(100, 100);
        pauseScene.gameObjects.push(pauseText);
        pauseText.addComponent(new TextComponent("PAUSED", "small-caps 20px georgia", "white"));
    }
}


function gameLoop() {
    destroyObjects();
    update();
    draw(ctx);
}

function destroyObjects() {
    currentScene.gameObjects = currentScene.gameObjects.filter(checkDelete => !checkDelete.delete)
}

function update() {
    // PAUSES GAME, NEED TO GIVE THIS ITS OWN TIMER AS IT IS CURRENTLY TIED TO FRAMERATE
    document.addEventListener('keydown', function(event) 
    {  
        if (event.keyCode == 80 && currentScene == gameScene)
        {
            currentScene = pauseScene;
        }
        else if (event.keyCode == 80 && currentScene == pauseScene)
        {
            currentScene = gameScene;
        }
    });
    
    currentScene.update();
}

function draw(ctx) {
    currentScene.draw(ctx,canv.width,canv.height);
}
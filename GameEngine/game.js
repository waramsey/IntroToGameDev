import Scene from "./Scene.js";
import GameObject from "./GameObject.js";
import TileComponent from "./TileComponent.js";
import RectangleComponent from "./RectangleComponent.js";
import TextComponent from "./TextComponent.js";
import PlayerBehavior from "./PlayerBehavior.js";
import BossBehavior from "./BossBehavior.js";
import TextBehavior from "./TextBehavior.js";
import EmitParticles from "./EmitParticles.js";
import Crystal from "./Crystal.js";
import GrowShrink from "./GrowShrink.js";
import Input from "./Input.js";

let gameScene = new Scene();
let pauseScene = new Scene();
let currentScene = gameScene;
let screen = document.getElementById('screen');
let canv, ctx;

document.getElementById('play').onclick = function startGame() {
    screen.innerHTML = "<canvas id='canv' width='640px' height='440px'></canvas>"
    canv = document.querySelector("#canv");
    ctx = canv.getContext('2d');
    setInterval(gameLoop, 33);
    currentScene = gameScene;

    //GAME SCENE
    {
        let CrystalGameObject = new GameObject(500,200);
        gameScene.gameObjects.push(CrystalGameObject);
        CrystalGameObject.addComponent(new Crystal(50));
        CrystalGameObject.addComponent(new GrowShrink());

        let tile = new GameObject(200,200)
        gameScene.gameObjects.push(tile)
        tile.addComponent(new TileComponent("black","white"))
        tile.addComponent(new EmitParticles("black",6,gameScene))

        let BossGameObject = new GameObject(300,100);
        gameScene.gameObjects.push(BossGameObject);
        BossGameObject.addComponent(new RectangleComponent(100, 100, "red", "white"));
        BossGameObject.addComponent(new BossBehavior());



        let PlayerGameObject = new GameObject(100,100);
        gameScene.gameObjects.push(PlayerGameObject);
        PlayerGameObject.addComponent(new RectangleComponent(50, 50, "white", "white"));
        PlayerGameObject.addComponent(new PlayerBehavior());

        let textTimer = new GameObject(555,50);
        gameScene.gameObjects.push(textTimer);
        textTimer.addComponent(new TextComponent(200,"small-caps 20px georgia","white"));
        textTimer.addComponent(new TextBehavior());
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
    currentScene.update();
}

function draw(ctx) {
    currentScene.draw(ctx,canv.width,canv.height);
}

document.body.addEventListener('keydown', keydown);
document.body.addEventListener('keyup', keyup);

function keydown (event)
{  
    Input.keys[event.keyCode] = true;
    
    //PAUSES GAME
    if (Input.keys[80] && currentScene == gameScene) {
        currentScene = pauseScene;
        screen.innerHTML = "<h1>Paused</h1><button id='play' onclick='unpause()'>CONTINUE</button>"
        + "<button id='quit' onclick='quit()'>QUIT</button>"

        document.getElementById('play').onclick = function unpause() {
            screen.innerHTML = "<canvas id='canv' width='640px' height='440px'></canvas>"
            currentScene = gameScene;
            canv = document.querySelector("#canv");
            ctx = canv.getContext('2d');
        }
    }
    else if (Input.keys[80] && currentScene == pauseScene) {
        currentScene = gameScene;
    }
    
    //else if (event.keyCode == 27 && currentScene == pauseScene) {
        //startGame();
    //}
}

function keyup(event)
{
    Input.keys[event.keyCode] = false;
}






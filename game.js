import Scenes from "./Game/Scenes.js";
import SceneManager from "./Game/SceneManager.js";
import Engine from "./GameEngine/Engine.js";
import GameBehaviors from "./Game/GameBehaviors.js";
import GameObjects from "./Game/GameObjects.js";

Engine.Base.Scene.gameObjects = GameObjects;
Engine.Base.Scene.components = Engine.Components;
Engine.Base.Scene.gameBehaviors = GameBehaviors;

//Scene Management
let gameScene = Engine.Base.Scene.parse(Scenes.GameScene);
// let pauseScene = Engine.Base.Scene.parse(Scenes.PauseScene);
let startScene = Engine.Base.Scene.parse(Scenes.StartScene);
let rainbowScene = Engine.Base.Scene.parse(Scenes.RainbowScene);

SceneManager.addScene(gameScene);
// SceneManager.addScene(pauseScene);
SceneManager.addScene(startScene);
SceneManager.addScene(rainbowScene);
SceneManager.currentScene = "StartScene";

//Event Handling
document.body.addEventListener('keydown', keydown);
document.body.addEventListener('keyup', keyup);


let Input = Engine.Base.Input;
let screen = document.getElementById('screen');
let canv, ctx;



document.getElementById('play').onclick = function startGame() {
    screen.innerHTML = "<canvas id='canv' width='650px' height='450px'></canvas>"
    canv = document.querySelector("#canv");
    ctx = canv.getContext('2d');
    setInterval(gameLoop, 33);

    SceneManager.currentScene = "GameScene";
}




function keydown(event)
{  
    Input.keys[event.keyCode] = true;
    
    //PAUSES GAME
    if (Input.keys[80] && SceneManager.currentScene.name == "GameScene") {
        SceneManager.currentScene = "PauseScene";
        screen.innerHTML = "<h1>Paused</h1><button id='play' onclick='unpause()'>CONTINUE</button>"
        + "<button id='quit' onclick='quit()'>QUIT</button>"

        document.getElementById('play').onclick = function unpause() {
            screen.innerHTML = "<canvas id='canv' width='650px' height='450px'></canvas>"
            SceneManager.currentScene = "GameScene";
            canv = document.querySelector("#canv");
            ctx = canv.getContext('2d');
        }
    }
    else if (Input.keys[80] && SceneManager.currentScene.name == "PauseScene") {
        SceneManager.currentScene = "GameScene";
    }
}

function keyup(event)
{
    Input.keys[event.keyCode] = false;
}

function gameLoop() {
    if (!SceneManager.currentScene.findByName("Player"))
        window.location.reload();
    destroyObjects();
    update();
    draw(ctx);
}

function destroyObjects() {
    SceneManager.currentScene.children = SceneManager.currentScene.children.filter(checkDelete => !checkDelete.delete)
}

function update() {    
    SceneManager.currentScene.update(Engine.Components.Collider, Engine.Components.CollisionHelper);
}

function draw(ctx) {
    SceneManager.currentScene.draw(ctx,canv.width,canv.height);
}
import Scenes from "./Game/Scenes.js";
import SceneManager from "./Game/SceneManager.js";
import Engine from "./GameEngine/Engine.js";


//Scene Management
let gameScene = new Scenes.GameScene();
let pauseScene = new Scenes.PauseScene();
let startScene = new Scenes.StartScene();

SceneManager.addScene(gameScene);
SceneManager.addScene(pauseScene);
SceneManager.addScene(startScene);
SceneManager.currentScene = "StartScene";

//Event Handling
document.body.addEventListener('keydown', keydown);
document.body.addEventListener('keyup', keyup);


let Input = Engine.Base.Input;
let screen = document.getElementById('screen');
let canv, ctx;



document.getElementById('play').onclick = function startGame() {
    screen.innerHTML = "<canvas id='canv' width='640px' height='440px'></canvas>"
    canv = document.querySelector("#canv");
    ctx = canv.getContext('2d');
    setInterval(gameLoop, 33);

    SceneManager.currentScene = "GameScene";
}




function keydown (event)
{  
    Input.keys[event.keyCode] = true;
    
    //PAUSES GAME
    if (Input.keys[80] && SceneManager.currentScene.name == "GameScene") {
        SceneManager.currentScene = "PauseScene";
        screen.innerHTML = "<h1>Paused</h1><button id='play' onclick='unpause()'>CONTINUE</button>"
        + "<button id='quit' onclick='quit()'>QUIT</button>"

        document.getElementById('play').onclick = function unpause() {
            screen.innerHTML = "<canvas id='canv' width='640px' height='440px'></canvas>"
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
    destroyObjects();
    update();
    draw(ctx);
}

function destroyObjects() {
    SceneManager.currentScene.children = SceneManager.currentScene.children.filter(checkDelete => !checkDelete.delete)
}

function update() {    
    SceneManager.currentScene.update();
    //console.log(SceneManager.currentScene.name)
    //console.log(SceneManager.currentScene.children)
}

function draw(ctx) {
    SceneManager.currentScene.draw(ctx,canv.width,canv.height);
}
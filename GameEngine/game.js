import Scene from "./Scene.js"
import GameObject from "./GameObject.js"
import TileComponent from "./TileComponent.js"
import PlayerComponent from "./PlayerComponent.js"
import TextComponent from "./TextComponent.js"
import PlayerBehavior from "./PlayerBehavior.js"
import TextBehavior from "./TextBehavior.js"
import EmitParticles from "./EmitParticles.js"
import GrowShrink from "./GrowShrink.js"

let gameScene = new Scene();
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
        let tile = new GameObject(200,200)
        gameScene.gameObjects.push(tile)
        tile.addComponent(new TileComponent("black","white"))
        tile.addComponent(new EmitParticles("black",6,gameScene))

        let PlayerGameObject = new GameObject(100,100);
        gameScene.gameObjects.push(PlayerGameObject);
        let playerComponent = new PlayerComponent(50, 50, "white", "white");
        let playerBehavior = new PlayerBehavior();
        PlayerGameObject.addComponent(playerComponent);
        PlayerGameObject.addComponent(playerBehavior);
        // PlayerGameObject.addComponent(new GrowShrink());

        let textTimer = new GameObject(555,50);
        gameScene.gameObjects.push(textTimer);
        let textComponent  = new TextComponent(200,"small-caps 20px georgia","white");
        let textBehavior = new TextBehavior();
        textTimer.addComponent(textComponent);
        textTimer.addComponent(textBehavior);
    }
}


function gameLoop() {
    update();
    draw(ctx);
}

function update() {
    currentScene.update();
}

function draw(ctx) {
    currentScene.draw(ctx,canv.width,canv.height);
}
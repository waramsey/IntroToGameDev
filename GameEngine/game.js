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
let startScene = new Scene();
let pauseScene = new Scene();



// PlayerGameObject.addComponent(new EmitParticles("black","white",6,gameScene));

let tile = new GameObject(200,200)
gameScene.gameObjects.push(tile)
tile.addComponent(new TileComponent("black","white"))
//tile.addComponent(new GrowShrink());

let CrystalGameObject = new GameObject(500,200, 1.25, 1.25, .785398);
gameScene.gameObjects.push(CrystalGameObject);
let crystalComponent = new CrystalComponent(125, 125, "black", "white");
let crystalBehavior = new CrystalBehavior();
//CrystalGameObject.addComponent(new EmitParticles("black","red",6,gameScene))
CrystalGameObject.addComponent(crystalComponent);
CrystalGameObject.addComponent(crystalBehavior);

let PlayerGameObject = new GameObject(100,100);
gameScene.gameObjects.push(PlayerGameObject);
let playerComponent = new PlayerComponent(50, 50, "white", "white");
let playerBehavior = new PlayerBehavior();
PlayerGameObject.addComponent(playerComponent);
PlayerGameObject.addComponent(playerBehavior);

let textTimer = new GameObject(575,50);
gameScene.gameObjects.push(textTimer);
let textComponent  = new TextComponent(200,200,"white");
let textBehavior = new TextBehavior();
textTimer.addComponent(textComponent);
textTimer.addComponent(textBehavior);



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

function checkDelete() {

}
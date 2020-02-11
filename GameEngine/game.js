import Scene from "./Scene.js"
import GameObject from "./GameObject.js"
import TileComponent from "./TileComponent.js"
import PlayerComponent from "./PlayerComponent.js"
import TextComponent from "./TextComponent.js"
import PlayerBehavior from "./PlayerBehavior.js"
import TextBehavior from "./TextBehavior.js";

let gameScene = new Scene();
let startScene = new Scene();


let PlayerGameObject = new GameObject(100,100);
gameScene.gameObjects.push(PlayerGameObject);
let playerComponent = new PlayerComponent(100, 100, "white", "white");
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

let canv, ctx;

function main() {
    canv = document.querySelector("#canv");
    ctx = canv.getContext('2d');

    setInterval(gameLoop, 33);
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

main();
import Scene from "./Scene.js"
import GameObject from "./GameObject.js"
import TileComponent from "./TileComponent.js"

let startScene = new Scene();
let billGameObject = new GameObject(200,200);
startScene.gameObjects.push(billGameObject);
let t = new TileComponent(50,"grey","silver");
billGameObject.addComponent(t);

let currentScene = startScene;

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
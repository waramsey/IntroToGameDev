import Scene from "./Scene.js"
import GameObject from "./GameObject.js"
import TileComponent from "./TileComponent.js"
import PlayerComponent from "./PlayerComponent.js"
import TextComponent from "./TextComponent.js"
import PlayerBehavior from "./PlayerBehavior.js"
import TextBehavior from "./TextBehavior.js";
import EmitParticles from "./EmitParticles.js";
import GrowShrink from "./GrowShrink.js"

let gameScene = new Scene();
let startScene = new Scene();

//START SCENE
{
    let title = new GameObject(320,100);
    startScene.gameObjects.push(title);
    title.addComponent(new TextComponent("Main Menu","small-caps 50px georgia","white"));

    //button to change scenes?
    let button = new GameObject(320,300);
    startScene.gameObjects.push(button);
    button.addComponent(new PlayerComponent(200,150,"white","white"))

}

//GAME SCENE
{
    // PlayerGameObject.addComponent(new EmitParticles("black",6,gameScene));

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
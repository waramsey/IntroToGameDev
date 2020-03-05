import GameBehaviors from "../GameBehaviors.js";
import Engine from "../../GameEngine/Engine.js";
import GameObjects from "../GameObjects.js";
import Components from "../../GameEngine/Components.js";
import GameObject from "../../GameEngine/base/GameObject.js";

export default class GameScene extends Engine.Base.Scene {
    constructor() {
        super("GameScene");

        let TestRoom = new GameObjects.TestRoom();
        this.children.push(TestRoom)

        let PlayerGameObject = new GameObject(100,100);
        this.children.push(PlayerGameObject);
        PlayerGameObject.addComponent(new Components.CircleComponent(25, "white", "white"));
        PlayerGameObject.addComponent(new GameBehaviors.PlayerBehavior());

        let textTimer = new GameObject(555,50);
        this.children.push(textTimer);
        textTimer.addComponent(new Components.TextComponent(200,"small-caps 20px georgia","white"));
        textTimer.addComponent(new GameBehaviors.TextBehavior());


    }
}
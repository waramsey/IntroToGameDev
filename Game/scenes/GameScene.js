import GameBehaviors from "../GameBehaviors.js";
import Engine from "../../GameEngine/Engine.js";
import GameObjects from "../GameObjects.js";
import Components from "../../GameEngine/Components.js";
import GameObject from "../../GameEngine/base/GameObject.js";

export default class GameScene extends Engine.Base.Scene {
    constructor() {
        super("GameScene");

        let CrystalGameObject = new GameObjects.Crystal(500,200);
        this.children.push(CrystalGameObject);

        let tile = new GameObject(200,200)
        this.children.push(tile)
        tile.addComponent(new Components.TileComponent("black","white"))

        let BossGameObject = new GameObject(300,100);
        this.children.push(BossGameObject);
        BossGameObject.addComponent(new Components.RectangleComponent(100, 100, "red", "white"));
        BossGameObject.addComponent(new GameBehaviors.BossBehavior());

        let PlayerGameObject = new GameObject(100,100);
        this.children.push(PlayerGameObject);
        PlayerGameObject.addComponent(new Components.RectangleComponent(50, 50, "white", "white"));
        PlayerGameObject.addComponent(new GameBehaviors.PlayerBehavior());

        let textTimer = new GameObject(555,50);
        this.children.push(textTimer);
        textTimer.addComponent(new Components.TextComponent(200,"small-caps 20px georgia","white"));
        textTimer.addComponent(new GameBehaviors.TextBehavior());
    }
}
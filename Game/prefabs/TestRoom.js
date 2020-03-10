//UPDATE TO DECLARATIVE

// import Room from "../../GameEngine/base/Room.js";
// import GameObjects from "../GameObjects.js";
// import Base from "../../GameEngine/Base.js";
// import Components from "../../GameEngine/Components.js";
// import GameBehaviors from "../GameBehaviors.js";

// export default class TestRoom extends Room {
    
//     constructor(name) {
//         super(name)

//         let CrystalGameObject = new GameObjects.Crystal(500,200);
//         this.children.push(CrystalGameObject);
    
//         //let tile = new Base.GameObject(200,200)
//         //this.children.push(tile)
//         //tile.addComponent(new Components.TileComponent("black","white"))
    
//         let BossGameObject = new Base.GameObject(300,100);
//         this.children.push(BossGameObject);
//         BossGameObject.addComponent(new Components.RectangleComponent(100, 100, "red", "white"));
//         BossGameObject.addComponent(new GameBehaviors.BossBehavior());
//     }
// }

export default {
    name: "TestRoom",
    children: [
        {
            name: "tile",
            location: {x:100,y:100},
            type: "Tile"
        },
        {
            name: "Crystal",
            location: {x:400,y:200},
            type: "Crystal"
        }
    ]
}
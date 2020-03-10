//UPDATE TO DECLARATIVE

// import Base from "../../GameEngine/Base.js";
// import Components from "../../GameEngine/Components.js";
// import GameBehaviors from "../GameBehaviors.js";
// import GameObject from "../../GameEngine/base/GameObject.js";


// class Crystal extends Base.GameObject {
//     size = 20;
//     scale = 2.5;
//     parts = [6];

//     constructor(x, y){
//         super(x, y);
//         this.buildCrystal();
//     }

//     buildCrystal() {
//         // this.CrystalGameObject.addComponent(new GameBehaviors.GrowShrink());
//         for (let i = 0; i < 6; i++) {
//             if (i % 2 == 0) {
//                 this.parts[i] = new GameObject(this.x, this.y, this.scale, this.scale, 0);
//             } else {
//                 this.parts[i] = new GameObject(this.x, this.y, this.scale, this.scale, 0.785398);
//             }

//             //push it onto the scene?
//             this.parts[i].addComponent(new GameBehaviors.CrystalBehavior());
//             if (i < 2) {
//                 this.parts[i].addComponent(new Components.CrystalComponent(this.size, this.size));
//             } else if (i < 4) {
//                 this.parts[i].addComponent(new Components.CrystalComponent(this.size*0.7, this.size*0.7));
//             } else {
//                 this.parts[i].addComponent(new Components.CrystalComponent(this.size*0.7*0.7, this.size*0.7*0.7));
//             }
//         }
        

//     }
//     draw(ctx){
//         super.draw(ctx);
//         ctx.save();
//         {
//             for (let i = 0; i < this.parts.length; i++) {
//                 this.parts[i].draw(ctx);
//             }
//         }
//         ctx.restore();
//     }
//     update() {
//         super.update();
//         for (let i = 0; i < this.parts.length; i++) {
//             this.parts[i].update();
//         }
//     }
// }

// export default Crystal;



export default {
    name: "Crystal",
    children: [
        {
            name: "c1",
            location: {x:0,y:0},
            type: "EmptyGameObject",
            components: [
                {
                    type: "CrystalComponent",
                    values: [
                        {
                            key: "width",
                            value: "50"
                        },
                        {
                            key: "height",
                            value: "50"
                        }
                    ]
                },
                {
                    type: "CrystalBehavior"
                }
            ]
        },
        {
            name: "c2",
            location: {x:0,y:0},
            rotation: 0.785398,
            type: "EmptyGameObject",
            components: [
                {
                    type: "CrystalComponent",
                    values: [
                        {
                            key: "width",
                            value: "50"
                        },
                        {
                            key: "height",
                            value: "50"
                        }
                    ]
                },
                {
                    type: "CrystalBehavior"
                }
            ]
        },
        {
            name: "c3",
            location: {x:0,y:0},
            type: "EmptyGameObject",
            components: [
                {
                    type: "CrystalComponent",
                    values: [
                        {
                            key: "width",
                            value: "35"
                        },
                        {
                            key: "height",
                            value: "35"
                        }
                    ]
                },
                {
                    type: "CrystalBehavior"
                }
            ]
        },
        {
            name: "c4",
            location: {x:0,y:0},
            rotation: 0.785398,
            type: "EmptyGameObject",
            components: [
                {
                    type: "CrystalComponent",
                    values: [
                        {
                            key: "width",
                            value: "35"
                        },
                        {
                            key: "height",
                            value: "35"
                        }
                    ]
                },
                {
                    type: "CrystalBehavior"
                }
            ]
        },
        {
            name: "c5",
            location: {x:0,y:0},
            type: "EmptyGameObject",
            components: [
                {
                    type: "CrystalComponent",
                    values: [
                        {
                            key: "width",
                            value: "24"
                        },
                        {
                            key: "height",
                            value: "24"
                        }
                    ]
                },
                {
                    type: "CrystalBehavior"
                }
            ]
        },
        {
            name: "c6",
            location: {x:0,y:0},
            rotation: 0.785398,
            type: "EmptyGameObject",
            components: [
                {
                    type: "CrystalComponent",
                    values: [
                        {
                            key: "width",
                            value: "24"
                        },
                        {
                            key: "height",
                            value: "24"
                        }
                    ]
                },
                {
                    type: "CrystalBehavior"
                }
            ]
        },
        //other crystal gameobjects, rotated and scaled 0.785398
    ]
}
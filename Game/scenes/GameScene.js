export default {
    name: "GameScene",
    objects: [
        {
            name: "testroom",
            location: {x:0,y:0},
            type: "TestRoom",
        },
        {
            name: "CollisionDot",
            location: {x:500,y:100},
            type: "CollisionDot"
        },
        {
            name: "Boss",
            location: {x:300,y:100},
            type: "Boss"
        },
        {
            name: "Player",
            location: {x:325,y:225},
            type: "Player"
        },
    ]
}
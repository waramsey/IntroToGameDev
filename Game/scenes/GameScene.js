export default {
    name: "GameScene",
    objects: [
        {
            name: "testroom",
            location: {x:0,y:0},
            type: "TestRoom",
        },
        {
            name: "Player",
            location: {x:100,y:100},
            type: "Player"
        },
        {
            name: "CollisionDot",
            location: {x:500,y:100},
            type: "CollisionDot"
        }  
    ]
}
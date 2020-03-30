export default {
    name: "GameScene",
    objects: [
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
            name: "tile",
            location: {x:500,y:300},
            type: "Tile"
        },
        {
            name: "Crystal",
            location: {x:400,y:200},
            type: "Crystal"
        },
        {
            name: "Walls",
            location: {x:0,y:0},
            type: "TRBL" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "Player",
            location: {x:325,y:225},
            type: "Player"
        },
    ]
}
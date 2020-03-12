export default {
    name: "TestRoom",
    children: [
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
            name: "Boss",
            location: {x:300,y:100},
            type: "Boss"
        },
        {
            name: "Walls",
            location: {x:0,y:0},
            type: "RL" //Change this to any combination of TRBL (in that order) to change walls
        }
    ]
}
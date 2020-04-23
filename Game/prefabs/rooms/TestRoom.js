export default {
    name: "TestRoom",
    children: [
        {
            name: "Boss",
            location: {x:300,y:100},
            tag: "Enemy",
            type: "Boss",
            
        },
        {
            name: "Wallbit",
            location: {x:500,y:300},
            type: "Wall",
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
    ]
}
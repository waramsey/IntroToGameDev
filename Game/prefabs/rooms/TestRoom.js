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
            name: "Crystal",
            location: {x:525,y:225},
            type: "Crystal"
        },
        {
            name: "Walls",
            location: {x:0,y:0},
            type: "TRBL" //Change this to any combination of TRBL (in that order) to change walls
        },
        // {
        //     name: "PlusWallPattern",
        //     location: {x:0,y:0},
        //     type: "PlusWallPattern"
        // }
    ]
}
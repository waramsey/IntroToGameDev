export default {
    name: "VerticalSplitRoom",
    children: [
        {
            name: "Walls",
            location: {x:0,y:0},
            type: "RL" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "Vertical",
            location: {x:325,y:25},
            type: "Vertical"
        },
        {
            name: "Crystal",
            location: {x:175,y:225},
            type: "Crystal"
        }
    ]
}
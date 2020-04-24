export default {
    name: "VerticalSplitRoom",
    children: [
        {
            name: "Walls",
            location: {x:0,y:0},
            type: "R" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "VerticalDoor",
            location: {x:325,y:25},
            type: "VerticalDoor"
        }
    ]
}
export default{
    name: "B",
    children: [
        {
            name: "wallLeft",
            location: {x:25,y:25},
            type: "Vertical"
        },
        {
            name: "wallTop",
            location: {x:25,y:25},
            type: "Horizontal"
        },
        {
            name: "wallRight",
            location: {x:625,y:25},
            type: "Vertical"
        },
        {
            name: "wallBottom",
            location: {x:25,y:425},
            type: "HorizontalDoor"
        },
    ]
}
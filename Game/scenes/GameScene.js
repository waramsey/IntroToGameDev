export default {
    name: "GameScene",
    objects: [
        {
            name: "Main Camera",
            location: {x:325,y:225},
            type: "Camera"
        },
        {
            name: "GUI Canvas",
            location: {x:0,y:0},
            type: "Canvas",
            children: [
                //GUI elements go in here
                {
                    name: "TestText",
                    location: {x:70,y:70},
                    type: "ScreenText",
                    componentValues: [
                        {
                            type: "RectTransform",
                            values: [
                                {
                                    key: "anchorHorizontal",
                                    value:"left"
                                },
                                {
                                    key: "anchorVertical",
                                    value:"top"
                                }
                            ]
                        },
                        {
                            type: "TextComponent",
                            values: [
                                {
                                    key: "text",
                                    value: "yeet"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "TestRoom",
            location: {x:0,y:0},
            type: "TestRoom"
        },
        {
            name: "Walls",
            location: {x:0,y:450},
            type: "T" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "Walls",
            location: {x:-650,y:0},
            type: "R" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "Walls",
            location: {x:0,y:-450},
            type: "B" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "Walls",
            location: {x:650,y:0},
            type: "L" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "Player",
            location: {x:325,y:225},
            type: "Player"
        }
    ]
}
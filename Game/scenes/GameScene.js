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
        //ROOMS GO BELOW
        {
            name: "0/0",
            location: {x:-1300,y:-900},
            type: "RB" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "0/1",
            location: {x:-650,y:-900},
            type: "RBL" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "0/2",
            location: {x:0,y:-900},
            type: "RBL" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "0/3",
            location: {x:650,y:-900},
            type: "BL" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "1/0",
            location: {x:-1300,y:-450},
            type: "TB" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "1/1",
            location: {x:-650,y:-450},
            type: "TR" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "1/2",
            location: {x:0,y:-450},
            type: "MiniRoomRoom"
        },
        {
            name: "1/3",
            location: {x:650,y:-450},
            type: "TL" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "2/0",
            location: {x:-1300,y:0},
            type: "TRB" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "2/1",
            location: {x:-650,y:0},
            type: "VerticalSplitRoom"
        },
        {
            name: "2/2",
            location: {x:0,y:0},
            type: "TestRoom"
        },
        {
            name: "2/3",
            location: {x:650,y:0},
            type: "RBL" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "2/4",
            location: {x:1300,y:0},
            type: "L" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "3/0",
            location: {x:-1300,y:450},
            type: "TR" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "3/0",
            location: {x:-650,y:450},
            type: "RL" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "3/0",
            location: {x:0,y:450},
            type: "TRL" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "3/0",
            location: {x:650,y:450},
            type: "TL" //Change this to any combination of TRBL (in that order) to change walls
        },

        //PLAYER IS LAST
        {
            name: "Player",
            location: {x:325,y:425},
            type: "Player"
        }
    ]
}
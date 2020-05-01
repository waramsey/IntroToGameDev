export default {
    name: "GameScene",
    objects: [
        {
            name: "Main Camera",
            tag: "Camera",
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
                            type: "TimerText",
                            values: [
                                {
                                    key: "text",
                                    value: "0"
                                }
                            ],
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
                name: "CupNorthPattern",
                location: {x:-650,y:-900},
                type: "CupNorthPattern"
            },
            {
                name: "FourCornersPattern",
                location: {x:-650,y:-900},
                type: "FourCornersPattern"
            },
        {
            name: "0/2",
            location: {x:0,y:-900},
            type: "RBL" //Change this to any combination of TRBL (in that order) to change walls
        },
            {
                name: "FourInnerWallPattern",
                location: {x:0,y:-900},
                type: "FourInnerWallPattern"
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
                name: "HorizontalDoor",
                location: {x:-1275,y:-225},
                type: "HorizontalDoor"
            },
        {
            name: "1/1",
            location: {x:-650,y:-450},
            type: "TR" //Change this to any combination of TRBL (in that order) to change walls
        },
            {
                name: "SideIPattern",
                location: {x:-650,y:-450},
                type: "SideIPattern"
            },
        {
            name: "1/2",
            location: {x:0,y:-450},
            type: "TRBL"
        },
            {
                name: "CupNorthPattern",
                location: {x:0,y:-450},
                type: "CupNorthPattern"
            },
            {
                name: "Crystal",
                location: {x:325,y:-325},
                type: "Crystal"
            },
        {
            name: "1/3",
            location: {x:650,y:-450},
            type: "TL" //Change this to any combination of TRBL (in that order) to change walls
        },
            {
                name: "RoundedCornerPattern",
                location: {x:650,y:-450},
                type: "RoundedCornerPattern"
            },
        {
            name: "2/0",
            location: {x:-1300,y:0},
            type: "TRB" //Change this to any combination of TRBL (in that order) to change walls
        },
            {
                name: "InnerCirclePattern",
                location: {x:-1300,y:0},
                type: "InnerCirclePattern"
            },
            {
                name: "FourCornersPattern",
                location: {x:-1300,y:0},
                type: "FourCornersPattern"
            },
        {
            name: "2/1",
            location: {x:-650,y:0},
            type: "RL"
        },
            {
                name: "Vertical",
                location: {x:-325,y:25},
                type: "Vertical"
            },
            {
                name: "Crystal",
                location: {x:-475,y:225},
                type: "Crystal"
            },
        {
            name: "2/2", //Start Room
            location: {x:0,y:0},
            type: "TRBL"
        },
            {
                name: "Boss",
                location: {x:425,y:100},
                tag: "Enemy",
                type: "Boss",
            },
            {
                name: "FourCornersPattern",
                location: {x:0,y:0},
                type: "FourCornersPattern"
            },
        {
            name: "2/3",
            location: {x:650,y:0},
            type: "RBL" //Change this to any combination of TRBL (in that order) to change walls
        },
            {
                name: "FourCornersPattern",
                location: {x:650,y:0},
                type: "FourCornersPattern"
            },
            {
                name: "PlusWallPattern",
                location: {x:650,y:0},
                type: "PlusWallPattern"
            },
        {
            name: "2/4",
            location: {x:1300,y:0},
            type: "L" //Change this to any combination of TRBL (in that order) to change walls
        },
            {
                name: "WallMazePattern",
                location: {x:1300,y:0},
                type: "WallMazePattern"
            },
            {
                name: "Crystal",
                location: {x:1825,y:225},
                type: "Crystal"
            },
        {
            name: "3/0",
            location: {x:-1300,y:450},
            type: "TR" //Change this to any combination of TRBL (in that order) to change walls
        },
            {
                name: "OWallPattern",
                location: {x:-1300,y:450},
                type: "OWallPattern"
            },
            {
                name: "FourInnerWallPattern",
                location: {x:-1300,y:450},
                type: "FourInnerWallPattern"
            },
        {
            name: "3/1",
            location: {x:-650,y:450},
            type: "RL" //Change this to any combination of TRBL (in that order) to change walls
        },
            {
                name: "VerticalDoor",
                location: {x:-325,y:475},
                type: "VerticalDoor"
            },
        {
            name: "3/2",
            location: {x:0,y:450},
            type: "TRL" //Change this to any combination of TRBL (in that order) to change walls
        },
            {
                name: "FourInnerWallPattern",
                location: {x:0,y:450},
                type: "FourInnerWallPattern"
            },
            {
                name: "FourCornersPattern",
                location: {x:0,y:450},
                type: "FourCornersPattern"
            },
        {
            name: "3/3",
            location: {x:650,y:450},
            type: "TL" //Change this to any combination of TRBL (in that order) to change walls
        },
            {
                name: "OWallPattern",
                location: {x:650,y:450},
                type: "OWallPattern"
            },
            {
                name: "RoundedCornerPattern",
                location: {x:650,y:450},
                type: "RoundedCornerPattern"
            },
        

        //PLAYER IS LAST
        {
            name: "Player",
            location: {x:325,y:425},
            type: "Player"
        }
    ]
}
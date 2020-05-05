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
                },
                {
                    name: "PlayerHealthText",
                    location: {x:250,y:85},
                    type: "HPText",
                    componentValues: [
                        {
                            type: "RectTransform",
                            values: [
                                {
                                    key: "anchorHorizontal",
                                    value:"center"
                                },
                                {
                                    key: "anchorVertical",
                                    value:"top"
                                }
                            ]
                        },
                        {
                            type: "HealthText",
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
        // {
        //     name: "0/0",
        //     location: {x:-1300,y:-900},
        //     type: "RB" //Change this to any combination of TRBL (in that order) to change walls
        // },
        {
            name: "0/1",
            location: {x:-650,y:-900},
            type: "RB" //Change this to any combination of TRBL (in that order) to change walls
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
                name: "Bat",
                location: {x:-525, y:-800},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:-575, y:-700},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:-175, y:-800},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:-175, y:-700},
                tag: "Enemy",
                type: "Bat",
            },
        {
            name: "0/2",
            location: {x:0,y:-900},
            type: "BL" //Change this to any combination of TRBL (in that order) to change walls
        },
            {
                name: "FourInnerWallPattern",
                location: {x:0,y:-900},
                type: "FourInnerWallPattern"
            },
            {
                name: "SlidingTrap",
                location: {x:125,y:-625},
                tag: "Enemy",
                type: "SlidingTrap"
            },
            {
                name: "SlidingTrap",
                location: {x:525,y:-625},
                tag: "Enemy",
                type: "SlidingTrap"
            },
            {
                name: "Shooting Enemy",
                location: {x:175,y:-575},
                tag: "Enemy",
                type: "ShootingEnemy",
            },
            {
                name: "Shooting Enemy",
                location: {x:475,y:-575},
                tag: "Enemy",
                type: "ShootingEnemy",
            },
        // {
        //     name: "0/3",
        //     location: {x:650,y:-900},
        //     type: "BL" //Change this to any combination of TRBL (in that order) to change walls
        // },
        // {
        //     name: "1/0",
        //     location: {x:-1300,y:-450},
        //     type: "TB" //Change this to any combination of TRBL (in that order) to change walls
        // },
        //     {
        //         name: "HorizontalDoor",
        //         location: {x:-1275,y:-225},
        //         type: "HorizontalDoor"
        //     },
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
                name: "SlidingTrap",
                location: {x:-125,y:-295},
                tag: "Enemy",
                type: "SlidingTrap"
            },
            {
                name: "SlidingTrap",
                location: {x:-525,y:-295},
                tag: "Enemy",
                type: "SlidingTrap"
            },
            {
                name: "SlidingTrap",
                location: {x:-420,y:-100},
                tag: "Enemy",
                type: "SlidingTrap"
            },
            {
                name: "SlidingTrap",
                location: {x:-230,y:-100},
                tag: "Enemy",
                type: "SlidingTrap"
            },
            {
                name: "Bat",
                location: {x:-275, y:-345},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:-375, y:-345},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:-275, y:-100},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:-375, y:-100},
                tag: "Enemy",
                type: "Bat",
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
                tag: "Crystal",
                type: "Crystal"
            },
        {
            name: "1/3",
            location: {x:650,y:-450},
            type: "L" //Change this to any combination of TRBL (in that order) to change walls
        },
            {
                name: "RoundedCornerPattern",
                location: {x:650,y:-450},
                type: "RoundedCornerPattern"
            },
            {
                name: "Bat",
                location: {x:1060, y:-300},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:1080, y:-250},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:1100, y:-200},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:1060, y:-200},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:1120, y:-200},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:1080, y:-150},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:1050, y:-100},
                tag: "Enemy",
                type: "Bat",
            },
        {
            name: "2/0",
            location: {x:-1300,y:0},
            type: "RB" //Change this to any combination of TRBL (in that order) to change walls
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
                name: "Shooting Enemy",
                location: {x:-1225,y:150},
                tag: "Enemy",
                type: "ShootingEnemy",
            },
            {
                name: "Shooting Enemy",
                location: {x:-800,y:325},
                tag: "Enemy",
                type: "ShootingEnemy",
            },
            {
                name: "Bat",
                location: {x:-1200, y:200},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:-1200, y:250},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:-750, y:150},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:-700, y:200},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:-650, y:250},
                tag: "Enemy",
                type: "Bat",
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
                tag: "Crystal",
                type: "Crystal"
            },
            {
                name: "Bat",
                location: {x:-275, y:75},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:-275, y:200},
                tag: "Enemy",
                type: "Bat",
            },
            {
                name: "Bat",
                location: {x:-275, y:350},
                tag: "Enemy",
                type: "Bat",
            },
        {
            name: "2/2", //Start Room
            location: {x:0,y:0},
            type: "TRBL"
        },
            // {
            //     name: "Shooting Enemy",
            //     location: {x:425,y:325},
            //     tag: "Enemy",
            //     type: "ShootingEnemy",
            // },
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
                name: "Shooting Enemy",
                location: {x:75,y:625},
                tag: "Enemy",
                type: "ShootingEnemy",
            },
            {
                name: "Shooting Enemy",
                location: {x:75,y:725},
                tag: "Enemy",
                type: "ShootingEnemy",
            },
            {
                name: "Shooting Enemy",
                location: {x:475,y:625},
                tag: "Enemy",
                type: "ShootingEnemy",
            },
            {
                name: "Shooting Enemy",
                location: {x:475,y:725},
                tag: "Enemy",
                type: "ShootingEnemy",
            },
        // {
        //     name: "2/4",
        //     location: {x:1300,y:0},
        //     type: "L" //Change this to any combination of TRBL (in that order) to change walls
        // },
        //     // {
        //     //     name: "WallMazePattern",
        //     //     location: {x:1300,y:0},
        //     //     type: "WallMazePattern"
        //     // },
        //     {
        //         name: "Crystal",
        //         location: {x:1825,y:225},
        //         tag: "Crystal",
        //         type: "Crystal"
        //     },
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
                name: "SlidingTrap",
                location: {x:-1175,y:625},
                tag: "Enemy",
                type: "SlidingTrap"
            },
            {
                name: "SlidingTrap",
                location: {x:-775,y:625},
                tag: "Enemy",
                type: "SlidingTrap"
            },
            {
                name: "Shooting Enemy",
                location: {x:-975,y:500},
                tag: "Enemy",
                type: "ShootingEnemy",
            },
            {
                name: "Shooting Enemy",
                location: {x:-975,y:825},
                tag: "Enemy",
                type: "ShootingEnemy",
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
                name: "SlidingTrap",
                location: {x:-270,y:530},
                tag: "Enemy",
                type: "SlidingTrap"
            },
            {
                name: "SlidingTrap",
                location: {x:-80,y:530},
                tag: "Enemy",
                type: "SlidingTrap"
            },
            {
                name: "SlidingTrap",
                location: {x:-380,y:820},
                tag: "Enemy",
                type: "SlidingTrap"
            },
            {
                name: "SlidingTrap",
                location: {x:-570,y:820},
                tag: "Enemy",
                type: "SlidingTrap"
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
            {
                name: "Shooting Enemy",
                location: {x:950,y:550},
                tag: "Enemy",
                type: "ShootingEnemy",
            },
            {
                name: "Shooting Enemy",
                location: {x:1050,y:550},
                tag: "Enemy",
                type: "ShootingEnemy",
            },
            {
                name: "SlidingTrap",
                location: {x:925,y:775},
                tag: "Enemy",
                type: "SlidingTrap"
            },
            {
                name: "SlidingTrap",
                location: {x:1025,y:775},
                tag: "Enemy",
                type: "SlidingTrap"
            },

        //MAZE HINT BLOCKS
        {
            name: "HintBlocks",
            location: {x:0,y:0},
            type: "HintBlocks"
        },
        {
            name: "Crystal",
            location: {x:2275,y:-675},
            tag: "Crystal",
            type: "Crystal"
        },
        //PLAYER IS LAST
        {
            name: "Player",
            location: {x:325,y:225},
            tag: "Player",
            type: "Player"
        }
    ]
}
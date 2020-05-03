export default {
    name: "BossScene",
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
                // {
                //     name: "TestText",
                //     location: {x:70,y:70},
                //     type: "ScreenText",
                //     componentValues: [
                //         {
                //             type: "RectTransform",
                //             values: [
                //                 {
                //                     key: "anchorHorizontal",
                //                     value:"left"
                //                 },
                //                 {
                //                     key: "anchorVertical",
                //                     value:"top"
                //                 }
                //             ]
                //         },
                //         {
                //             type: "TimerText",
                //             values: [
                //                 {
                //                     key: "text",
                //                     value: "0"
                //                 }
                //             ],
                //         }
                //     ]
                // },
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
                },
                {
                    name: "BossHealthbar",
                    location: {x:325,y:25},
                    type: "BossHealthbar"
                },
            ]
        },
        //ROOMS GO BELOW
        {
            name: "2/2", //Start Room
            location: {x:0,y:0},
            type: "T"
        },
            {
                name: "Horizontal",
                location: {x:25,y:25},
                type: "Horizontal"
            },
        {
            name: "Boss",
            location: {x:425,y:125},
            tag: "Boss",
            type: "Boss",
        },

        //PLAYER IS LAST
        {
            name: "Player",
            location: {x:325,y:325},
            type: "Player"
        }
    ]
}
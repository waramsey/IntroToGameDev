export default {
    name: "VictoryScene",
    objects: [
        {
            name:"Main Camera",
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
                    name: "Text1",
                    location: {x:325,y:100},
                    type: "VictoryText",
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
                            type: "DisplayText",
                            values: [
                                {
                                    key: "text",
                                    value: "CONGRATULATIONS, CHAMPION!"
                                },
                                {
                                    key: "font",
                                    value: "30px serif"
                                },
                            ],
                        },
                    ]
                },
                {
                    name: "Text2",
                    location: {x:325,y:150},
                    type: "VictoryText",
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
                            type: "DisplayText",
                            values: [
                                {
                                    key: "text",
                                    value: "THANKS FOR PLAYING OUR GAME!"
                                },
                                {
                                    key: "font",
                                    value: "30px serif"
                                },
                            ],
                        },
                    ]
                },
                {
                    name: "Text3",
                    location: {x:325,y:200},
                    type: "VictoryText",
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
                            type: "DisplayText",
                            values: [
                                {
                                    key: "text",
                                    value: "ALEX RAMSEY/RYAN NARDUCCI"
                                },
                                {
                                    key: "font",
                                    value: "15px serif"
                                },
                                {
                                    key: "fill",
                                    value: "grey"
                                }
                            ],
                        }
                    ]
                }
            ]
        },
        {
            name: "Player",
            location: {x:325,y:325},
            type: "Player"
        },
    ]
}
 
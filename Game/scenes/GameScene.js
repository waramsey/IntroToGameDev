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
            name: "Boss",
            location: {x:300,y:100},
            tag: "Enemy",
            type: "Boss",
            
        },
        {
            name: "Wallbit",
            location: {x:500,y:300},
            type: "Wall",
        },
        {
            name: "Crystal",
            location: {x:400,y:200},
            type: "Crystal"
        },
        {
            name: "Walls",
            location: {x:0,y:0},
            type: "TRBL" //Change this to any combination of TRBL (in that order) to change walls
        },
        {
            name: "Player",
            location: {x:325,y:225},
            type: "Player"
        },
        // {
        //     name: "Projectile",
        //     location: {x:325,y:225},
        //     type: "Projectile"
        // }
    ]
}
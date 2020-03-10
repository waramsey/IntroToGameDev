export default {
    name: "Tile",
    children: [
        {
            name: "t1",
            location: {x:0,y:0},
            type: "EmptyGameObject",
            components: [
                {
                    type: "TileComponent",
                    values: [
                        {
                            key: "innerTile",
                            value: "21.5"
                        },
                        {
                            key: "fill",
                            value: "black"
                        },
                        {
                            key: "stroke",
                            value: "white"
                        }
                    ]
                }
            ]
        },
        {
            name: "t2",
            location: {x:23.5,y:0},
            type: "EmptyGameObject",
            components: [
                {
                    type: "TileComponent",
                    values: [
                        {
                            key: "innerTile",
                            value: "21.5"
                        },
                        {
                            key: "fill",
                            value: "black"
                        },
                        {
                            key: "stroke",
                            value: "white"
                        }
                    ]
                }
            ]
        },
        {
            name: "t3",
            location: {x:0,y:23.5},
            type: "EmptyGameObject",
            components: [
                {
                    type: "TileComponent",
                    values: [
                        {
                            key: "innerTile",
                            value: "21.5"
                        },
                        {
                            key: "fill",
                            value: "black"
                        },
                        {
                            key: "stroke",
                            value: "white"
                        }
                    ]
                }
            ]
        },
        {
            name: "t4",
            location: {x:23.5,y:23.5},
            type: "EmptyGameObject",
            components: [
                {
                    type: "TileComponent",
                    values: [
                        {
                            key: "innerTile",
                            value: "21.5"
                        },
                        {
                            key: "fill",
                            value: "black"
                        },
                        {
                            key: "stroke",
                            value: "white"
                        }
                    ]
                }
            ]
        }
    ]
}
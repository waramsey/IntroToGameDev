export default {
    name: "Crystal",
    children: [
        {
            name: "c1",
            location: {x:0,y:0},
            type: "EmptyGameObject",
            components: [
                {
                    type: "CrystalComponent",
                    values: [
                        {
                            key: "width",
                            value: "50"
                        },
                        {
                            key: "height",
                            value: "50"
                        }
                    ]
                },
                {
                    type: "CrystalBehavior"
                },
                {
                    type: "GrowShrink"
                }
            ]
        },
        {
            name: "c2",
            location: {x:0,y:0},
            rotation: 0.785398,
            type: "EmptyGameObject",
            components: [
                {
                    type: "CrystalComponent",
                    values: [
                        {
                            key: "width",
                            value: "50"
                        },
                        {
                            key: "height",
                            value: "50"
                        }
                    ]
                },
                {
                    type: "CrystalBehavior"
                },
                {
                    type: "GrowShrink"
                }
            ]
        },
        {
            name: "c3",
            location: {x:0,y:0},
            type: "EmptyGameObject",
            components: [
                {
                    type: "CrystalComponent",
                    values: [
                        {
                            key: "width",
                            value: "35" //this value is 0.7 * the previous value (50)
                        },
                        {
                            key: "height",
                            value: "35"
                        }
                    ]
                },
                {
                    type: "CrystalBehavior"
                },
                {
                    type: "GrowShrink"
                }
            ]
        },
        {
            name: "c4",
            location: {x:0,y:0},
            rotation: 0.785398,
            type: "EmptyGameObject",
            components: [
                {
                    type: "CrystalComponent",
                    values: [
                        {
                            key: "width",
                            value: "35"
                        },
                        {
                            key: "height",
                            value: "35"
                        }
                    ]
                },
                {
                    type: "CrystalBehavior"
                },
                {
                    type: "GrowShrink"
                }
            ]
        },
        {
            name: "c5",
            location: {x:0,y:0},
            type: "EmptyGameObject",
            components: [
                {
                    type: "CrystalComponent",
                    values: [
                        {
                            key: "width",
                            value: "24"
                        },
                        {
                            key: "height",
                            value: "24"
                        }
                    ]
                },
                {
                    type: "CrystalBehavior"
                },
                {
                    type: "GrowShrink"
                }
            ]
        },
        {
            name: "c6",
            location: {x:0,y:0},
            rotation: 0.785398,
            type: "EmptyGameObject",
            components: [
                {
                    type: "CrystalComponent",
                    values: [
                        {
                            key: "width",
                            value: "24"
                        },
                        {
                            key: "height",
                            value: "24"
                        }
                    ]
                },
                {
                    type: "CrystalBehavior"
                },
                {
                    type: "GrowShrink"
                }
            ]
        },
    ]
}
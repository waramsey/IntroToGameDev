export default {
    name: "Crystal",
    tag: "Crystal",
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
                        },
                        {
                            key: "stroke",
                            value: "white"
                        }
                    ]
                },
                {
                    type: "RGBStroke"
                },
                {
                    type: "GrowShrink"
                },
                {
                    type: "CircleCollider",
                    values: [
                        {
                            key: "radius",
                            value: "20"
                        }
                    ]
                },
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
                        },
                        {
                            key: "stroke",
                            value: "white"
                        }
                    ]
                },
                {
                    type: "RGBStroke"
                },
                {
                    type: "GrowShrink"
                },
                {
                    type: "CircleCollider",
                    values: [
                        {
                            key: "radius",
                            value: "20"
                        }
                    ]
                },
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
                        },
                        {
                            key: "stroke",
                            value: "white"
                        }
                    ]
                },
                {
                    type: "RGBStroke"
                },
                {
                    type: "GrowShrink"
                },
                {
                    type: "CircleCollider",
                    values: [
                        {
                            key: "radius",
                            value: "20"
                        }
                    ]
                },
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
                        },
                        {
                            key: "stroke",
                            value: "white"
                        }
                    ]
                },
                {
                    type: "RGBStroke"
                },
                {
                    type: "GrowShrink"
                },
                {
                    type: "CircleCollider",
                    values: [
                        {
                            key: "radius",
                            value: "20"
                        }
                    ]
                },
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
                        },
                        {
                            key: "stroke",
                            value: "white"
                        }
                    ]
                },
                {
                    type: "RGBStroke"
                },
                {
                    type: "GrowShrink"
                },
                {
                    type: "CircleCollider",
                    values: [
                        {
                            key: "radius",
                            value: "20"
                        }
                    ]
                },
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
                        },
                        {
                            key: "stroke",
                            value: "white"
                        }
                    ]
                },
                {
                    type: "RGBStroke"
                },
                {
                    type: "GrowShrink"
                },
                {
                    type: "CircleCollider",
                    values: [
                        {
                            key: "radius",
                            value: "20"
                        }
                    ]
                },
            ]
        },
    ],
    components: [
        {
            type: "CircleCollider",
            values: [
                {
                    key: "radius",
                    value: "20"
                }
            ]
        },
        {
            type: "HealthBehavior",
            values: [
              {
                key: "health",
                value: "25"
              }
            ]
        },
        {
            type: "EmitParticles",
            values: [
                {
                    key: "particleSize",
                    value: "3"
                }
            ]
        }
    ]
}
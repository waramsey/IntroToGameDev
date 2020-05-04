// UNUSED
export default {
    name: "RotatingTrap",
    tag: "Enemy",
    children: [
        {
            name: "c1",
            location: {x:0,y:0},
            type: "EmptyGameObject",
            tag: "Enemy",
            components: [
                {
                    type: "CircleComponent",
                    values: [
                        {
                            key: "radius",
                            value: "20"
                        },
                        {
                            key: "fill",
                            value: "orange"
                        },
                        {
                            key: "stroke",
                            value: "orange"
                        }
                    ]
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
        // {
        //     type: "CircleCollider",
        //     values: [
        //         {
        //             key: "radius",
        //             value: "20"
        //         }
        //     ]
        // },
    ]
}
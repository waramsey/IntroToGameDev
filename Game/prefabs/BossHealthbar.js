export default {
    name: "BossHealthbar",
    children: [
        {
            name: "blackbar",
            location: {x:0,y:0},
            type: "EmptyGameObject",
            components: [
                {
                    type: "RectangleComponent",
                    values: [
                        {
                            key: "width",
                            value: "550"
                        },
                        {
                            key: "height",
                            value: "50"
                        },
                        {
                            key: "fill",
                            value: "rgba(46,49,49,.5)"
                        },
                        {
                            key: "stroke",
                            value: "white"
                        }
                    ]
                },
            ]    
        },
        {
            name: "healthbar",
            location: {x:0,y:0},
            type: "EmptyGameObject",
            components: [
                {
            
                    type: "HealthComponent",
                    values: [
                        {
                            key: "width",
                            value: "550"
                        },
                        {
                            key: "height",
                            value: "50"
                        },
                        {
                            key: "fill",
                            value: "rgba(0,255,0,.8)"
                        },
                        {
                            key: "stroke",
                            value: "green"
                        }
                    ]
                },
            ]
        },     
    ],
    
    components: [
        
    ]
  }
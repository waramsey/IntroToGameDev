export default {
    name: "Boss",
    tag: "Boss",
    components: [
        {
            type: "CircleComponent",
            values: [
                {
                    key: "radius",
                    value: "50"
                  },
                  {
                    key: "fill",
                    value: "red"
                  },
                  {
                    key: "stroke",
                    value: "red"
                  }
            ]
        },
        {
          type: "CircleCollider",
          values: [
            {
              key: "radius",
              value: "50"
            }
          ]
        },
        {
            type: "BossBehavior"
        },
        {
          type: "HealthBehavior",
          values: [
            {
              key: "health",
              value: "1000"
            },
            {
              key: "MAXHEALTH",
              value: "1000"
            }
          ]
        },
    ]
}
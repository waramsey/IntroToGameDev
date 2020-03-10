export default {
    name: "Boss",
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
          type: "CollisionCircleBehavior"
        },
        {
            type: "BossBehavior"
        }
    ]
}
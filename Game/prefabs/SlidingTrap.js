export default {
    name: "SlidingTrap",
    tag: "Enemy",
    components: [
        {
            type: "RectangleComponent",
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
          type: "RectangleCollider",
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
        // {
        //   type: "CollisionEnemyBehavior"
        //},
        {
          type: "SlidingTrapBehavior",
        },
    ]
}
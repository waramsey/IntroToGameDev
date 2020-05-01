export default {
    name: "Boss",
    tag: "Enemy",
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
        // doesn't do anything
        // {
        //   type: "CollisionEnemyBehavior"
        // },
        {
            type: "BossBehavior"
        },
        {
          type: "HealthBehavior",
          values: [
            {
              key: "health",
              value: "100"
            },
            {
              key: "MAXHEALTH",
              value: "100"
            }
          ]
        },
    ]
}
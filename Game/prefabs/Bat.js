export default {
    name: "Bat",
    tag: "Enemy",
    components: [
        {
            type: "CircleComponent",
            values: [
                {
                    key: "radius",
                    value: "10"
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
              value: "10"
            }
          ]
        },
        {
          type: "CollisionEnemyBehavior"
        },
        {
            type: "TrackingBehavior"
        },
        {
          type: "HealthBehavior",
          values: [
            {
              key: "health",
              value: "5"
            },
            {
              key: "MAXHEALTH",
              value: "5"
            }
          ]
        },
        {
          type: "TrackingBehavior",
        }
    ]
}
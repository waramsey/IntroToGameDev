export default {
    name: "ShootingEnemy",
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
              value: "20"
            }
          ]
        },
        {
          type: "CollisionEnemyBehavior"
        },
        {
          type: "HealthBehavior",
          values: [
            {
              key: "health",
              value: "20"
            },
            {
              key: "MAXHEALTH",
              value: "20"
            }
          ]
        },
        {
          type: "SocialDistancing",
          values: [
            {
              key: "enemySpeed",
              value: "4"
            }
          ]
        },
    ]
}
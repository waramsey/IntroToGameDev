export default {
    name: "SmallEnemyProjectile",
    tag: "Projectile",
    components: [
      {
        type: "CircleComponent",
        values: [
          {
            key: "radius",
            value: "5"
          },
          {
            key: "fill",
            value: "purple"
          },
          {
            key: "stroke",
            value: "white"
          }
        ]
      },
      {
        type: "CircleCollider",
        values:[
          {
            key:"radius",
            value:"5"
          },
        ]
      },
      {
          type: "EnemyProjectileBehavior",
          values: [

          ]
      },
    ]
  }
export default {
    name: "EnemyProjectile",
    tag: "Projectile",
    components: [
      {
        type: "CircleComponent",
        values: [
          {
            key: "radius",
            value: "30"
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
            value:"30"
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
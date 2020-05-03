export default {
    name: "EnemyProjectile",
    components: [
      {
        type: "RectangleComponent",
        values: [
          {
            key: "width",
            value: "30"
          },
          {
            key: "height",
            value: "60"
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
        type: "RectangleCollider",
        values:[
          {
            key:"width",
            value:"30"
          },
          {
            key: "height",
            value: "60"
          }
        ]
      },
      {
          type: "EnemyProjectileBehavior",
          values: [

          ]
      },
    ]
  }
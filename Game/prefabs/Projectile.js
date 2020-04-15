export default {
    name: "Projectile",
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
            value: "blue"
          },
          {
            key: "stroke",
            value: "white"
          }
        ]
      },
      {
        type: "PointCollider",
        values: [
          
        ]
      },
      {
          type: "ProjectileBehavior",
          values: [

          ]
      },
    ]
  }
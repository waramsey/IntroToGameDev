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
            value: "blue"
          }
        ]
      },
      {
        type: "CircleCollider",
        values:[
          {
            key:"radius",
            value:"5"
          }
        ]
      },
      {
          type: "ProjectileBehavior",
          values: [

          ]
      },
    ]
  }
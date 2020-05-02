export default {
    name: "HealthDrop",
    tag: "pickup",
    components: [
      {
        type: "CircleComponent",
        values: [
          {
            key: "radius",
            value: "4"
          },
          {
            key: "fill",
            value: "green"
          },
          {
            key: "stroke",
            value: "green"
          }
        ]
      },
      {
        type: "CircleCollider",
        values:[
          {
            key:"radius",
            value:"4"
          }
        ]
      },
      {
          type: "HealthDropBehavior",
      },
    ]
  }
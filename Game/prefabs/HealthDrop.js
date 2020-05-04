export default {
    name: "HealthDrop",
    tag: "pickup",
    components: [
      {
        type: "CircleComponent",
        values: [
          {
            key: "radius",
            value: "7"
          },
          {
            key: "fill",
            value: "rgba(0,255,0,.7)"
          },
          {
            key: "stroke",
            value: "rgba(0,255,0,.7)"
          }
        ]
      },
      {
        type: "CircleCollider",
        values:[
          {
            key:"radius",
            value:"7"
          }
        ]
      },
      {
          type: "HealthDropBehavior",
      },
      {
        type: "GrowShrink",
      }
    ]
  }
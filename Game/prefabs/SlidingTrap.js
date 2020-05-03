export default {
    name: "SlidingTrap",
    tag: "Enemy",
    components: [
      {
        type: "CircleComponent",
        values: [
            {
              key: "radius",
              value: "25"
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
            value: "25"
          }
        ]
      },
        {
          type: "UpdateUnderCamera"
        },
        {
          type: "SlidingTrapBehavior",
        },
    ]
}
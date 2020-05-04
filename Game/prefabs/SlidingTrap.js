export default {
    name: "SlidingTrap",
    tag: "Enemy",
    components: [
      {
        type: "CircleComponent",
        values: [
            {
              key: "radius",
              value: "15"
            },
            {
              key: "fill",
              value: "grey"
            },
            {
              key: "stroke",
              value: "grey"
            }
        ]
      },
      {
        type: "CircleCollider",
        values: [
          {
            key: "radius",
            value: "15"
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
export default {
  name: "Player",
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
          value: "white"
        },
        {
          key: "stroke",
          value: "white"
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
      type: "CollisionCircleBehavior"
    },
    {
      type: "PlayerBehavior"
    }
  ]
}
export default {
  name: "CollisionRectangle",
  components: [
    {
      type: "RectangleComponent",
      values: [
        {
          key: "width",
          value: "50"
        },
        {
          key: "height",
          value: "50"
        },
        {
          key: "fill",
          value: "rgba(255,255,0,.5)"
        },
        {
          key: "stroke",
          value: "white"
        }
      ]
    },
    {
      type: "RectangleCollider",
      values: [
        {
          key: "w",
          value: "50"
        },
        {
          key: "h",
          value: "50"
        }
      ]
    },
    {
      type: "CollisionRectangleBehavior"
    }
  ]
}
export default {
  name: "Wall",
  components: [
    {
      type: "RectangleComponent",
      values: [
        {
          key: "width",
          value: "45"
        },
        {
          key: "height",
          value: "45"
        },
        {
          key: "fill",
          value: "black"
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
          key: "width",
          value: "49"
        },
        {
          key: "height",
          value: "49"
        }
      ]
    },
    {
      type: "CollisionWallBehavior"
    }
  ]
}
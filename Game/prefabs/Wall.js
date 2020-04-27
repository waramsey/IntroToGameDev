export default {
  name: "Wall",
  tag: "Wall",
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
          key: "w",
          value: "45"
        },
        {
          key: "h",
          value: "45"
        }
      ]
    },
    {
      type: "CollisionWallBehavior"
    }
  ]
}
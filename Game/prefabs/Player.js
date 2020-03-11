export default {
  name: "Player",
  children: [
    {
      name: "hp",
      location: {x:0,y:0},
      type: "EmptyGameObject",
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
              value: "black"
            },
            {
              key: "stroke",
              value: "black"
            }
          ]
        },
        {
          type: "testblackcircle",
        }
      ]
    }
  ],
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
      type: "DotBehavior",
    },
    {
      type: "Point",
    },
    
    /*
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
    */
    {
      type: "PlayerBehavior"
    },
  ]
}
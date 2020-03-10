export default {
  name: "Player",
  children: [
    {
      name: "hp1",
      location: {x:0,y:0},
      type: "EmptyGameObject",
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
              value: "white"
            },
            {
              key: "stroke",
              value: "black"
            }
          ]
        },
        {
          type: "OrbitBehavior",
          values: [
            {
              key: "id",
              value: "1"
            }
          ]
        },
        {
          type: "RGBStroke"
        },
        {
          type: "RGBFill"
        }
      ]
    },
    {
      name: "hp2",
      location: {x:0,y:0},
      type: "EmptyGameObject",
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
              value: "white"
            },
            {
              key: "stroke",
              value: "black"
            }
          ]
        },
        {
          type: "OrbitBehavior",
          values: [
            {
              key: "id",
              value: "2"
            }
          ]
        },
        {
          type: "RGBStroke"
        },
        {
          type: "RGBFill"
        }
      ]
    },
    {
      name: "hp3",
      location: {x:0,y:0},
      type: "EmptyGameObject",
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
              value: "white"
            },
            {
              key: "stroke",
              value: "black"
            }
          ]
        },
        {
          type: "OrbitBehavior",
          values: [
            {
              key: "id",
              value: "3"
            }
          ]
        },
        {
          type: "RGBStroke"
        },
        {
          type: "RGBFill"
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
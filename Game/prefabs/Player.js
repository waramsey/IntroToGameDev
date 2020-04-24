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
              value: "white"
            },
            {
              key: "stroke",
              value: "black"
            }
          ]
        },
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
      type: "CircleCollider",
      values: [
        {
          key: "radius",
          value: "25"
        }
      ]
    },
    {
      type: "CollisionPlayerBehavior",
      values: [
      ]
    },
    {
      type: "HealthBehavior",
      values: [
        {
          key: "health",
          value: "100"
        }
      ]
    },
    {
      type: "MovementBehavior",
      values: [
        {
          key: "playerSpeed",
          value: "10"
        },
      ]
    },
    {
      type: "PlayerAttack",
    },
    // {
    //   type: "EmitParticles",
    //   values: [
    //     {
    //       key: "particleSize",
    //       value: "10"
    //     },
    //     {
    //       key: "fill",
    //       value: "black"
    //     }
    //   ]
    // }
  ]
}
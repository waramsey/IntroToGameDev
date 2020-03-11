export default {
  name: "CollisionDot",
  components:[
    {
      type:"CircleComponent",
      values:[
        {
          key:"radius",
          value:"2"
        },
        {
          key:"fill",
          value:"white"
        },
        {
          key:"stroke",
          value:"white"
        },
      ]
    },
    {
      type:"DotBehavior",
    },
    {
      type:"PointCollider"
    }
  ]
}
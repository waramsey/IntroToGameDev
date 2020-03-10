export default {
    name: "Boss",
    components: [
        {
            type: "RectangleComponent",
            values: [
                {
                    key: "width",
                    value: "100"
                  },
                  {
                    key: "height",
                    value: "100"
                  },
                  {
                    key: "fill",
                    value: "black"
                  },
                  {
                    key: "stroke",
                    value: "red"
                  }
            ]
        },
        {
            type: "BossBehavior"
        }
    ]
}
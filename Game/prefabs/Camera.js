export default {
    name: "Camera",
    components: [
        {
            type:"CameraComponent"
        },
        {
            type: "RectangleCollider",
            values: [
                {
                  key: "w",
                  value: "650"
                },
                {
                  key: "h",
                  value: "450"
                }
              ]
        },
        {
            type: "UpdateUnderCamera"
        }
    ]
}
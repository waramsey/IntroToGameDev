export default{
    name: "FourCornersPattern",
    children: [
        {
            name: "tl",
            location: {x:75,y:75},
            type: "Wall"
        },
        {
            name: "bl",
            location: {x:75,y:375},
            type: "Wall"
        },
        {
            name: "br",
            location: {x:575,y:375},
            type: "Wall"
        },
        {
            name: "tr",
            location: {x:575,y:75},
            type: "Wall"
        },
    ]
}
import Collider from "./Collider.js"


export default class RectangleCollider extends Collider{
    constructor(width, length){
        super();
        this.length = length;
        this.width = width;
    }

}
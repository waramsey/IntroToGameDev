// UNUSED. JUST A SAMPLE FROM PROF CODE.

import Engine from "../../GameEngine/Engine.js";
import CollisionRectangleBehavior from "../behaviors/CollisionRectangleBehavior.js";

export default class CollisionRectangle extends Engine.Base.GameObject{
  constructor(x,y) {
    super(x, y)
    let RectangleComponent = new Engine.Components.RectangleComponent(50, 50, "rgba(255,255,0,.5)", "black");
    this.addComponent(RectangleComponent)
    let RectangleCollider = new Engine.Components.RectangleCollider(50, 50);
    this.addComponent(RectangleCollider);
    let collisionRectangleBehavior = new CollisionRectangleBehavior();
    this.addComponent(collisionRectangleBehavior);

  }

}
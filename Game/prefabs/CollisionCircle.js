import Engine from "../../engine/Engine.js";
import CollisionCircleBehavior from "../behaviors/CollisionCircleBehavior.js"

export default class CollisionCircle extends Engine.Base.GameObject {
  constructor(x, y) {
    super(x, y)
    let circleComponent = new Engine.Components.CircleComponent(50, "rgba(255,255,0,.5)", "black");
    this.addComponent(circleComponent)
    let circlCollider = new Engine.Components.CircleCollider(50);
    this.addComponent(circlCollider);
    let collisionCircleBehavior = new CollisionCircleBehavior();
    this.addComponent(collisionCircleBehavior);

  }

}
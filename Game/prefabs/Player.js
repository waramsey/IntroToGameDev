import Engine from "../../GameEngine/Engine.js";
import CollisionCircleBehavior from "../behaviors/CollisionCircleBehavior.js"
import GameBehaviors from "../GameBehaviors.js";

export default class CollisionCircle extends Engine.Base.GameObject {
  constructor(x, y) {
    super(x, y)
    let circleComponent = new Engine.Components.CircleComponent(25, "white", "white");
    this.addComponent(circleComponent)
    let circleCollider = new Engine.Components.CircleCollider(25);
    this.addComponent(circleCollider);
    let collisionCircleBehavior = new CollisionCircleBehavior();
    this.addComponent(collisionCircleBehavior);
    this.addComponent(new GameBehaviors.PlayerBehavior());

  }

}
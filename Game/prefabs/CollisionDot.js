// UNUSED. JUST A SAMPLE FROM PROF CODE.

import Engine from "../../GameEngine/Engine.js";
import DotBehavior from "../behaviors/DotBehavior.js";

export default class CollisionDot extends Engine.Base.GameObject{
  constructor(x,y) {
    super(x,y)
    let circleComponent = new Engine.Components.CircleComponent(2, "black", "black");
    this.addComponent(circleComponent);
    let dotBehavior = new DotBehavior();
    this.addComponent(dotBehavior);
    let Point = new Engine.Components.Point();
    this.addComponent(Point);

  }

}
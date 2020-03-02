import CircleCollider from "./CircleCollider.js";
import PointCollider from "./PointCollider.js";

export default class CollisionHelper {

    static inCollision(one, two) {
        if (one.collider instanceof CircleCollider && two.collider instanceof PointCollider) {
            let locationOne = one.gameObject.location;
            let locationTwo = two.gameObject.location;
            let radius = one.collider.radius;
            if (locationOne.distance(locationTwo) < radius) {
                return true;
            } else {
                return false;
            }
        } else if (one.collider instanceof PointCollider && two.collider instanceof CircleCollider) {
            return this.inCollision(two, one);
        }
    }
}
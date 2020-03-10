import CircleCollider from "./CircleCollider.js"
import RectangleCollider from "./RectangleCollider.js"
import PointCollider from "./PointCollider.js";

export default class CollisionHelper{
   
        static inCollision(one, two){
            if(one.collider instanceof CircleCollider && two.collider instanceof PointCollider){
                let distance = one.gameObject.location.distance(two.gameObject.location);
                
                if(distance < one.collider.radius)
                    return true;
                return false;
            }
            else if(one.collider instanceof RectangleCollider && two.collider instanceof PointCollider){
                //
            }
            else if(one.collider instanceof CircleCollider && two.collider instanceof RectangleCollider){
                //
            }
            else if(one.collider instanceof CircleCollider && two.collider instanceof CircleCollider){
                //
            }
            else if(one.collider instanceof RectangleCollider && two.collider instanceof RectangleCollider){
                //
            }   
            else if(one.collider instanceof PointCollider && two.collider instanceof CircleCollider){
                return this.inCollision(two,one);
            }
            else if(one.collider instanceof PointCollider && two.collider instanceof RectangleCollider){
                return this.inCollision(two,one);
            }
            else if(one.collider instanceof RectangleCollider && two.collider instanceof CircleCollider){
                return this.inCollision(two,one);
            }            
        }
    
}
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
                let w;
                let h;
                one.gameObject.components.filter(i => i.width).forEach(i => w = i.width);
                one.gameObject.components.filter(i => i.height).forEach(i => h = i.height);
                
                let TLx = one.gameObject.location.x - 0.5 * w;
                let TLy = one.gameObject.location.y - 0.5 * h;
                let BRx = one.gameObject.location.x + 0.5 * w;
                let BRy = one.gameObject.location.y + 0.5 * h;
                let Px = two.gameObject.location.x;
                let Py = two.gameObject.location.y;

                if(TLx < Px && Px < BRx && TLy < Py && Py < BRy)
                    return true;
                return false;
            }
            else if(one.collider instanceof CircleCollider && two.collider instanceof RectangleCollider){
                //TODO
            }
            else if(one.collider instanceof CircleCollider && two.collider instanceof CircleCollider){
                let distance = one.gameObject.location.distance(two.gameObject.location);

                if(distance < parseInt(one.collider.radius) + parseInt(two.collider.radius))
                    return true;
                return false;
            }
            else if(one.collider instanceof RectangleCollider && two.collider instanceof RectangleCollider){
                if (one.gameObject.x < two.gameObject.x + two.collider.width && one.gameObject.x + one.collider.width > two.gameObject.x &&
                    one.gameObject.y < two.gameObject.y + two.collider.height && one.gameObject.y + one.collider.height > two.gameObect.y)
                    return true;
                return false;
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
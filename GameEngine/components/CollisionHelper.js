import CircleCollider from "./CircleCollider.js"
import RectangleCollider from "./RectangleCollider.js"

export default class CollisionHelper{
   
        static inCollision(one, two){
            if(one.collider instanceof CircleCollider && two.collider instanceof RectangleCollider){
                let distance = one.gameObject.location.distance(two.gameObject.location);
                
                if(distance < one.collider.radius)
                    return true;
                return false;
            }
            else if(one.collider instanceof RectangleCollider && two.collider instanceof CircleCollider){
                return this.inCollision(two,one);

            // rectangles have sides, how to deal with that? 

            //else if(one.collider instanceof RectangleCollider && two.collider instanceof RectangleCollider){
              //  let distance = one.gameObject.location.distance(two.gmaeObject.location);

                //if(distance < one.collider...)


            //}
            }
            
        }
    
}
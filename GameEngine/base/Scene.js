import NameableParent from "./NameableParent.js"
import Point from "./Point.js"
import GameObject from "./GameObject.js";

export default class Scene extends NameableParent {
  static gameObjects = [];
  static components = [];
  static gameBehaviors = [];

  constructor(name) {
    super(name);
    this.start();
  }

  static parse(obj) {
    let toReturn = new Scene(obj.name);
    toReturn.objects = obj.objects;
    return toReturn;
  }

  start2() {

    this.children = [];

    //Load a scene from a declarative syntax

    if (this.objects) {
      this.children = [];
      for (let i = 0; i < this.objects.length; i++) {
        let obj = this.objects[i];
        this.buildChild2(obj, this.children)
      }
    }
  }

  start() {
    this.children = [];

    //Load a scene from a declarative syntax

    if (this.objects) {
      this.children = [];
      for (let i = 0; i < this.objects.length; i++) {
        let obj = this.objects[i];
        this.buildChild(obj, this.children)
      }
    }
  }

  buildChild2(obj, parent) {
    let gameObjectType = null;
    let keys = Object.keys(Scene.gameObjects)
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      if (key == obj.type) {
        gameObjectType = Scene.gameObjects[key];
        break;
      }
    }
    if (gameObjectType == null) throw "Could now find game object of type " + obj.type;
    let gameObject = this.instantiate(gameObjectType, new Point(obj.location.x, obj.location.y), obj.rotation, parent);
    gameObject.name = obj.name;
    this.buildIt(obj, gameObject);
  }

  buildIt(obj, gameObject) {
    if (obj.children) {
      for (let i = 0; i < obj.children.length; i++) {
        let child = obj.children[i];
        this.buildChild2(child, gameObject.children);
      }
    }

    //Set the key-pair values on components already on prefabs
    if (obj.componentValues) {
      for (let j = 0; j < obj.componentValues.length; j++) {
        let componentValue = obj.componentValues[j]
        let type = componentValue.type;
        let component = gameObject.getComponent(type);
        let values = componentValue.values;
        for (let k = 0; k < values.length; k++) {
          let value = values[k];
          component[value.key] = value.value;
        }
      }
    }

    //Add new components
    if (obj.components) {
      for (let i = 0; i < obj.components.length; i++) {
        let componentInfo = obj.components[i];

        let componentString = componentInfo.type;
        let componentType = null;
        let componentKeys = Object.keys(Scene.components);
        let behaviorKeys = Object.keys(Scene.gameBehaviors);
        for (let i = 0; i < componentKeys.length; i++) {
          let key = componentKeys[i];
          if (key == componentString) {
            componentType = Scene.components[key];
            break
          }
        }
        if (componentType == null) {
          for (let i = 0; i < behaviorKeys.length; i++) {
            let key = behaviorKeys[i]
            if (key == componentString) {
              componentType = Scene.gameBehaviors[key]
              break;
            }
          }
        }
        if (componentType == null) throw "Could not find component " + componentString;
        let component = new componentType();
        gameObject.addComponent(component);
        if (componentInfo.values) {

          //Now set the key-value pairs on the new component we just made
          let componentValues = componentInfo.values;
          for (let v = 0; v < componentValues.length; v++) {
            let value = componentValues[v];
            let key = value.key;
            let val = value.value;
            component[key] = val;
          }
        }
      }
    }
  }

  buildChild(obj, parent) {
    let gameObject = this.instantiate(obj.type, obj.location, obj.rotation, parent);
    gameObject.name = obj.name;

    if (obj.children) {
      for (let i = 0; i < obj.children.length; i++) {
        let child = obj.children[i];
        this.buildChild(child, gameObject.children);
      }

    }

    if (obj.componentValues) {
      for (let j = 0; j < obj.componentValues.length; j++) {
        let componentValue = obj.componentValues[j]
        let type = componentValue.type;
        let component = gameObject.getComponent(type);
        let values = componentValue.values;
        for (let k = 0; k < values.length; k++) {
          let value = values[k];
          component[value.key] = value.value;
        }
      }
    }
    if (obj.components) {
      for (let i = 0; i < obj.components.length; i++) {
        let componentInfo = obj.components[i];
        let component = new componentInfo.type();
        gameObject.addComponent(component);

      }
    }
  }

  draw(ctx, width, height) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height)

    this.children.filter(i => i.draw).forEach(i => i.draw(ctx));
  }

  update(collidableType, collisionHelper) {
    this.children.filter(i => i.update).forEach(i => i.update());

    //Add collision behavior
    let collidableChildren = [];
    this.getCollidable(this.children, collidableChildren, collidableType);

    for (let i = 0; i < collidableChildren.length; i++) {
      for (let j = i + 1; j < collidableChildren.length; j++) {
        if (collisionHelper.inCollision(collidableChildren[i], collidableChildren[j])) {
          let gameObjectOne = collidableChildren[i].gameObject;
          let gameObjectTwo = collidableChildren[j].gameObject;

          //Now loop over all the behaviors too see if any are listening for collision events
          for (let i = 0; i < gameObjectOne.components.length; i++) {
            let component = gameObjectOne.components[i];
            if (component.onCollisionStay)
              component.onCollisionStay(collidableChildren[j]);
          }
          for (let j = 0; j < gameObjectTwo.components.length; j++) {
            let component = gameObjectTwo.components[j];
            if (component.onCollisionStay)
              component.onCollisionStay(collidableChildren[i]);
          }

        }
      }
    }
  }

  getCollidable(children, collidableChildren, type) {


    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      try {
        let collidableComponent = child.getComponent(type);
        if (collidableComponent) {
          collidableChildren.push({ collider: collidableComponent, gameObject: child });
        }
      } catch (e) {
        let x = 1;//no-op
      }
      for (let j = 0; j < child.children.length; j++) {
        this.getCollidable(child.children[j], collidableChildren);
      }
    }
  }

  destroy(gameObject) {
    this.children = this.children.filter(i => i != gameObject);
  }

  instantiate(gameObjectType, location, rotation, parent) {
    let gameObject = new GameObject(location.x, location.y, 1, 1, rotation); //SCALE AND ROTATION?
    parent.push(gameObject);
    let prefab = Scene.gameObjects[gameObjectType.name];
    this.buildIt(prefab, gameObject);
    gameObject.recursiveCall("start");
    return gameObject;
  }
}
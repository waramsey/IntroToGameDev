import Engine from "../GameEngine/Engine.js"
import GameBehaviors from "./GameBehaviors.js";
import GameObjects from "./GameObjects.js";

export default class SceneManager {
    static scenes = [];
    static _currentSceneIndex = -1;
    static get currentScene() {
        if (this._currentSceneIndex == -1) throw "Current scene index not set.  Cannot get current scene."
        if (this.scenes.length == 0) throw "There are no scenes in the scene manager.  Cannot get current scene."
        if (this._currentSceneIndex >= this.scenes.length) throw "Current scene index is out of bounds.  Cannot get current scene."
        return this.scenes[this._currentSceneIndex];
    }

    static set currentScene(argument) {
        if (argument instanceof Engine.Base.Scene) {
            let index = this.scenes.indexOf(argument);
            if (index != -1) {
                this._currentSceneIndex == this.scenes.length - 1;
            } else {
                this.scenes.push(argument);
                this._currentSceneIndex == this.scenes.length - 1;
            }
        } else {
            if (typeof argument === "string") {
                let index = this.scenes.findIndex(i=>i.name == argument);
                if (index != -1) {
                    this._currentSceneIndex = index;
                } else throw "No scene has that name.  Current scene index not set."
            } else {
                let index = +argument;
                if (index < 0) throw "Index is out of bounds.  Current scene index not set."
                if (index >= this.scenes.length) throw "Index is out of bounds.  Current scene index not set."
                this._currentSceneIndex = +argument;
            }
        }
        this.scenes[this._currentSceneIndex].start2(GameBehaviors, GameObjects, Engine.Components);
    }

    static addScene(scene) {
        this.scenes.push(scene);
    }
    static destroy(gameObject) {
        this.currentScene.destroy(gameObject);
    }
    static instantiate(gameObjectType, location, rotation) {
        return this.currentScene.instantiate(gameObjectType, location, rotation, this.currentScene.children);
    }
}
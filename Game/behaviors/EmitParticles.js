import ParticleRenderer from "../../GameEngine/components/ParticleRenderer.js"
import GameObject from "../../GameEngine/base/GameObject.js"
import Component from "../../GameEngine/base/Component.js"
import ParticleOut from "./ParticleOut.js"
import SceneManager from "../SceneManager.js"

export default class EmitParticles extends Component {
    fill;
    particleSize;
    // scene;
    pCount = 0;
    colorArr = ["white","grey"];

    constructor(fill, particleSize, scene) {
        super();
        this.fill = fill;
        this.particleSize = particleSize;
        this.scene = scene;
    }

    update() {
        let particle = new GameObject(this.gameObject.x,this.gameObject.y);
        particle.addComponent(new ParticleOut());
        particle.addComponent(new ParticleRenderer(this.fill,this.colorArr[this.pCount%this.colorArr.length],this.particleSize));
        // this.gameObject.children.push(particle);
        // console.log(SceneManager.currentScene)
        SceneManager.currentScene.children.push(particle);
        this.pCount++;
    }
}
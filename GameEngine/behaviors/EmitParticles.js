import ParticleRenderer from "../components/ParticleRenderer.js"
import GameObject from "../base/GameObject.js"
import Component from "../base/Component.js"
import ParticleOut from "./ParticleOut.js"

class EmitParticles extends Component {
    fill;
    particleSize;
    scene;
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
        this.scene.gameObjects.push(particle);

        this.pCount++;
    }
}

export default EmitParticles;
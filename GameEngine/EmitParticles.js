import ParticleRenderer from "./ParticleRenderer.js"
import GameObject from "./GameObject.js"
import Behavior from "./Behavior.js";

class EmitParticles extends Behavior {
    fill;
    stroke;
    particleSize;
    scene;

    constructor(fill, stroke, particleSize, scene) {
        super();
        this.fill = fill;
        this.stroke = stroke;
        this.particleSize = particleSize;
        this.scene = scene;
    }

    update() {
        let particle = new GameObject(this.gameObject.x,this.gameObject.y);
        particle.addComponent(new ParticleRenderer("blue","blue"));
        this.scene.gameObjects.push(particle);
    }
}

export default EmitParticles;
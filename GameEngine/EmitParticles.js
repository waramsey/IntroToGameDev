import ParticleRenderer from "./ParticleRenderer.js"
import GameObject from "./GameObject.js"
import Component from "./Component.js"
import ParticleOut from "./ParticleOut.js"

class EmitParticles extends Component {
    fill;
    stroke;
    particleSize;
    scene;
    pCount = 0;
    colorArr = ["red","orange","yellow","green","blue","purple"];

    constructor(fill, stroke, particleSize, scene) {
        super();
        this.fill = fill;
        this.stroke = stroke;
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
// import Component from "../../GameEngine/base/Component.js"

export default class ParticleOut {
    maxSpeed = 10;
    xSpeed = Math.random() * this.maxSpeed - this.maxSpeed/2;
    ySpeed = Math.random() * this.maxSpeed - this.maxSpeed/2;

    update() {
        this.gameObject.velocityX = this.xSpeed;
        this.gameObject.velocityY = this.ySpeed;
    }
}
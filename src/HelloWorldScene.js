import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene {
	constructor() {
		super('hello-world')
	}

	preload() {
		this.load.setBaseURL('../')

		this.load.image('sky', '/public/assets/space/nebula.png')
		this.load.image('logo', '/public/assets/space/ship.png')
		this.load.image('red', '/public/assets/space/muzzleflash7.png')
	}

	create() {
		this.add.image(400, 300, 'sky')

		const particles = this.add.particles('red')

		const emitter = particles.createEmitter({
			speed: 100,
			scale: { start: 1, end: 0 },
			blendMode: 'ADD',
		})

		const logo = this.physics.add.image(400, 100, 'logo')

		logo.setVelocity(100, 200)
		logo.setBounce(1, 1)
		logo.setCollideWorldBounds(true)

		emitter.startFollow(logo)
	}
}
/**
 * MyVehicle
 * @constructor
 */
class MyVehicle extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
		this.wheel = new MyCylinder(this.scene,20,1);
		this.tyre2 = new MyCircle(this.scene, 20);
		this.quad = new MyQuad(this.scene);
	};

	display() 
	{
		// Hood
		this.scene.pushMatrix();
		
		this.scene.popMatrix();

		// Wheels
		this.scene.pushMatrix();
		this.wheel.display();
		this.scene.scale(0.8,0.8,0.8);
		this.wheel.display();
		this.scene.translate(0,0,1);
		this.scene.scale(1.2,1.2,1.2);
		this.tyre2.display();
		this.scene.translate(0,0,-1);
		this.tyre2.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(8,0,0);
		this.wheel.display();
		this.scene.scale(0.8,0.8,0.8);
		this.wheel.display();
		this.scene.translate(0,0,1);
		this.scene.scale(1.2,1.2,1.2);
		this.tyre2.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0,5);
		this.wheel.display();
		this.scene.scale(0.8,0.8,0.8);
		this.wheel.display();
		this.scene.translate(0,0,1);
		this.scene.scale(1.2,1.2,1.2);
		this.tyre2.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(8,0,5);
		this.wheel.display();
		this.scene.scale(0.8,0.8,0.8);
		this.wheel.display();
		this.scene.translate(0,0,1);
		this.scene.scale(1.2,1.2,1.2);
		this.tyre2.display();
		this.scene.popMatrix();

		// Base
		this.scene.pushMatrix();
		
		this.quad.display();
		this.scene.popMatrix();
	};
};

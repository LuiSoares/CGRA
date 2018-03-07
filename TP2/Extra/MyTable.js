/**
 * MyTable
 * @constructor
 */
 class MyTable extends CGFobject
 {
	constructor(scene) 
	{
		super(scene);
		CGFobject.call(this,scene);
	
		this.materialDarkWood = new CGFappearance(this.scene);
		this.materialDarkWood.setAmbient(0.3,0.3,0.3,1);
		this.materialDarkWood.setDiffuse(0.5,0.3,0.1,1);
		this.materialDarkWood.setSpecular(0.1,0.1,0.1,1);	
		this.materialDarkWood.setShininess(50);

		this.materialMetal = new CGFappearance(this.scene);
		this.materialMetal.setAmbient(0.3,0.3,0.3,1);
		this.materialMetal.setDiffuse(0.3,0.3,0.3,1);
		this.materialMetal.setSpecular(0.8,0.80,0.8,1);	
		this.materialMetal.setShininess(500);

		this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
	};

	display() 
	{
		// legs
		this.scene.pushMatrix();
		this.scene.translate(2, 3.5 / 2, 1);
		this.scene.scale(0.3, 3.5, 0.3);
		this.materialMetal.apply();
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(2, 3.5 / 2, -1);
		this.scene.scale(0.3, 3.5, 0.3);
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-2, 3.5 / 2, 1);
		this.scene.scale(0.3, 3.5, 0.3);
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-2, 3.5 / 2, -1);
		this.scene.scale(0.3, 3.5, 0.3);
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();

		// table top
		this.scene.pushMatrix();
		this.scene.translate(0, 3.5, 0);
		this.scene.scale(5, 0.3, 3);
		this.materialDarkWood.apply();
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();
	};
 };


class MyTable extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
		this.cube = new MyUnitCubeQuad(this.scene);

		//1.3
		this.tableAppearance = new CGFappearance(this.scene);
		this.tableAppearance.loadTexture("../resources/images/table.png");
		this.tableAppearance.setDiffuse(0.7,0.7,0.7,1);
  		this.tableAppearance.setSpecular(0.1,0.1,0.1,1);
  		this.tableAppearance.setShininess(12);




	};

	display()
	{
		this.tableAppearance.apply();
		
		this.scene.pushMatrix();
		this.scene.translate(0, 3.5 + 0.3/2, 0);
		this.scene.scale(5, 0.3, 3);
		this.cube.display();
		this.scene.popMatrix();

			
		this.scene.pushMatrix();
		this.scene.translate(5/2.0 - 0.3/2, 3.5/2, 3/2.0 - 0.3/2);
		this.scene.scale(0.3, 3.5, 0.3);
		this.cube.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-5/2.0 + 0.3/2, 3.5/2, 3/2.0 - 0.3/2);
		this.scene.scale(0.3, 3.5, 0.3);
		this.cube.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(5/2.0 - 0.3/2, 3.5/2, -3/2.0 + 0.3/2);
		this.scene.scale(0.3, 3.5, 0.3);
		this.cube.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-5/2.0 + 0.3/2, 3.5/2, -3/2.0 + 0.3/2);
		this.scene.scale(0.3, 3.5, 0.3);
		this.cube.display();
		this.scene.popMatrix();
	}
};

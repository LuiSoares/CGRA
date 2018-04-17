class MyClock extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
		this.cilindro= new MyCylinder(this.scene,12,1);
		this.circ= new MyCircle(this.scene,12);
		this.clockAppearance = new CGFappearance(this.scene);
		this.clockAppearance.loadTexture("../resources/images/clock.png");
		

	};
	
	display()
	{
		this.cilindro.display();
		
		this.clockAppearance.apply();
		this.scene.pushMatrix();
		this.scene.translate(0,0,1);
		this.circ.display();
		this.scene.popMatrix();
	};
};
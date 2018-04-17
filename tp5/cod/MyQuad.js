/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
/*function MyQuad(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyQuad.prototype = Object.create(CGFobject.prototype);
MyQuad.prototype.constructor=MyQuad;

MyQuad.prototype.initBuffers = function () {
	this.vertices = [
            -0.5, -0.5, 0,
            0.5, -0.5,0,  
            0.5, 0.5, 0,   
            -0.5, 0.5, 0,  
			];

	this.indices = [
		
          0,1,2,  
          2,3,0,  
        ];

    this.normals = [
		0, 0, 1,
		0, 0, 1,
		0, 0, 1,
		0, 0, 1,
    ]

	//1.1. Edite o método initBuffers ​da classe MyQuad
    this.texCoords = [
	1,0,
	1,1,
	0,1,
	0,0,
    ];
	
		
	this.primitiveType=this.scene.gl.TRIANGLES;


	this.initGLBuffers();
};*/


//2.1 1. Pretende-se que altere o construtor da classe MyQuad, para permitir indicar como parâmetrosos valores minS, maxS, minT, maxT
class MyQuad extends CGFobject
{
	constructor(scene, minS, maxS, minT, maxT) 
	{
		super(scene);
		this.minS = minS || 0.0;
		this.maxS = maxS || 1.0;
		this.minT = minT || 0.0;
		this.maxT = maxT || 1.0;
		this.initBuffers();
	};

	initBuffers()                        //tudo igual exceto texCoords e construtor
	{
		this.vertices = [
				-0.5, -0.5, 0,
				0.5, -0.5, 0,
				-0.5, 0.5, 0,
				0.5, 0.5, 0
			];

		this.indices = [
				0, 1, 2, 
				3, 2, 1
			];

		this.normals = [
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1
			];
			
		
		this.texCoords = [
				this.minS, this.maxT,
      			this.maxS, this.maxT,
      			this.minS, this.minT,
      			this.maxS, this.minT
			];

		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};

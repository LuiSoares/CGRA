class MyUnitCube extends CGFobject
{
    constructor(scene) 
    {
        super(scene);
        this.initBuffers();
    };

    initBuffers() 
    {
        this.vertices = 
        [ -0.5, -0.5, -0.5,
           0.5, -0.5, -0.5,
          -0.5,  0.5, -0.5,
           0.5,  0.5, -0.5,
          -0.5, -0.5, 0.5,
           0.5, -0.5, 0.5,
          -0.5,  0.5, 0.5,
           0.5,  0.5, 0.5 ];

        this.indices = 
        [ 2, 3, 1, 
          1, 0, 2,
          4, 5, 7,
          7, 6, 4,
          5, 1, 3,
          3, 7, 5,
          6, 2, 0,
          0, 4, 6,
          6, 7, 3,
          3, 2, 6,
          4, 0, 1,
          1, 5, 4 ];
            
        this.primitiveType=this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    };
};
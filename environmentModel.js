import { LIBS } from "./libs.js";
import { MyObject } from "./myObject.js";
import * as Environment from "./environmentParts.js";

export function createEnvironmentModel(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix) {
// Grassy Ground Plane
  const groundVertices = [
    // x, y, z,  r, g, b
    -10, -4.0, -10, 0.22, 0.55, 0.18, // dark green base
    10, -4.0, -10, 0.22, 0.55, 0.18,
    10, -4.0,  10, 0.25, 0.65, 0.20,  // slight variation
    -10, -4.0,  10, 0.25, 0.65, 0.20,
  ];
  const groundFaces = [
    0, 1, 2,
    0, 2, 3,  
  ];
    var Ground = new MyObject(
    Gl,
    SHADER_PROGRAM,
    _position,
    _color,
    _Mmatrix,
    groundVertices,
    groundFaces
  );
  LIBS.set_I4(Ground.MOVE_MATRIX);
  LIBS.translateY(Ground.MOVE_MATRIX, 2.8);
  Ground.setup();

  //Sun
    var sun = Environment.generateSunSphere(1.5, 16, 24, [1.0, 0.95, 0.6]); 
    var Sun = new MyObject(
        Gl,
        SHADER_PROGRAM,
        _position,
        _color,
        _Mmatrix,
        sun.vertices,
        sun.faces
    );
    LIBS.set_I4(Sun.MOVE_MATRIX);
    LIBS.translateX(Sun.MOVE_MATRIX, 6.0);
    LIBS.translateY(Sun.MOVE_MATRIX, 6.0);
    LIBS.translateZ(Sun.MOVE_MATRIX, -8.0);
    Sun.setup();

    // Trees
      const trees = [];
      const treePositions = [
        [-4.0, 0.9, -3.0],
        [3.5, 0.9, 1.0],
        [0.0, 0.9, 1.0],
      ];
      for (let pos of treePositions) {
        const [trunk, foliage] = Environment.generateTree(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, pos[0], pos[1], pos[2]);
        trees.push(trunk, foliage);
      }
    
      // Clouds
      const clouds = [
        ...Environment.generateCloud(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, -4, 6, -4, 1.0),
        ...Environment.generateCloud(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, 2, 5.5, -2, 0.8),
        ...Environment.generateCloud(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, 0, 6.5, 2, 1.1),
      ];

    return {
        Sun : Sun,
        Ground : Ground,
        trees : trees,
        clouds : clouds,
    }
}
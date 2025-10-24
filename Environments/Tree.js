import { LIBS } from "../libs.js";
import { MyObject } from "../myObject.js";
import { generateSunSphere } from "./Sun.js";
import { generateCube } from "./Cube.js"; 

export function generateTree(Gl, program, position, color, Mmatrix, x, y, z) {
// ───────── Trunk (cube) ─────────
  const trunk = generateCube([0.55, 0.27, 0.07]); // brown color
  const trunkObj = new MyObject(Gl, program, position, color, Mmatrix, trunk.vertices, trunk.faces);

  // Move and scale trunk
  LIBS.translateX(trunkObj.MOVE_MATRIX, x);
  LIBS.translateY(trunkObj.MOVE_MATRIX, y - 1.5);
  LIBS.translateZ(trunkObj.MOVE_MATRIX, z);
  LIBS.scaleX(trunkObj.MOVE_MATRIX, 0.25); // thin tall cube
  LIBS.scaleY(trunkObj.MOVE_MATRIX, 0.8);
  LIBS.scaleZ(trunkObj.MOVE_MATRIX, 0.25);

  // ───────── Foliage (sphere) ─────────
  const foliage = generateSunSphere(0.6, 16, 24, [0.2, 0.8, 0.2]); // green top
  const foliageObj = new MyObject(Gl, program, position, color, Mmatrix, foliage.vertices, foliage.faces);
  LIBS.translateX(foliageObj.MOVE_MATRIX, x);
  LIBS.translateY(foliageObj.MOVE_MATRIX, y - 0.2);
  LIBS.translateZ(foliageObj.MOVE_MATRIX, z);

  trunkObj.setup();
  foliageObj.setup();

  return [trunkObj, foliageObj];
}

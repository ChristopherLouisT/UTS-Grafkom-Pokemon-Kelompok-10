import { LIBS } from "../libs.js";
import { MyObject } from "../myObject.js";
import { generateSunSphere } from "./Sun.js";

export function generateCloud(Gl, program, position, color, Mmatrix, x, y, z, scale = 1.0) {
  const cloudParts = [];
  const offsets = [
    [0, 0, 0],
    [0.5, 0.1, 0.2],
    [-0.4, -0.1, 0.1],
    [0.2, 0.15, -0.2],
  ];

  for (let off of offsets) {
    const sphere = generateSunSphere(0.6 * scale, 12, 16, [1.0, 1.0, 1.0]);
    const obj = new MyObject(Gl, program, position, color, Mmatrix, sphere.vertices, sphere.faces);
    LIBS.translateX(obj.MOVE_MATRIX, x + off[0]);
    LIBS.translateY(obj.MOVE_MATRIX, y + off[1]);
    LIBS.translateZ(obj.MOVE_MATRIX, z + off[2]);
    obj.setup();
    cloudParts.push(obj);
  }

  return cloudParts;
}
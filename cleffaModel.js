import { LIBS } from "./libs.js";
import { MyObject } from "./myObject.js";
import * as Cleffa from "./cleffaParts.js";

export function createCleffaModel(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix) {
    // Left Eye (width -> x, height -> y, depth -> z, stack, steps)
  const cleffa_leftEye = Cleffa.generateCleffa_Eyes(0.07, 0.2, 0.3, 60, 60);
  const leftEye = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, cleffa_leftEye.vertices, cleffa_leftEye.faces);
  LIBS.translateX(leftEye.MOVE_MATRIX, -0.10); // Left Right
  LIBS.translateY(leftEye.MOVE_MATRIX, 0.25); // Up down
  LIBS.translateZ(leftEye.MOVE_MATRIX, 0.35); //Ke arah kita sebagai pengguna

  const cleffa_rightEye = Cleffa.generateCleffa_Eyes(0.07, 0.2, 0.3, 60, 60);
  const rightEye = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, cleffa_rightEye.vertices, cleffa_rightEye.faces);
  LIBS.translateX(rightEye.MOVE_MATRIX, 0.10);
  LIBS.translateY(rightEye.MOVE_MATRIX, 0.25);
  LIBS.translateZ(rightEye.MOVE_MATRIX, 0.35);

  const cleffa_leftCheek = Cleffa.generateCleffa_Cheek(0.23, 0.07, 0.3, 60, 60);
  const leftCheek = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix,cleffa_leftCheek.vertices, cleffa_leftCheek.faces)
  LIBS.translateX(leftCheek.MOVE_MATRIX, -0.2);
  LIBS.translateY(leftCheek.MOVE_MATRIX, 0.21);
  LIBS.translateZ(leftCheek.MOVE_MATRIX, 0.32);

  const cleffa_rightCheek = Cleffa.generateCleffa_Cheek(0.23, 0.07, 0.3, 60, 60);
  const rightCheek = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix,cleffa_rightCheek.vertices, cleffa_rightCheek.faces)
  LIBS.translateX(rightCheek.MOVE_MATRIX, 0.2);
  LIBS.translateY(rightCheek.MOVE_MATRIX, 0.21);
  LIBS.translateZ(rightCheek.MOVE_MATRIX, 0.32);

  const cleffa_leftFeet = Cleffa.generateCleffa_Feet(0.32, 0.32, 0.65, 60, 60)
  const leftFeet = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, cleffa_leftFeet.vertices, cleffa_leftFeet.faces)
  LIBS.translateX(leftFeet.MOVE_MATRIX, -0.325);
  LIBS.translateY(leftFeet.MOVE_MATRIX, -0.48);
  LIBS.translateZ(leftFeet.MOVE_MATRIX, 0);
  LIBS.rotateX(leftFeet.MOVE_MATRIX, 102.1)
  LIBS.rotateZ(leftFeet.MOVE_MATRIX, 0)

  const cleffa_rightFeet = Cleffa.generateCleffa_Feet(0.32, 0.32, 0.65, 60, 60)
  const rightFeet = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, cleffa_rightFeet.vertices, cleffa_leftFeet.faces)
  LIBS.translateX(rightFeet.MOVE_MATRIX, 0.325);
  LIBS.translateY(rightFeet.MOVE_MATRIX, -0.48);
  LIBS.translateZ(rightFeet.MOVE_MATRIX, 0);
  LIBS.rotateX(rightFeet.MOVE_MATRIX, 102.1)
  LIBS.rotateZ(rightFeet.MOVE_MATRIX, -0.)

  const cleffa_leftHorn = Cleffa.generateCleffa_Horn(0.425, 0.40, 0.8, 60, 60)
  const leftHorn = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, cleffa_leftHorn.vertices, cleffa_leftHorn.faces)
  LIBS.translateX(leftHorn.MOVE_MATRIX, -0.65);
  LIBS.translateY(leftHorn.MOVE_MATRIX, 0.375);
  LIBS.translateZ(leftHorn.MOVE_MATRIX, 0);
  LIBS.rotateX(leftHorn.MOVE_MATRIX, -102)
  LIBS.rotateY(leftHorn.MOVE_MATRIX, 30)
  LIBS.rotateZ(leftHorn.MOVE_MATRIX, 26.55)

  const cleffa_rightHorn = Cleffa.generateCleffa_Horn(0.425, 0.40, 0.8, 60, 60)
  const rightHorn = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, cleffa_rightHorn.vertices, cleffa_rightHorn.faces)
  LIBS.translateX(rightHorn.MOVE_MATRIX, 0.65);
  LIBS.translateY(rightHorn.MOVE_MATRIX, 0.375);
  LIBS.translateZ(rightHorn.MOVE_MATRIX, 0);
  LIBS.rotateX(rightHorn.MOVE_MATRIX, -102)
  LIBS.rotateY(rightHorn.MOVE_MATRIX, -30)
  LIBS.rotateZ(rightHorn.MOVE_MATRIX, -26.55)

  const cleffa_leftHand = Cleffa.generateCleffa_Hand(0.3, 0.25, 0.4, 60, 60, -1)
  const leftHand = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, cleffa_leftHand.vertices, cleffa_leftHand.faces)
  LIBS.translateX(leftHand.MOVE_MATRIX, -0.45);
  LIBS.translateY(leftHand.MOVE_MATRIX, -0.25);
  LIBS.translateZ(leftHand.MOVE_MATRIX, 0.4);
  LIBS.rotateX(leftHand.MOVE_MATRIX, -107.1)
  LIBS.rotateY(leftHand.MOVE_MATRIX, 37)
  LIBS.rotateZ(leftHand.MOVE_MATRIX, 26)

  const cleffa_rightHand = Cleffa.generateCleffa_Hand(0.3, 0.25, 0.4, 60, 60, 1)
  const rightHand = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, cleffa_rightHand.vertices, cleffa_rightHand.faces)
  LIBS.translateX(rightHand.MOVE_MATRIX, 0.45);
  LIBS.translateY(rightHand.MOVE_MATRIX, -0.25);
  LIBS.translateZ(rightHand.MOVE_MATRIX, 0.4);
  LIBS.rotateX(rightHand.MOVE_MATRIX, -107.1)
  LIBS.rotateY(rightHand.MOVE_MATRIX, -37)
  LIBS.rotateZ(rightHand.MOVE_MATRIX, -26)

  const cleffa_tail = Cleffa.generateCleffa_Tail(0.35, 0.15, 0.25, 80, 28)
  const tail = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, cleffa_tail.vertices, cleffa_tail.faces)
  LIBS.translateX(tail.MOVE_MATRIX, 0);
  LIBS.translateY(tail.MOVE_MATRIX, -0.25);
  LIBS.translateZ(tail.MOVE_MATRIX, -0.95);
  LIBS.rotateY(tail.MOVE_MATRIX, 30)
  LIBS.rotateX(tail.MOVE_MATRIX, 120.5)

  const cleffa_swirl = Cleffa.generateCleffa_Swirl(0.15, 0.15, 0.15, 80, 28)
  const swirl = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, cleffa_swirl.vertices, cleffa_swirl.faces)
  LIBS.translateX(swirl.MOVE_MATRIX, 0);
  LIBS.translateY(swirl.MOVE_MATRIX, 0.55);
  LIBS.translateZ(swirl.MOVE_MATRIX, 0.55);
  LIBS.rotateY(swirl.MOVE_MATRIX, 50)
  LIBS.rotateX(swirl.MOVE_MATRIX, 10)
  LIBS.rotateZ(swirl.MOVE_MATRIX, 15)

  const cleffa_mouth = Cleffa.generateCleffa_Mouth(0.15, 0.15, 0.15, 80, 28)
  const mouth = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, cleffa_mouth.vertices, cleffa_mouth.faces)
  LIBS.translateX(mouth.MOVE_MATRIX, 0);
  LIBS.translateY(mouth.MOVE_MATRIX, 0.05);
  LIBS.translateZ(mouth.MOVE_MATRIX, 0.50);
  LIBS.rotateY(mouth.MOVE_MATRIX, 0)
  LIBS.rotateX(mouth.MOVE_MATRIX, 5)
  LIBS.rotateZ(mouth.MOVE_MATRIX, 0)

  // Body
  const cleffa_body = Cleffa.generateCleffa_Body(0.7, 0.8, 0.67, 65, 60)
  const body = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, cleffa_body.vertices, cleffa_body.faces)

  body.childs.push(leftEye)
  body.childs.push(rightEye)
  body.childs.push(leftCheek)
  body.childs.push(rightCheek)
  body.childs.push(leftFeet)
  body.childs.push(rightFeet)
  body.childs.push(leftHorn)
  body.childs.push(rightHorn)
  body.childs.push(leftHand)
  body.childs.push(rightHand)
  body.childs.push(tail)
  body.childs.push(swirl)
  body.childs.push(mouth)
  body.setup()

  return {
    body: body,
    leftFeet: leftFeet,
    rightFeet: rightFeet,
    leftHand: leftHand,
    rightHand: rightHand,
    leftEye: leftEye,
    rightEye: rightEye,
    leftHorn: leftHorn,
    rightHorn: rightHorn,
    tail: tail,
    swirl: swirl
  }; // Return the complete model
}
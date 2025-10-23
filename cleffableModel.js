import { LIBS } from "./libs.js";
import { MyObject } from "./myObject.js";
import * as Cleffable from "./cleffableParts.js";

export function createCleffableModel(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix) {
    // Left Eye (width -> x, height -> y, depth -> z, stack, steps)
  const Clefable_leftEye = Cleffable.generateClefable_Eyes(0.08, 0.3, 0.3, 60, 60);
  const leftEye = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, Clefable_leftEye.vertices, Clefable_leftEye.faces);
  LIBS.translateX(leftEye.MOVE_MATRIX, -0.20); // Left Right
  LIBS.translateY(leftEye.MOVE_MATRIX, 0.1); // Up down
  LIBS.translateZ(leftEye.MOVE_MATRIX, 0.285); //Ke arah kita sebagai pengguna

  const Clefable_rightEye = Cleffable.generateClefable_Eyes(0.08, 0.3, 0.3, 60, 60);
  const rightEye = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, Clefable_rightEye.vertices, Clefable_rightEye.faces);
  LIBS.translateX(rightEye.MOVE_MATRIX, 0.20);
  LIBS.translateY(rightEye.MOVE_MATRIX, 0.1);
  LIBS.translateZ(rightEye.MOVE_MATRIX, 0.285);

/*   const Clefable_leftCheek = Cleffable.generateClefable_Cheek(0.2, 0.07, 0.3, 60, 60);
  const leftCheek = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix,Clefable_leftCheek.vertices, Clefable_leftCheek.faces)
  LIBS.translateX(leftCheek.MOVE_MATRIX, -0.25);
  LIBS.translateY(leftCheek.MOVE_MATRIX, 0.1);
  LIBS.translateZ(leftCheek.MOVE_MATRIX, 0.26);

  const Clefable_rightCheek = Cleffable.generateClefable_Cheek(0.2, 0.07, 0.3, 60, 60);
  const rightCheek = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix,Clefable_rightCheek.vertices, Clefable_rightCheek.faces)
  LIBS.translateX(rightCheek.MOVE_MATRIX, 0.25);
  LIBS.translateY(rightCheek.MOVE_MATRIX, 0.1);
  LIBS.translateZ(rightCheek.MOVE_MATRIX, 0.26); */

  const Clefable_leftFeet = Cleffable.generateClefable_Feet(0.28, 0.35,0.65, 60, 60)
  const leftFeet = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, Clefable_leftFeet.vertices, Clefable_leftFeet.faces)
  LIBS.translateX(leftFeet.MOVE_MATRIX, -0.29);
  LIBS.translateY(leftFeet.MOVE_MATRIX, -0.65);
  LIBS.translateZ(leftFeet.MOVE_MATRIX, 0.1);
  LIBS.rotateX(leftFeet.MOVE_MATRIX, 102)

  const Clefable_rightFeet = Cleffable.generateClefable_Feet(0.28, 0.35, 0.65, 60, 60)
  const rightFeet = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, Clefable_rightFeet.vertices, Clefable_leftFeet.faces)
  LIBS.translateX(rightFeet.MOVE_MATRIX, 0.29);
  LIBS.translateY(rightFeet.MOVE_MATRIX, -0.65);
  LIBS.translateZ(rightFeet.MOVE_MATRIX, 0.1);
  LIBS.rotateX(rightFeet.MOVE_MATRIX, 102)

  const Clefable_leftHorn = Cleffable.generateClefable_Horns(0.18, 0.12,0.8, 60, 60)
  const leftHorn = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, Clefable_leftHorn.vertices, Clefable_leftHorn.faces)
  LIBS.translateX(leftHorn.MOVE_MATRIX, -0.6);
  LIBS.translateY(leftHorn.MOVE_MATRIX, 0.72);
  LIBS.translateZ(leftHorn.MOVE_MATRIX, 0.1);
  LIBS.rotateX(leftHorn.MOVE_MATRIX, -102)
  LIBS.rotateZ(leftHorn.MOVE_MATRIX, 20)

  const Clefable_rightHorn = Cleffable.generateClefable_Horns(0.18, 0.12, 0.8, 60, 60)
  const rightHorn = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, Clefable_rightHorn.vertices, Clefable_leftHorn.faces)
  LIBS.translateX(rightHorn.MOVE_MATRIX, 0.6); 
  LIBS.translateY(rightHorn.MOVE_MATRIX, 0.72);  
  LIBS.translateZ(rightHorn.MOVE_MATRIX, 0.1);
  LIBS.rotateX(rightHorn.MOVE_MATRIX, -102)
  LIBS.rotateZ(rightHorn.MOVE_MATRIX, -20)

  const Clefable_leftWing = Cleffable.generateClefable_Wing(0.28, 0.22, 0.89, 60, 60)
  const leftWing = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, Clefable_leftWing.vertices, Clefable_leftWing.faces)
  LIBS.translateX(leftWing.MOVE_MATRIX, -0.65);
  LIBS.translateY(leftWing.MOVE_MATRIX, 0.4);
  LIBS.translateZ(leftWing.MOVE_MATRIX, -0.38);
  LIBS.rotateZ(leftWing.MOVE_MATRIX,14)
  LIBS.rotateY(leftWing.MOVE_MATRIX,18)
  LIBS.rotateX(leftWing.MOVE_MATRIX,-1)

  const Clefable_leftWing2 = Cleffable.generateClefable_Wing(0.28, 0.22, 0.8, 60, 60)
  const leftWing2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, Clefable_leftWing2.vertices, Clefable_leftWing2.faces)
  LIBS.translateX(leftWing2.MOVE_MATRIX, -0.66);
  LIBS.translateY(leftWing2.MOVE_MATRIX, 0.2);
  LIBS.translateZ(leftWing2.MOVE_MATRIX, -0.31);
  LIBS.rotateZ(leftWing2.MOVE_MATRIX,14)
  LIBS.rotateY(leftWing2.MOVE_MATRIX,18)
  LIBS.rotateX(leftWing2.MOVE_MATRIX,12);

  const Clefable_leftWing3 = Cleffable.generateClefable_Wing(0.28, 0.22, 0.62, 60, 60)
  const leftWing3 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, Clefable_leftWing3.vertices, Clefable_leftWing3.faces)
  LIBS.translateX(leftWing3.MOVE_MATRIX, -0.64);
  LIBS.translateY(leftWing3.MOVE_MATRIX, 0);
  LIBS.translateZ(leftWing3.MOVE_MATRIX, -0.26);
  LIBS.rotateZ(leftWing3.MOVE_MATRIX,14)
  LIBS.rotateY(leftWing3.MOVE_MATRIX,18)

  const Clefable_rightWing = Cleffable.generateClefable_Wing(0.28, 0.22, 0.89, 60, 60)
  const rightWing = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, Clefable_rightWing.vertices, Clefable_rightWing.faces)
  LIBS.translateX(rightWing.MOVE_MATRIX, 0.65);
  LIBS.translateY(rightWing.MOVE_MATRIX, 0.4);
  LIBS.translateZ(rightWing.MOVE_MATRIX, -0.38);
  LIBS.rotateZ(rightWing.MOVE_MATRIX,14)
  LIBS.rotateY(rightWing.MOVE_MATRIX,-18)
  LIBS.rotateX(rightWing.MOVE_MATRIX,-1)

  const Clefable_rightWing2 = Cleffable.generateClefable_Wing(0.28, 0.22, 0.8, 60, 60)
  const rightWing2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, Clefable_rightWing2.vertices, Clefable_rightWing2.faces)
  LIBS.translateX(rightWing2.MOVE_MATRIX, 0.66);
  LIBS.translateY(rightWing2.MOVE_MATRIX, 0.2);
  LIBS.translateZ(rightWing2.MOVE_MATRIX, -0.31);
  LIBS.rotateZ(rightWing2.MOVE_MATRIX,14)
  LIBS.rotateY(rightWing2.MOVE_MATRIX,-18)
  LIBS.rotateX(rightWing2.MOVE_MATRIX,12);

  const Clefable_rightWing3 = Cleffable.generateClefable_Wing(0.28, 0.22, 0.62, 60, 60)
  const rightWing3 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, Clefable_rightWing3.vertices, Clefable_rightWing3.faces)
  LIBS.translateX(rightWing3.MOVE_MATRIX, 0.64);
  LIBS.translateY(rightWing3.MOVE_MATRIX, 0);
  LIBS.translateZ(rightWing3.MOVE_MATRIX, -0.26);
  LIBS.rotateZ(rightWing3.MOVE_MATRIX,14)
  LIBS.rotateY(rightWing3.MOVE_MATRIX,-18)

  const Clefable_leftHand = Cleffable.generateClefairy_Hand(0.25,0.25,0.8,60,60);
  const leftHand = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, Clefable_leftHand.vertices, Clefable_leftHand.faces)
  LIBS.translateX(leftHand.MOVE_MATRIX, -0.88);
  LIBS.translateY(leftHand.MOVE_MATRIX, 0.1);
  LIBS.translateZ(leftHand.MOVE_MATRIX, 0.27);
  LIBS.rotateY(leftHand.MOVE_MATRIX,5)

  const Clefable_rightHand = Cleffable.generateClefairy_Hand(0.25,0.25,0.8,60,60);
  const rightHand = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, Clefable_rightHand.vertices, Clefable_rightHand.faces)
  LIBS.translateX(rightHand.MOVE_MATRIX, 0.88);
  LIBS.translateY(rightHand.MOVE_MATRIX, 0.1);
  LIBS.translateZ(rightHand.MOVE_MATRIX, 0.27);
  LIBS.rotateY(rightHand.MOVE_MATRIX,-5)
  

  const Clefable_hair = Cleffable.generateClefable_Hair(0.2, 0.1, 0.3, 80, 28);
  const hair = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, Clefable_hair.vertices, Clefable_hair.faces)
  LIBS.translateY(hair.MOVE_MATRIX, 0.5);  
  LIBS.translateZ(hair.MOVE_MATRIX, 0.4);
  LIBS.rotateX(hair.MOVE_MATRIX, 12);
  // LIBS.rotateZ(hair.MOVE_MATRIX, 180)
  // LIBS.rotateY(hair.MOVE_MATRIX, 116)
  
  const Clefable_tail = Cleffable.generateClefairy_Tail(0.35, 0.15, 0.25, 80, 28)
  const tail = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, Clefable_tail.vertices, Clefable_tail.faces)
  LIBS.translateX(tail.MOVE_MATRIX, 0.2); 
  LIBS.translateY(tail.MOVE_MATRIX, -0.5);  
  LIBS.translateZ(tail.MOVE_MATRIX, -1);
  LIBS.rotateY(tail.MOVE_MATRIX,-90);
  LIBS.rotateZ(tail.MOVE_MATRIX,0);
  // Body
  const Clefable_body = Cleffable.generateClefable_Body(0.7, 0.7, 0.65, 60, 60)
  const body = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, Clefable_body.vertices, Clefable_body.faces)
  LIBS.rotateX(body.MOVE_MATRIX,-90);  

  body.childs.push(leftEye)
  body.childs.push(rightEye)
  body.childs.push(leftFeet)
  body.childs.push(rightFeet)
  body.childs.push(leftHand)
  body.childs.push(rightHand)
  body.childs.push(leftHorn)
  body.childs.push(rightHorn)
  body.childs.push(hair)
  body.childs.push(tail)
  body.childs.push(leftWing)
  body.childs.push(leftWing2)
  body.childs.push(leftWing3)
  body.childs.push(rightWing)
  body.childs.push(rightWing2)
  body.childs.push(rightWing3)

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
    swirl: hair
  }; // Return the complete model
}
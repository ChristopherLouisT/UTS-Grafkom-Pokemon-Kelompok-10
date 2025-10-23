// // Left Eye (width -> x, height -> y, depth -> z, stack, steps)
//   const clefairy_leftEye = Clefairy.generateClefairy_Eyes(0.07, 0.2, 0.3, 60, 60);
//   const leftEye2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, clefairy_leftEye.vertices, clefairy_leftEye.faces);
//   LIBS.translateX(leftEye2.MOVE_MATRIX, -0.20); // Left Right
//   LIBS.translateY(leftEye2.MOVE_MATRIX, 0.15); // Up down
//   LIBS.translateZ(leftEye2.MOVE_MATRIX, 0.325); //Ke arah kita sebagai pengguna

//   const clefairy_rightEye = Clefairy.generateClefairy_Eyes(0.07, 0.2, 0.3, 60, 60);
//   const rightEye2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, clefairy_rightEye.vertices, clefairy_rightEye.faces);
//   LIBS.translateX(rightEye2.MOVE_MATRIX, 0.20);
//   LIBS.translateY(rightEye2.MOVE_MATRIX, 0.15);
//   LIBS.translateZ(rightEye2.MOVE_MATRIX, 0.325);

//   const clefairy_leftCheek = Clefairy.generateClefairy_Cheek(0.2, 0.07, 0.3, 60, 60);
//   const leftCheek2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix,clefairy_leftCheek.vertices, clefairy_leftCheek.faces)
//   LIBS.translateX(leftCheek2.MOVE_MATRIX, -0.25);
//   LIBS.translateY(leftCheek2.MOVE_MATRIX, 0.05);
//   LIBS.translateZ(leftCheek2.MOVE_MATRIX, 0.325);

//   const clefairy_rightCheek = Clefairy.generateClefairy_Cheek(0.2, 0.07, 0.3, 60, 60);
//   const rightCheek2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix,clefairy_rightCheek.vertices, clefairy_rightCheek.faces)
//   LIBS.translateX(rightCheek2.MOVE_MATRIX, 0.25);
//   LIBS.translateY(rightCheek2.MOVE_MATRIX, 0.05);
//   LIBS.translateZ(rightCheek2.MOVE_MATRIX, 0.325);

//   const clefairy_leftFeet = Clefairy.generateClefairy_Feet(0.34, 0.32, 0.85, 60, 60)
//   const leftFeet2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_leftFeet.vertices, clefairy_leftFeet.faces)
//   LIBS.translateX(leftFeet2.MOVE_MATRIX, -0.305);
//   LIBS.translateY(leftFeet2.MOVE_MATRIX, -0.68);
//   LIBS.translateZ(leftFeet2.MOVE_MATRIX, 0.05);
//   LIBS.rotateX(leftFeet2.MOVE_MATRIX, 102)

//   const clefairy_rightFeet = Clefairy.generateClefairy_Feet(0.34, 0.32, 0.85, 60, 60)
//   const rightFeet2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_rightFeet.vertices, clefairy_leftFeet.faces)
//   LIBS.translateX(rightFeet2.MOVE_MATRIX, 0.305);
//   LIBS.translateY(rightFeet2.MOVE_MATRIX, -0.68);
//   LIBS.translateZ(rightFeet2.MOVE_MATRIX, 0.05);
//   LIBS.rotateX(rightFeet2.MOVE_MATRIX, 102)

//   const clefairy_leftHorn = Clefairy.generateClefairy_Horn(0.30, 0.30,0.8, 60, 60)
//   const leftHorn2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_leftHorn.vertices, clefairy_leftHorn.faces)
//   LIBS.translateX(leftHorn2.MOVE_MATRIX, -0.7);
//   LIBS.translateY(leftHorn2.MOVE_MATRIX, 0.60);
//   LIBS.translateZ(leftHorn2.MOVE_MATRIX, 0.1);
//   LIBS.rotateX(leftHorn2.MOVE_MATRIX, -102)
//   LIBS.rotateY(leftHorn2.MOVE_MATRIX, 30)
//   LIBS.rotateZ(leftHorn2.MOVE_MATRIX, 26)

//   const clefairy_rightHorn = Clefairy.generateClefairy_Horn(0.30, 0.30,0.8, 60, 60)
//   const rightHorn2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_rightHorn.vertices, clefairy_rightHorn.faces)
//   LIBS.translateX(rightHorn2.MOVE_MATRIX, 0.7);
//   LIBS.translateY(rightHorn2.MOVE_MATRIX, 0.60);
//   LIBS.translateZ(rightHorn2.MOVE_MATRIX, 0.1);
//   LIBS.rotateX(rightHorn2.MOVE_MATRIX, -102)
//   LIBS.rotateY(rightHorn2.MOVE_MATRIX, -30)
//   LIBS.rotateZ(rightHorn2.MOVE_MATRIX, -26)

//   const clefairy_leftHand = Clefairy.generateClefairy_Hand(0.3, 0.25, 0.9, 60, 60, -1)
//   const leftHand2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_leftHand.vertices, clefairy_leftHand.faces)
//   LIBS.translateX(leftHand2.MOVE_MATRIX, -0.75);
//   LIBS.translateY(leftHand2.MOVE_MATRIX, -0.05);
//   LIBS.translateZ(leftHand2.MOVE_MATRIX, 0.1);
//   LIBS.rotateX(leftHand2.MOVE_MATRIX, -107.5)
//   LIBS.rotateY(leftHand2.MOVE_MATRIX, 36.5)
//   LIBS.rotateZ(leftHand2.MOVE_MATRIX, 26)

//   const clefairy_rightHand = Clefairy.generateClefairy_Hand(0.3, 0.25, 0.9, 60, 60, 1)
//   const rightHand2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_rightHand.vertices, clefairy_rightHand.faces)
//   LIBS.translateX(rightHand2.MOVE_MATRIX, 0.75);
//   LIBS.translateY(rightHand2.MOVE_MATRIX, -0.05);
//   LIBS.translateZ(rightHand2.MOVE_MATRIX, 0.1);
//   LIBS.rotateX(rightHand2.MOVE_MATRIX, -107.5)
//   LIBS.rotateY(rightHand2.MOVE_MATRIX, -36.5)
//   LIBS.rotateZ(rightHand2.MOVE_MATRIX, -26)

//   const clefairy_tail = Clefairy.generateClefairy_Tail(0.35, 0.15, 0.25, 80, 28)
//   const tail2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_tail.vertices, clefairy_tail.faces)
//   LIBS.translateX(tail2.MOVE_MATRIX, 0);
//   LIBS.translateY(tail2.MOVE_MATRIX, -0.45);
//   LIBS.translateZ(tail2.MOVE_MATRIX, -1.05);
//   LIBS.rotateY(tail2.MOVE_MATRIX, 30)
//   LIBS.rotateX(tail2.MOVE_MATRIX, 120)

//   const clefairy_leftWing = Clefairy.generateClefairy_Wing(0.2, 0.15, 0.7, 60, 60, -1)
//   const leftWing2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_leftWing.vertices, clefairy_leftWing.faces)
//   LIBS.translateX(leftWing2.MOVE_MATRIX, -0.25);
//   LIBS.translateY(leftWing2.MOVE_MATRIX, 0.05);
//   LIBS.translateZ(leftWing2.MOVE_MATRIX, -0.6);
//   LIBS.rotateX(leftWing2.MOVE_MATRIX, -102)
//   LIBS.rotateY(leftWing2.MOVE_MATRIX, -34.25)
//   LIBS.rotateZ(leftWing2.MOVE_MATRIX, -37.5)

//   const clefairy_rightWing = Clefairy.generateClefairy_Wing(0.2, 0.15, 0.7, 60, 60, 1)
//   const rightWing2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_rightWing.vertices, clefairy_rightWing.faces)
//   LIBS.translateX(rightWing2.MOVE_MATRIX, 0.25);
//   LIBS.translateY(rightWing2.MOVE_MATRIX, 0.05);
//   LIBS.translateZ(rightWing2.MOVE_MATRIX, -0.6);
//   LIBS.rotateX(rightWing2.MOVE_MATRIX, -102)
//   LIBS.rotateY(rightWing2.MOVE_MATRIX, 34.25)
//   LIBS.rotateZ(rightWing2.MOVE_MATRIX, 37.5)

//   const clefairy_swirl = Clefairy.generateClefairy_Swirl(0.2, 0.15, 0.25, 80, 28)
//   const swirl2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_swirl.vertices, clefairy_swirl.faces)
//   LIBS.translateX(swirl2.MOVE_MATRIX, 0);
//   LIBS.translateY(swirl2.MOVE_MATRIX, 0.6);
//   LIBS.translateZ(swirl2.MOVE_MATRIX, 0.5);
//   LIBS.rotateY(swirl2.MOVE_MATRIX, 3)
//   LIBS.rotateX(swirl2.MOVE_MATRIX, 30.75)
//   LIBS.rotateZ(swirl2.MOVE_MATRIX, -37.75)

//   const clefairy_leftClaw1 = Clefairy.generateClefairy_Claw(0.02, 0.03 ,0.1, 60, 60)
//   const leftClaw21 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_leftClaw1.vertices, clefairy_leftClaw1.faces)
//   LIBS.translateX(leftClaw21.MOVE_MATRIX, 0.25);
//   LIBS.translateY(leftClaw21.MOVE_MATRIX, 0.045);
//   LIBS.translateZ(leftClaw21.MOVE_MATRIX, 0.375); //x + => -, - => +
//   LIBS.rotateX(leftClaw21.MOVE_MATRIX, -95.5)
//   LIBS.rotateY(leftClaw21.MOVE_MATRIX, -32)
//   LIBS.rotateZ(leftClaw21.MOVE_MATRIX, -27)

//   const clefairy_leftClaw2 = Clefairy.generateClefairy_Claw(0.02, 0.03 ,0.1, 60, 60)
//   const leftClaw22 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_leftClaw2.vertices, clefairy_leftClaw2.faces)
//   LIBS.translateX(leftClaw22.MOVE_MATRIX, 0.25);
//   LIBS.translateY(leftClaw22.MOVE_MATRIX, -0.045);
//   LIBS.translateZ(leftClaw22.MOVE_MATRIX, 0.375); //x + => -, - => +
//   LIBS.rotateX(leftClaw22.MOVE_MATRIX, -95.5)
//   LIBS.rotateY(leftClaw22.MOVE_MATRIX, -32)
//   LIBS.rotateZ(leftClaw22.MOVE_MATRIX, -27)

//   const clefairy_rightClaw1 = Clefairy.generateClefairy_Claw(0.02, 0.03 ,0.1, 60, 60)
//   const rightClaw21 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_rightClaw1.vertices, clefairy_rightClaw1.faces)
//   LIBS.translateX(rightClaw21.MOVE_MATRIX, -0.25);
//   LIBS.translateY(rightClaw21.MOVE_MATRIX, 0.045);
//   LIBS.translateZ(rightClaw21.MOVE_MATRIX, 0.375); //x + => -, - => +
//   LIBS.rotateX(rightClaw21.MOVE_MATRIX, -95.5)
//   LIBS.rotateY(rightClaw21.MOVE_MATRIX, 32)
//   LIBS.rotateZ(rightClaw21.MOVE_MATRIX, 27)

//   const clefairy_rightClaw2 = Clefairy.generateClefairy_Claw(0.02, 0.03 ,0.1, 60, 60)
//   const rightClaw22 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_rightClaw2.vertices, clefairy_rightClaw2.faces)
//   LIBS.translateX(rightClaw22.MOVE_MATRIX, -0.25);
//   LIBS.translateY(rightClaw22.MOVE_MATRIX, -0.045);
//   LIBS.translateZ(rightClaw22.MOVE_MATRIX, 0.375); //x + => -, - => +
//   LIBS.rotateX(rightClaw22.MOVE_MATRIX, -95.5)
//   LIBS.rotateY(rightClaw22.MOVE_MATRIX, 32)
//   LIBS.rotateZ(rightClaw22.MOVE_MATRIX, 27)

//   const clefairy_mouth = Clefairy.generateClefairy_Mouth(0.3, 0.05, 0.3, 100, 100)
//   const mouth2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_mouth.vertices, clefairy_mouth.faces)
//   LIBS.translateX(mouth2.MOVE_MATRIX, 0);
//   LIBS.translateY(mouth2.MOVE_MATRIX, -0.3);
//   LIBS.translateZ(mouth2.MOVE_MATRIX, 0.625);
//   LIBS.rotateY(mouth2.MOVE_MATRIX, 91.125)
//   LIBS.rotateX(mouth2.MOVE_MATRIX, 1.5)

//   // Body
//   const clefairy_body = Clefairy.generateClefairy_Body(0.7, 0.8, 0.65, 60, 60)
//   const body2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, clefairy_body.vertices, clefairy_body.faces)

//   body2.childs.push(leftEye2)
//   body2.childs.push(rightEye2)
//   body2.childs.push(leftCheek2)
//   body2.childs.push(rightCheek2)
//   body2.childs.push(mouth2)
//   body2.childs.push(leftFeet2)
//   body2.childs.push(rightFeet2)
//   body2.childs.push(leftHorn2)
//   body2.childs.push(rightHorn2)
//   body2.childs.push(leftHand2)
//   body2.childs.push(rightHand2)
//   body2.childs.push(tail2)
//   body2.childs.push(leftWing2)
//   body2.childs.push(rightWing2)
//   body2.childs.push(swirl2)
//   leftHand2.childs.push(leftClaw21)
//   leftHand2.childs.push(leftClaw22)
//   rightHand2.childs.push(rightClaw21)
//   rightHand2.childs.push(rightClaw22)

//   body2.setup()
import { LIBS } from "./libs.js";
import { MyObject } from "./myObject.js";
import * as Clefairy from "./clefairyParts.js";

// Export a function that builds the full Clefairy model
export function createClefairyModel(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix) {

  // --- Eyes ---
  const clefairy_leftEye = Clefairy.generateClefairy_Eyes(0.07, 0.2, 0.3, 60, 60);
  const leftEye2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, clefairy_leftEye.vertices, clefairy_leftEye.faces);
  LIBS.translateX(leftEye2.MOVE_MATRIX, -0.20);
  LIBS.translateY(leftEye2.MOVE_MATRIX, 0.15);
  LIBS.translateZ(leftEye2.MOVE_MATRIX, 0.325);

  const clefairy_rightEye = Clefairy.generateClefairy_Eyes(0.07, 0.2, 0.3, 60, 60);
  const rightEye2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, clefairy_rightEye.vertices, clefairy_rightEye.faces);
  LIBS.translateX(rightEye2.MOVE_MATRIX, 0.20);
  LIBS.translateY(rightEye2.MOVE_MATRIX, 0.15);
  LIBS.translateZ(rightEye2.MOVE_MATRIX, 0.325);

  // --- Cheeks ---
  const clefairy_leftCheek = Clefairy.generateClefairy_Cheek(0.2, 0.07, 0.3, 60, 60);
  const leftCheek2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, clefairy_leftCheek.vertices, clefairy_leftCheek.faces);
  LIBS.translateX(leftCheek2.MOVE_MATRIX, -0.25);
  LIBS.translateY(leftCheek2.MOVE_MATRIX, 0.05);
  LIBS.translateZ(leftCheek2.MOVE_MATRIX, 0.325);

  const clefairy_rightCheek = Clefairy.generateClefairy_Cheek(0.2, 0.07, 0.3, 60, 60);
  const rightCheek2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, clefairy_rightCheek.vertices, clefairy_rightCheek.faces);
  LIBS.translateX(rightCheek2.MOVE_MATRIX, 0.25);
  LIBS.translateY(rightCheek2.MOVE_MATRIX, 0.05);
  LIBS.translateZ(rightCheek2.MOVE_MATRIX, 0.325);

  const clefairy_leftFeet = Clefairy.generateClefairy_Feet(0.34, 0.32, 0.85, 60, 60)
    const leftFeet2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_leftFeet.vertices, clefairy_leftFeet.faces)
    LIBS.translateX(leftFeet2.MOVE_MATRIX, -0.305);
    LIBS.translateY(leftFeet2.MOVE_MATRIX, -0.68);
    LIBS.translateZ(leftFeet2.MOVE_MATRIX, 0.05);
    LIBS.rotateX(leftFeet2.MOVE_MATRIX, 102)
  
    const clefairy_rightFeet = Clefairy.generateClefairy_Feet(0.34, 0.32, 0.85, 60, 60)
    const rightFeet2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_rightFeet.vertices, clefairy_leftFeet.faces)
    LIBS.translateX(rightFeet2.MOVE_MATRIX, 0.305);
    LIBS.translateY(rightFeet2.MOVE_MATRIX, -0.68);
    LIBS.translateZ(rightFeet2.MOVE_MATRIX, 0.05);
    LIBS.rotateX(rightFeet2.MOVE_MATRIX, 102)
  
    const clefairy_leftHorn = Clefairy.generateClefairy_Horn(0.30, 0.30,0.8, 60, 60)
    const leftHorn2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_leftHorn.vertices, clefairy_leftHorn.faces)
    LIBS.translateX(leftHorn2.MOVE_MATRIX, -0.7);
    LIBS.translateY(leftHorn2.MOVE_MATRIX, 0.60);
    LIBS.translateZ(leftHorn2.MOVE_MATRIX, 0.1);
    LIBS.rotateX(leftHorn2.MOVE_MATRIX, -102)
    LIBS.rotateY(leftHorn2.MOVE_MATRIX, 30)
    LIBS.rotateZ(leftHorn2.MOVE_MATRIX, 26)
  
    const clefairy_rightHorn = Clefairy.generateClefairy_Horn(0.30, 0.30,0.8, 60, 60)
    const rightHorn2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_rightHorn.vertices, clefairy_rightHorn.faces)
    LIBS.translateX(rightHorn2.MOVE_MATRIX, 0.7);
    LIBS.translateY(rightHorn2.MOVE_MATRIX, 0.60);
    LIBS.translateZ(rightHorn2.MOVE_MATRIX, 0.1);
    LIBS.rotateX(rightHorn2.MOVE_MATRIX, -102)
    LIBS.rotateY(rightHorn2.MOVE_MATRIX, -30)
    LIBS.rotateZ(rightHorn2.MOVE_MATRIX, -26)
  
    const clefairy_leftHand = Clefairy.generateClefairy_Hand(0.3, 0.25, 0.9, 60, 60, -1)
    const leftHand2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_leftHand.vertices, clefairy_leftHand.faces)
    LIBS.translateX(leftHand2.MOVE_MATRIX, -0.75);
    LIBS.translateY(leftHand2.MOVE_MATRIX, -0.05);
    LIBS.translateZ(leftHand2.MOVE_MATRIX, 0.1);
    LIBS.rotateX(leftHand2.MOVE_MATRIX, -107.5)
    LIBS.rotateY(leftHand2.MOVE_MATRIX, 36.5)
    LIBS.rotateZ(leftHand2.MOVE_MATRIX, 26)
  
    const clefairy_rightHand = Clefairy.generateClefairy_Hand(0.3, 0.25, 0.9, 60, 60, 1)
    const rightHand2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_rightHand.vertices, clefairy_rightHand.faces)
    LIBS.translateX(rightHand2.MOVE_MATRIX, 0.75);
    LIBS.translateY(rightHand2.MOVE_MATRIX, -0.05);
    LIBS.translateZ(rightHand2.MOVE_MATRIX, 0.1);
    LIBS.rotateX(rightHand2.MOVE_MATRIX, -107.5)
    LIBS.rotateY(rightHand2.MOVE_MATRIX, -36.5)
    LIBS.rotateZ(rightHand2.MOVE_MATRIX, -26)
  
    const clefairy_tail = Clefairy.generateClefairy_Tail(0.35, 0.15, 0.25, 80, 28)
    const tail2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_tail.vertices, clefairy_tail.faces)
    LIBS.translateX(tail2.MOVE_MATRIX, 0);
    LIBS.translateY(tail2.MOVE_MATRIX, -0.45);
    LIBS.translateZ(tail2.MOVE_MATRIX, -1.05);
    LIBS.rotateY(tail2.MOVE_MATRIX, 30)
    LIBS.rotateX(tail2.MOVE_MATRIX, 120)
  
    const clefairy_leftWing = Clefairy.generateClefairy_Wing(0.2, 0.15, 0.7, 60, 60, -1)
    const leftWing2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_leftWing.vertices, clefairy_leftWing.faces)
    LIBS.translateX(leftWing2.MOVE_MATRIX, -0.25);
    LIBS.translateY(leftWing2.MOVE_MATRIX, 0.05);
    LIBS.translateZ(leftWing2.MOVE_MATRIX, -0.6);
    LIBS.rotateX(leftWing2.MOVE_MATRIX, -102)
    LIBS.rotateY(leftWing2.MOVE_MATRIX, -34.25)
    LIBS.rotateZ(leftWing2.MOVE_MATRIX, -37.5)
  
    const clefairy_rightWing = Clefairy.generateClefairy_Wing(0.2, 0.15, 0.7, 60, 60, 1)
    const rightWing2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_rightWing.vertices, clefairy_rightWing.faces)
    LIBS.translateX(rightWing2.MOVE_MATRIX, 0.25);
    LIBS.translateY(rightWing2.MOVE_MATRIX, 0.05);
    LIBS.translateZ(rightWing2.MOVE_MATRIX, -0.6);
    LIBS.rotateX(rightWing2.MOVE_MATRIX, -102)
    LIBS.rotateY(rightWing2.MOVE_MATRIX, 34.25)
    LIBS.rotateZ(rightWing2.MOVE_MATRIX, 37.5)
  
    const clefairy_swirl = Clefairy.generateClefairy_Swirl(0.2, 0.15, 0.25, 80, 28)
    const swirl2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_swirl.vertices, clefairy_swirl.faces)
    LIBS.translateX(swirl2.MOVE_MATRIX, 0);
    LIBS.translateY(swirl2.MOVE_MATRIX, 0.6);
    LIBS.translateZ(swirl2.MOVE_MATRIX, 0.5);
    LIBS.rotateY(swirl2.MOVE_MATRIX, 3)
    LIBS.rotateX(swirl2.MOVE_MATRIX, 30.75)
    LIBS.rotateZ(swirl2.MOVE_MATRIX, -37.75)
  
    const clefairy_leftClaw1 = Clefairy.generateClefairy_Claw(0.02, 0.03 ,0.1, 60, 60)
    const leftClaw21 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_leftClaw1.vertices, clefairy_leftClaw1.faces)
    LIBS.translateX(leftClaw21.MOVE_MATRIX, 0.25);
    LIBS.translateY(leftClaw21.MOVE_MATRIX, 0.045);
    LIBS.translateZ(leftClaw21.MOVE_MATRIX, 0.375); //x + => -, - => +
    LIBS.rotateX(leftClaw21.MOVE_MATRIX, -95.5)
    LIBS.rotateY(leftClaw21.MOVE_MATRIX, -32)
    LIBS.rotateZ(leftClaw21.MOVE_MATRIX, -27)
  
    const clefairy_leftClaw2 = Clefairy.generateClefairy_Claw(0.02, 0.03 ,0.1, 60, 60)
    const leftClaw22 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_leftClaw2.vertices, clefairy_leftClaw2.faces)
    LIBS.translateX(leftClaw22.MOVE_MATRIX, 0.25);
    LIBS.translateY(leftClaw22.MOVE_MATRIX, -0.045);
    LIBS.translateZ(leftClaw22.MOVE_MATRIX, 0.375); //x + => -, - => +
    LIBS.rotateX(leftClaw22.MOVE_MATRIX, -95.5)
    LIBS.rotateY(leftClaw22.MOVE_MATRIX, -32)
    LIBS.rotateZ(leftClaw22.MOVE_MATRIX, -27)
  
    const clefairy_rightClaw1 = Clefairy.generateClefairy_Claw(0.02, 0.03 ,0.1, 60, 60)
    const rightClaw21 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_rightClaw1.vertices, clefairy_rightClaw1.faces)
    LIBS.translateX(rightClaw21.MOVE_MATRIX, -0.25);
    LIBS.translateY(rightClaw21.MOVE_MATRIX, 0.045);
    LIBS.translateZ(rightClaw21.MOVE_MATRIX, 0.375); //x + => -, - => +
    LIBS.rotateX(rightClaw21.MOVE_MATRIX, -95.5)
    LIBS.rotateY(rightClaw21.MOVE_MATRIX, 32)
    LIBS.rotateZ(rightClaw21.MOVE_MATRIX, 27)
  
    const clefairy_rightClaw2 = Clefairy.generateClefairy_Claw(0.02, 0.03 ,0.1, 60, 60)
    const rightClaw22 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_rightClaw2.vertices, clefairy_rightClaw2.faces)
    LIBS.translateX(rightClaw22.MOVE_MATRIX, -0.25);
    LIBS.translateY(rightClaw22.MOVE_MATRIX, -0.045);
    LIBS.translateZ(rightClaw22.MOVE_MATRIX, 0.375); //x + => -, - => +
    LIBS.rotateX(rightClaw22.MOVE_MATRIX, -95.5)
    LIBS.rotateY(rightClaw22.MOVE_MATRIX, 32)
    LIBS.rotateZ(rightClaw22.MOVE_MATRIX, 27)
  
    const clefairy_mouth = Clefairy.generateClefairy_Mouth(0.3, 0.05, 0.3, 100, 100)
    const mouth2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color,  _Mmatrix, clefairy_mouth.vertices, clefairy_mouth.faces)
    LIBS.translateX(mouth2.MOVE_MATRIX, 0);
    LIBS.translateY(mouth2.MOVE_MATRIX, -0.3);
    LIBS.translateZ(mouth2.MOVE_MATRIX, 0.625);
    LIBS.rotateY(mouth2.MOVE_MATRIX, 91.125)
    LIBS.rotateX(mouth2.MOVE_MATRIX, 1.5)

  // --- Body ---
  const clefairy_body = Clefairy.generateClefairy_Body(0.7, 0.8, 0.65, 60, 60);
  const body2 = new MyObject(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix, clefairy_body.vertices, clefairy_body.faces);

  body2.childs.push(leftEye2)
  body2.childs.push(rightEye2)
  body2.childs.push(leftCheek2)
  body2.childs.push(rightCheek2)
  body2.childs.push(mouth2)
  body2.childs.push(leftFeet2)
  body2.childs.push(rightFeet2)
  body2.childs.push(leftHorn2)
  body2.childs.push(rightHorn2)
  body2.childs.push(leftHand2)
  body2.childs.push(rightHand2)
  body2.childs.push(tail2)
  body2.childs.push(leftWing2)
  body2.childs.push(rightWing2)
  body2.childs.push(swirl2)
  leftHand2.childs.push(leftClaw21)
  leftHand2.childs.push(leftClaw22)
  rightHand2.childs.push(rightClaw21)
  rightHand2.childs.push(rightClaw22)
  body2.setup();

  return {
    body: body2,
    leftFeet: leftFeet2,
    rightFeet: rightFeet2,
    leftHand: leftHand2,
    rightHand: rightHand2,
    leftEye: leftEye2,
    rightEye: rightEye2,
    leftHorn: leftHorn2,
    rightHorn: rightHorn2,
    tail: tail2,
    swirl: swirl2
  }; // Return the complete model
}

import { LIBS } from "./libs.js";
import { MyObject } from "./myObject.js";
import { Clefairy } from "./pokemonParts.js";
import { Cleffable } from "./pokemonParts.js";
import { createCleffaModel } from "./cleffaModel.js";
import { createClefairyModel } from "./clefairyModel.js";
import { createCleffableModel } from "./cleffableModel.js";


function main() {
  var CANVAS = document.getElementById("myCanvas");
  CANVAS.width = window.innerWidth;
  CANVAS.height = window.innerHeight;

  let Gl;
  try {
    Gl = CANVAS.getContext("webgl", { antialias: true });
  } catch (e) {
    alert("WebGL not supported");
    console.log(e);
    return false;
  }

  // ───────────────── Shaders ─────────────────
  var shader_vertex_source = `
    attribute vec3 position;
    uniform mat4 Pmatrix, Vmatrix, Mmatrix;
    attribute vec3 color;
    varying vec3 vColor;
    void main(void) {
      gl_Position = Pmatrix * Vmatrix * Mmatrix * vec4(position, 1.);
      vColor = color;
    }
  `;

  var shader_fragment_source = `
    precision mediump float;
    varying vec3 vColor;
    uniform float uAlpha;     // NEW: per-object opacity
    void main(void) {
      gl_FragColor = vec4(vColor, uAlpha);
    }
  `;
  var compile_shader = function (source, type, typeString) {
    var shader = Gl.createShader(type);
    Gl.shaderSource(shader, source);
    Gl.compileShader(shader);
    if (!Gl.getShaderParameter(shader, Gl.COMPILE_STATUS)) {
      console.error(
        "Error in " + typeString + " shader: " + Gl.getShaderInfoLog(shader)
      );
      Gl.deleteShader(shader);
      return null;
    }
    return shader;
  };

  var SHADER_PROGRAM = Gl.createProgram();
  var shader_vertex = compile_shader(
    shader_vertex_source,
    Gl.VERTEX_SHADER,
    "vertex"
  );
  var shader_fragment = compile_shader(
    shader_fragment_source,
    Gl.FRAGMENT_SHADER,
    "fragment"
  );
  Gl.attachShader(SHADER_PROGRAM, shader_vertex);
  Gl.attachShader(SHADER_PROGRAM, shader_fragment);
  Gl.linkProgram(SHADER_PROGRAM);

  var _position = Gl.getAttribLocation(SHADER_PROGRAM, "position");
  var _color = Gl.getAttribLocation(SHADER_PROGRAM, "color");
  var _Pmatrix = Gl.getUniformLocation(SHADER_PROGRAM, "Pmatrix");
  var _Vmatrix = Gl.getUniformLocation(SHADER_PROGRAM, "Vmatrix");
  var _Mmatrix = Gl.getUniformLocation(SHADER_PROGRAM, "Mmatrix");

  Gl.enableVertexAttribArray(_position);
  Gl.enableVertexAttribArray(_color);

  Gl.enable(Gl.BLEND);
  Gl.blendFunc(Gl.SRC_ALPHA, Gl.ONE_MINUS_SRC_ALPHA);
  Gl.useProgram(SHADER_PROGRAM);

  // Example usage:
  const cleffa = createCleffaModel(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix);
  const clefairy = createClefairyModel(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix);
  const cleffable = createCleffableModel(Gl, SHADER_PROGRAM, _position, _color, _Mmatrix);

  var PROJMATRIX = LIBS.get_projection(
    60,
    CANVAS.width / CANVAS.height,
    1,
    100
  );
  var VIEWMATRIX = LIBS.get_I4();
  LIBS.translateZ(VIEWMATRIX, -3);
  LIBS.translateX(VIEWMATRIX, 6)
  LIBS.rotateY(cleffa.body.MOVE_MATRIX, -Math.PI);
  LIBS.rotateY(clefairy.body.MOVE_MATRIX, -Math.PI);
  LIBS.rotateY(cleffable.body.MOVE_MATRIX, -Math.PI);

  let THETA = 0,
    PHI = 0;
  let drag = false,
    x_prev,
    y_prev;
  let dX = 0,
    dY = 0;
  var FRICTION = 0.05;

  var mouseDown = (e) => {
    drag = true;
    x_prev = e.pageX;
    y_prev = e.pageY;
    e.preventDefault();
  };
  var mouseUp = () => {
    drag = false;
  };
  var mouseMove = (e) => {
    if (!drag) return false;
    dX = ((e.pageX - x_prev) * 2 * Math.PI) / CANVAS.width;
    dY = ((e.pageY - y_prev) * 2 * Math.PI) / CANVAS.height;
    THETA += dX;
    PHI += dY;
    x_prev = e.pageX;
    y_prev = e.pageY;
    e.preventDefault();
  };
  CANVAS.addEventListener("mousedown", mouseDown, false);
  CANVAS.addEventListener("mouseup", mouseUp, false);
  CANVAS.addEventListener("mouseout", mouseUp, false);
  CANVAS.addEventListener("mousemove", mouseMove, false);

  Gl.enable(Gl.DEPTH_TEST);
  Gl.depthFunc(Gl.LEQUAL);
  Gl.clearColor(0,0,0,1);
  Gl.clearDepth(1.0);

  let autoRotate = 0;

  let waveTimeCleffa = 0;
  let bodyTimeCleffa = 0;
  let walkTimeCleffa = 0;
  let jumpTimeCleffa = 0;
  let jumpDurationCleffa = Math.PI;

  let waveTimeClefairy = 0;
  let bodyTimeClefairy = 0;
  let walkTimeClefairy = 0;
  let jumpTimeClefairy = 0;
  let jumpDurationClefairy = Math.PI;

  let waveTimeCleffable = 0;
  let bodyTimeCleffable = 0;
  let walkTimeCleffable = 0;
  let jumpTimeCleffable = 0;
  let jumpDurationCleffable = Math.PI;

  let targetScaleCleffa = 1.0;
  let currentScaleCleffa = 1.0;
  let scaleSpeedCleffa = 0.05;

  let targetScaleClefairy = 1.0;
  let currentScaleClefairy = 1.0;
  let scaleSpeedClefairy = 0.05;

  let targetScaleCleffable = 1.0;
  let currentScaleCleffable = 1.0;
  let scaleSpeedCleffable = 0.05;

  let isJumpingCleffa = false;
  let isWavingCleffa = false;
  let isWalkingCleffa = false;

  let isJumpingClefairy = false;
  let isWavingClefairy = false;
  let isWalkingClefairy = false;

  let isJumpingCleffable = false;
  let isWavingCleffable = false;
  let isWalkingCleffable = false;

  window.addEventListener("keydown", (e) => {
    if (e.key === "h" || e.key === "H") {
      isWavingClefairy = !isWavingClefairy;
    } 
    else if (e.key === "j" || e.key === "J") {
      isWavingCleffable = !isWavingCleffable;
    } 
    else if (e.key === "k" || e.key === "K") {
      isWavingCleffa = !isWavingCleffa;
    } 


    else if (e.key === "w" || e.key === "W") {
      isWalkingClefairy = !isWalkingClefairy;
    }
    else if (e.key === "e" || e.key === "E") {
      isWalkingCleffable = !isWalkingCleffable;
    }
    else if (e.key === "r" || e.key === "R") {
      isWalkingCleffa = !isWalkingCleffa;
    }


    else if (e.key === " " || e.key === " ") {
      isJumpingClefairy = !isJumpingClefairy
      if (!isJumpingClefairy) {
        jumpTimeClefairy = 0;
      }
    }
    else if (e.key === "Shift") {
      isJumpingCleffable = !isJumpingCleffable
      if (!isJumpingCleffable) {
        jumpTimeCleffable = 0;
      }
    }

    else if (e.key === "Enter") {
      isJumpingCleffa = !isJumpingCleffa
      if (!isJumpingCleffa) {
        jumpTimeCleffa = 0;
      }
    }

    else if (e.key === "ArrowUp") {
    targetScaleClefairy = Math.min(2.0, targetScaleClefairy + 0.2); // limit max size
    } 
    else if (e.key === "a" || e.key === "A") {
    targetScaleCleffable = Math.min(2.0, targetScaleCleffable + 0.2); // limit max size
    }
    else if (e.key === "1" ) {
    targetScaleCleffa = Math.min(2.0, targetScaleCleffa + 0.2); // limit max size
    }
    
    
    else if (e.key === "ArrowDown") {
      targetScaleClefairy = Math.max(0.5, targetScaleClefairy - 0.2); // limit min size
    }
    else if (e.key === "d" || e.key === "D") {
      targetScaleCleffable = Math.max(0.5, targetScaleCleffable - 0.2); // limit min size
    }
    else if (e.key === "2") {
      targetScaleCleffa = Math.max(0.5, targetScaleCleffa - 0.2); // limit min size
    }

    else if (e.key == "ArrowRight") {
      LIBS.translateX(VIEWMATRIX, -1);
    }
    else if (e.key == "ArrowLeft") {
      LIBS.translateX(VIEWMATRIX, 1);
    }
  });


  var animate = function () {
    Gl.viewport(0, 0, CANVAS.width, CANVAS.height);
    Gl.clear(Gl.COLOR_BUFFER_BIT | Gl.DEPTH_BUFFER_BIT);

    clefairy.body.MOVE_MATRIX = LIBS.get_I4();
    cleffable.body.MOVE_MATRIX = LIBS.get_I4();
    cleffa.body.MOVE_MATRIX = LIBS.get_I4()
    LIBS.translateX(cleffa.body.MOVE_MATRIX, -6);
    LIBS.translateX(cleffable.body.MOVE_MATRIX, 6);
    LIBS.rotateX(cleffa.body.MOVE_MATRIX, (20 * Math.PI) / 180);
    LIBS.rotateX(clefairy.body.MOVE_MATRIX, (20 * Math.PI) / 180);
    LIBS.rotateX(cleffable.body.MOVE_MATRIX, (20 * Math.PI) / 180);

    let temp = LIBS.get_I4();
    LIBS.rotateY(temp, THETA);
    cleffa.body.MOVE_MATRIX = LIBS.multiply(cleffa.body.MOVE_MATRIX, temp);
    clefairy.body.MOVE_MATRIX = LIBS.multiply(clefairy.body.MOVE_MATRIX, temp);
    cleffable.body.MOVE_MATRIX = LIBS.multiply(cleffable.body.MOVE_MATRIX, temp);

    temp = LIBS.get_I4();
    LIBS.rotateX(temp, PHI);
    cleffa.body.MOVE_MATRIX = LIBS.multiply(cleffa.body.MOVE_MATRIX, temp);
    clefairy.body.MOVE_MATRIX = LIBS.multiply(clefairy.body.MOVE_MATRIX, temp);
    cleffable.body.MOVE_MATRIX = LIBS.multiply(cleffable.body.MOVE_MATRIX, temp);

    LIBS.translateZ(temp, -0.6);
    cleffa.body.MOVE_MATRIX = LIBS.multiply(cleffa.body.MOVE_MATRIX, temp);
    clefairy.body.MOVE_MATRIX = LIBS.multiply(clefairy.body.MOVE_MATRIX, temp);
    cleffable.body.MOVE_MATRIX = LIBS.multiply(cleffable.body.MOVE_MATRIX, temp);

    autoRotate += 0.02;
    if (autoRotate > Math.PI * 2) autoRotate -= Math.PI * 2;

    temp = LIBS.get_I4();
    LIBS.translateZ(temp, 0.6);
    cleffa.body.MOVE_MATRIX = LIBS.multiply(cleffa.body.MOVE_MATRIX, temp);
    clefairy.body.MOVE_MATRIX = LIBS.multiply(clefairy.body.MOVE_MATRIX, temp);
    cleffable.body.MOVE_MATRIX = LIBS.multiply(cleffable.body.MOVE_MATRIX, temp);

    // ─────────────── SPEED MANAGEMENT ───────────────

    if (isWavingCleffa) waveTimeCleffa += 0.025;
    if (isWalkingCleffa) {
      bodyTimeCleffa += 0.1;
      walkTimeCleffa += 0.05;
    } 
    if (isJumpingCleffa) jumpTimeCleffa += 0.08;

    if (isWavingClefairy) waveTimeClefairy += 0.025;
    if (isWalkingClefairy) {
      bodyTimeClefairy += 0.1;
      walkTimeClefairy += 0.05;
    } 
    if (isJumpingClefairy) jumpTimeClefairy += 0.08;

    if (isWavingCleffable) waveTimeCleffable += 0.025;
    if (isWalkingCleffable) {
      bodyTimeCleffable += 0.1;
      walkTimeCleffable += 0.05;
    } 
    if (isJumpingCleffable) jumpTimeCleffable += 0.08;

    // ─────────────── HAND WAVE ───────────────
    let handWaveAngleCleffa = Math.sin(waveTimeCleffa * 1.2) * (15 * Math.PI / 180);
    let handWaveAngleClefairy = Math.sin(waveTimeClefairy * 1.2) * (15 * Math.PI / 180);
    let handWaveAngleCleffable = Math.sin(waveTimeCleffable * 1.2) * (15 * Math.PI / 180);

    cleffa.leftHand.MOVE_MATRIX = LIBS.get_I4();
    LIBS.translateX(cleffa.leftHand.MOVE_MATRIX, -0.45);
    LIBS.translateY(cleffa.leftHand.MOVE_MATRIX, -0.25);
    LIBS.translateZ(cleffa.leftHand.MOVE_MATRIX, 0.4);
    LIBS.rotateX(cleffa.leftHand.MOVE_MATRIX, -107.1 + handWaveAngleCleffa);
    LIBS.rotateY(cleffa.leftHand.MOVE_MATRIX, 37);
    LIBS.rotateZ(cleffa.leftHand.MOVE_MATRIX, 26);

    clefairy.leftHand.MOVE_MATRIX = LIBS.get_I4();
    LIBS.translateX(clefairy.leftHand.MOVE_MATRIX, -0.75);
    LIBS.translateY(clefairy.leftHand.MOVE_MATRIX, -0.05);
    LIBS.translateZ(clefairy.leftHand.MOVE_MATRIX, 0.1);
    LIBS.rotateX(clefairy.leftHand.MOVE_MATRIX, -107.5 + handWaveAngleClefairy);
    LIBS.rotateY(clefairy.leftHand.MOVE_MATRIX, 36.5);
    LIBS.rotateZ(clefairy.leftHand.MOVE_MATRIX, 26);

    cleffable.leftHand.MOVE_MATRIX = LIBS.get_I4();
    LIBS.translateX(cleffable.leftHand.MOVE_MATRIX, -0.88);
    LIBS.translateY(cleffable.leftHand.MOVE_MATRIX, 0.1);
    LIBS.translateZ(cleffable.leftHand.MOVE_MATRIX, 0.27);
    LIBS.rotateY(cleffable.leftHand.MOVE_MATRIX, 5 + handWaveAngleCleffable);


    cleffa.rightHand.MOVE_MATRIX = LIBS.get_I4();
    LIBS.translateX(cleffa.rightHand.MOVE_MATRIX, 0.45);
    LIBS.translateY(cleffa.rightHand.MOVE_MATRIX, -0.25);
    LIBS.translateZ(cleffa.rightHand.MOVE_MATRIX, 0.4);
    LIBS.rotateX(cleffa.rightHand.MOVE_MATRIX, -107.1 + handWaveAngleCleffa);
    LIBS.rotateY(cleffa.rightHand.MOVE_MATRIX, -37);
    LIBS.rotateZ(cleffa.rightHand.MOVE_MATRIX, -26);

    clefairy.rightHand.MOVE_MATRIX = LIBS.get_I4();
    LIBS.translateX(clefairy.rightHand.MOVE_MATRIX, 0.75);
    LIBS.translateY(clefairy.rightHand.MOVE_MATRIX, -0.05);
    LIBS.translateZ(clefairy.rightHand.MOVE_MATRIX, 0.1);
    LIBS.rotateX(clefairy.rightHand.MOVE_MATRIX, -107.5 + handWaveAngleClefairy);
    LIBS.rotateY(clefairy.rightHand.MOVE_MATRIX, -36.5);
    LIBS.rotateZ(clefairy.rightHand.MOVE_MATRIX, -26);

    cleffable.rightHand.MOVE_MATRIX = LIBS.get_I4();
    LIBS.translateX(cleffable.rightHand.MOVE_MATRIX, 0.88);
    LIBS.translateY(cleffable.rightHand.MOVE_MATRIX, 0.1);
    LIBS.translateZ(cleffable.rightHand.MOVE_MATRIX, 0.27);
    LIBS.rotateX(cleffable.rightHand.MOVE_MATRIX, -107.5 - handWaveAngleCleffable);
    LIBS.rotateY(cleffable.rightHand.MOVE_MATRIX, -36.5);
    LIBS.rotateZ(cleffable.rightHand.MOVE_MATRIX, -26);

    // ─────────────── FEET WALK ───────────────
    let legAngleCleffa = Math.sin(walkTimeCleffa) * (20 * Math.PI / 180); //20 derajat
    let legAngleClefairy = Math.sin(walkTimeClefairy) * (20 * Math.PI / 180); //20 derajat
    let legAngleCleffable = Math.sin(walkTimeCleffable) * (20 * Math.PI / 180); //20 derajat

    cleffa.leftFeet.MOVE_MATRIX = LIBS.get_I4();
    LIBS.translateX(cleffa.leftFeet.MOVE_MATRIX, -0.325);
    LIBS.translateY(cleffa.leftFeet.MOVE_MATRIX, -0.48);
    LIBS.translateZ(cleffa.leftFeet.MOVE_MATRIX, 0);
    LIBS.rotateX(cleffa.leftFeet.MOVE_MATRIX, 102.1 + legAngleCleffa);

    clefairy.leftFeet.MOVE_MATRIX = LIBS.get_I4();
    LIBS.translateX(clefairy.leftFeet.MOVE_MATRIX, -0.305);
    LIBS.translateY(clefairy.leftFeet.MOVE_MATRIX, -0.68);
    LIBS.translateZ(clefairy.leftFeet.MOVE_MATRIX, 0.05);
    LIBS.rotateX(clefairy.leftFeet.MOVE_MATRIX, 102 + legAngleClefairy);
    
    cleffable.leftFeet.MOVE_MATRIX = LIBS.get_I4();
    LIBS.translateX(cleffable.leftFeet.MOVE_MATRIX, -0.29);
    LIBS.translateY(cleffable.leftFeet.MOVE_MATRIX, -0.65);
    LIBS.translateZ(cleffable.leftFeet.MOVE_MATRIX, 0.1);
    LIBS.rotateX(cleffable.leftFeet.MOVE_MATRIX, 102 + legAngleCleffable);


    cleffa.rightFeet.MOVE_MATRIX = LIBS.get_I4();
    LIBS.translateX(cleffa.rightFeet.MOVE_MATRIX, 0.325);
    LIBS.translateY(cleffa.rightFeet.MOVE_MATRIX, -0.48);
    LIBS.translateZ(cleffa.rightFeet.MOVE_MATRIX, 0);
    LIBS.rotateX(cleffa.rightFeet.MOVE_MATRIX, 102.1 - legAngleCleffa);

    clefairy.rightFeet.MOVE_MATRIX = LIBS.get_I4();
    LIBS.translateX(clefairy.rightFeet.MOVE_MATRIX, 0.305);
    LIBS.translateY(clefairy.rightFeet.MOVE_MATRIX, -0.68);
    LIBS.translateZ(clefairy.rightFeet.MOVE_MATRIX, 0.05);
    LIBS.rotateX(clefairy.rightFeet.MOVE_MATRIX, 102 - legAngleClefairy);

    cleffable.rightFeet.MOVE_MATRIX = LIBS.get_I4();
    LIBS.translateX(cleffable.rightFeet.MOVE_MATRIX, 0.29);
    LIBS.translateY(cleffable.rightFeet.MOVE_MATRIX, -0.65);
    LIBS.translateZ(cleffable.rightFeet.MOVE_MATRIX, 0.1);
    LIBS.rotateX(cleffable.rightFeet.MOVE_MATRIX, 102 - legAngleCleffable);

    // ─────────────── BODY SWAY ───────────────
    let bodySwayCleffa = Math.sin(bodyTimeCleffa * 0.5) * (5 * Math.PI / 180); // 5 derajat
    let bodyBobCleffa = Math.abs(Math.sin(bodyTimeCleffa * 0.5)) * 0.03;
    let bodySwayClefairy = Math.sin(bodyTimeClefairy * 0.5) * (5 * Math.PI / 180); // 5 derajat
    let bodyBobClefairy = Math.abs(Math.sin(bodyTimeClefairy * 0.5)) * 0.03;
    let bodySwayCleffable = Math.sin(bodyTimeCleffable * 0.5) * (5 * Math.PI / 180); // 5 derajat
    let bodyBobCleffable = Math.abs(Math.sin(bodyTimeCleffable * 0.5)) * 0.03;

    let tempSwayCleffa = LIBS.get_I4();
    let tempSwayClefairy = LIBS.get_I4();
    let tempSwayCleffable = LIBS.get_I4();

    LIBS.translateY(tempSwayCleffa, -bodyBobCleffa);
    LIBS.rotateY(tempSwayCleffa, bodySwayCleffa);
    LIBS.translateY(tempSwayClefairy, -bodyBobClefairy);
    LIBS.rotateY(tempSwayClefairy, bodySwayClefairy);
    LIBS.translateY(tempSwayCleffable, -bodyBobCleffable);
    LIBS.rotateY(tempSwayCleffable, bodySwayCleffable);
    cleffa.body.MOVE_MATRIX = LIBS.multiply(cleffa.body.MOVE_MATRIX, tempSwayClefairy);
    clefairy.body.MOVE_MATRIX = LIBS.multiply(clefairy.body.MOVE_MATRIX, tempSwayClefairy);
    cleffable.body.MOVE_MATRIX = LIBS.multiply(cleffable.body.MOVE_MATRIX, tempSwayCleffable);

    // ─────────────── FEET JUMP ───────────────
    let jumpHeightCleffa = 0;
    if (isJumpingCleffa) {
      jumpHeightCleffa = Math.sin(jumpTimeCleffa) * 0.6;
      if (jumpTimeCleffa >= jumpDurationCleffa) {
        isJumpingCleffa = false;
        jumpTimeCleffa = 0;
        jumpHeightCleffa = 0;
      }
    }

    let jumpHeightClefairy = 0;
    if (isJumpingClefairy) {
      jumpHeightClefairy = Math.sin(jumpTimeClefairy) * 0.6;
      if (jumpTimeClefairy >= jumpDurationClefairy) {
        isJumpingClefairy = false;
        jumpTimeClefairy = 0;
        jumpHeightClefairy = 0;
      }
    }

    let jumpHeightCleffable = 0;
    if (isJumpingCleffable) {
      jumpHeightCleffable = Math.sin(jumpTimeCleffable) * 0.6;
      if (jumpTimeCleffable >= jumpDurationCleffable) {
        isJumpingCleffable = false;
        jumpTimeCleffable = 0;
        jumpHeightCleffable = 0;
      }
    }

    let jumpMatrixCleffa = LIBS.get_I4();
    let jumpMatrixClefairy = LIBS.get_I4();
    let jumpMatrixCleffable = LIBS.get_I4();
    LIBS.translateY(jumpMatrixCleffa, Math.max(jumpHeightCleffa, 0));
    LIBS.translateY(jumpMatrixClefairy, Math.max(jumpHeightClefairy, 0));
    LIBS.translateY(jumpMatrixCleffable, Math.max(jumpHeightCleffable, 0));
    cleffa.body.MOVE_MATRIX = LIBS.multiply(cleffa.body.MOVE_MATRIX, jumpMatrixCleffa);
    clefairy.body.MOVE_MATRIX = LIBS.multiply(clefairy.body.MOVE_MATRIX, jumpMatrixClefairy);
    cleffable.body.MOVE_MATRIX = LIBS.multiply(cleffable.body.MOVE_MATRIX, jumpMatrixCleffable);

    // ─────────────── SCALE ───────────────
    currentScaleCleffa += (targetScaleCleffa - currentScaleCleffa) * scaleSpeedCleffa;
    currentScaleClefairy += (targetScaleClefairy - currentScaleClefairy) * scaleSpeedClefairy;
    currentScaleCleffable += (targetScaleCleffable - currentScaleCleffable) * scaleSpeedCleffable;

    let scaleMatrixCleffa = LIBS.get_I4();
    let scaleMatrixClefairy = LIBS.get_I4();
    let scaleMatrixCleffable = LIBS.get_I4();

    LIBS.scale(scaleMatrixCleffa, currentScaleCleffa, currentScaleCleffa, currentScaleCleffa);
    LIBS.scale(scaleMatrixClefairy, currentScaleClefairy, currentScaleClefairy, currentScaleClefairy);
    LIBS.scale(scaleMatrixCleffable, currentScaleCleffable, currentScaleCleffable, currentScaleCleffable);
    cleffa.body.MOVE_MATRIX = LIBS.multiply(cleffa.body.MOVE_MATRIX, scaleMatrixCleffa);
    clefairy.body.MOVE_MATRIX = LIBS.multiply(clefairy.body.MOVE_MATRIX, scaleMatrixClefairy);
    cleffable.body.MOVE_MATRIX = LIBS.multiply(cleffable.body.MOVE_MATRIX, scaleMatrixCleffable);


    if (!drag) {
      dX *= 1 - FRICTION;
      dY *= 1 - FRICTION;
      THETA += dX;
      PHI += dY;
    }


    Gl.uniformMatrix4fv(_Pmatrix, false, PROJMATRIX);
    Gl.uniformMatrix4fv(_Vmatrix, false, VIEWMATRIX);
    cleffa.body.render(LIBS.get_I4())
    clefairy.body.render(LIBS.get_I4())
    cleffable.body.render(LIBS.get_I4())

    Gl.flush();
    requestAnimationFrame(animate);
  };
  animate(0);
}
window.addEventListener("load", main);
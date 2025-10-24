export function generateCube(color = [1, 1, 1]) {
  const vertices = [
    // Front face
    -1, -1,  1,  ...color,
     1, -1,  1,  ...color,
     1,  1,  1,  ...color,
    -1,  1,  1,  ...color,

    // Back face
    -1, -1, -1,  ...color,
    -1,  1, -1,  ...color,
     1,  1, -1,  ...color,
     1, -1, -1,  ...color,
  ];

  const faces = [
    0, 1, 2,  0, 2, 3,  // front
    4, 5, 6,  4, 6, 7,  // back
    4, 5, 3,  4, 3, 0,  // left
    1, 7, 6,  1, 6, 2,  // right
    3, 2, 6,  3, 6, 5,  // top
    4, 0, 1,  4, 1, 7,  // bottom
  ];

  return { vertices, faces };
}

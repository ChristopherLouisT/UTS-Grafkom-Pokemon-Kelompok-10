export function generateSunSphere(radius = 1.5, stacks = 16, slices = 24, color = [1.0, 0.95, 0.6]) {
  const vertices = [];
  const faces = [];

  for (let i = 0; i <= stacks; i++) {
    const v = (i / stacks) * Math.PI;
    const y = radius * Math.cos(v);
    const r = radius * Math.sin(v);

    for (let j = 0; j <= slices; j++) {
      const u = (2 * Math.PI * j) / slices;
      const x = r * Math.cos(u);
      const z = r * Math.sin(u);

      const intensity = 0.9 + 0.1 * Math.cos(v); // brighter near the center
      // Add color (you can modify to add gradient)
      vertices.push(x, y, z, color[0] * intensity, color[1] * intensity, color[2] * intensity);
    }
  }

  for (let i = 0; i < stacks; i++) {
    for (let j = 0; j < slices; j++) {
      const first = i * (slices + 1) + j;
      const second = first + (slices + 1);
      faces.push(first, first + 1, second + 1);
      faces.push(first, second + 1, second);
    }
  }

  return { vertices, faces };
}

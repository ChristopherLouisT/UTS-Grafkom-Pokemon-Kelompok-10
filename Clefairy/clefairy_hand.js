export function generateClefairy_Hand(a, b, c, stacks, steps, direction) {
    let vertices = [];
    let faces = [];

    for (let i = 0; i <= stacks; i++) {
        let v = i / stacks;

        // Biar ujungnya ga tajam 
        let flatTop = Math.pow(1 - Math.pow(v, 1.5), 0.35);
        let flatBottom = 1 - 0.2 * Math.pow(v, 3);
        let radiusFactor = flatTop * flatBottom;

        let z = c * (v - 0.5);

        for (let j = 0; j <= steps; j++) {
            let u = (j / steps) * 2 * Math.PI;

            let x = a * radiusFactor * Math.cos(u);
            let y = b * radiusFactor * Math.sin(u);

            // --- Mesh-space curvature deformation ---
            // Bengkokin planenya di XZ plane
            let bendStrength = 0.6 * direction; // Buat seberapa kuat bengkoknya
            let curve = Math.sin((v - 0.3) * Math.PI) * bendStrength;

            let newX = x * Math.cos(curve) - z * Math.sin(curve);
            let newZ = x * Math.sin(curve) + z * Math.cos(curve);

            vertices.push(newX, y, newZ);

            let t = v / Math.PI;
            let r = 1.0 - 0.25 * t;
            let g = 0.78 - 0.35 * t;
            let bl = 0.86 - 0.20 * t;
            vertices.push(r, g, bl);
        }
    }

    // Faces
    for (let i = 0; i < stacks; i++) {
        for (let j = 0; j < steps; j++) {
            let first = i * (steps + 1) + j;
            let second = first + 1;
            let third = first + (steps + 1);
            let fourth = third + 1;
            faces.push(first, second, fourth);
            faces.push(first, fourth, third);
        }
    }

    return { vertices, faces };
}

export function generateClefairy_Hand(a, b, c, stacks, steps) {
    let vertices = [];
    let faces = [];

    for (let i = 0; i <= stacks; i++) {
        let v = i / stacks; // 0 = bottom, 1 = top

        // Base foot profile — round bottom, flat top
        let flatTop = Math.pow(1 - Math.pow(v, 1.5), 0.35);
        let flatBottom = 1 - 0.2 * Math.pow(v, 3);
        let radiusFactor = flatTop * flatBottom;

        // Base height
        let z = c * (v - 0.5);

        for (let j = 0; j <= steps; j++) {
            let u = (j / steps) * 2 * Math.PI;

            // Base ellipsoid coordinates
            let x = a * radiusFactor * Math.cos(u);
            let y = b * radiusFactor * Math.sin(u);

            // --- Mesh-space curvature deformation (REMOVED) ---
            // Pushing original (x, y, z) for a straight, non-bent shape
            vertices.push(x, y, z);

            // light pink tone gradient (REMOVED)
            // let t = v / Math.PI; // normalize 0 → 1 (bottom → top)
            // let r = 1.0 - 0.25 * t;  // from light pink → deep rose
            // let g = 0.78 - 0.35 * t;  // stronger green reduction
            // let bl = 0.86 - 0.20 * t; // slight purple hue at top
            
            // Set to solid color palette: 245, 218, 211
            let r = 245 / 255;
            let g = 218 / 255;
            let bl = 211 / 255;
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
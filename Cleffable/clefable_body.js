export function generateClefable_Body(A, B, C, stacks, steps) {
    let vertices = [];
    let faces = [];

    // --- Base color (normalized) ---
    const baseR = 245 / 255.0;
    const baseG = 218 / 255.0;
    const baseB = 211 / 255.0;

    for (let i = 0; i <= stacks; i++) {
        let v = (i / stacks) * Math.PI; // vertical angle
        let radiusFactor = Math.sin(v) * (0.9 + 0.1 * Math.cos(v)); // egg shape

        for (let j = 0; j <= steps; j++) {
            let u = (j / steps) * 2 * Math.PI; // horizontal angle

            // Position
            let z = A * radiusFactor * Math.cos(u); // front-back
            let x = B * radiusFactor * Math.sin(u);
            let y = C * Math.cos(v) * -1.15;        // top-bottom

            // --- Gradient: lighter front-top, darker back-bottom ---
            // Normalize z (-a → a) and y (-c → c) into [0, 1]
            let zFactor = (z / (A * 2)) + 0.5; // front=1, back=0
            let yFactor = (y / (C * 2)) + 0.5; // top=1, bottom=0

            // Combine both (equal influence)
            let brightness = 0.75 + 0.35 * (0.5 * zFactor + 0.5 * yFactor);
            // Clamp brightness to safe range
            brightness = Math.min(1.0, Math.max(0.6, brightness));

            // Apply brightness to color
            let r = baseR * brightness;
            let g = baseG * brightness;
            let b = baseB * brightness;

            vertices.push(x, y, z, r, g, b);
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

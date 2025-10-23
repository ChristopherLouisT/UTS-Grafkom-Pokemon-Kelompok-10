export function generateClefable_Feet(a, b, c, stacks, steps) {
    let vertices = [];
    let faces = [];

    // --- Base color palette (normalized 0–1) ---
    const baseR = 245 / 255.0;
    const baseG = 218 / 255.0;
    const baseB = 211 / 255.0;

    for (let i = 0; i <= stacks; i++) {
        let v = i / stacks; // 0 = bottom, 1 = top

        // ---- Shape control ----
        let flatTop = Math.pow(1 - Math.pow(v, 1.5), 0.15);
        let flatBottom = 1 - 0.2 * Math.pow(v, 3);
        let radiusFactor = flatTop * flatBottom;

        // Z coordinate (vertical stretch)
        let z = c * (v - 0.5);
        if (v > 0.85) {
            z -= 0.05 * c * (v - 0.85) / 0.15; // compress top
        }

        for (let j = 0; j <= steps; j++) {
            let u = (j / steps) * 2 * Math.PI;
            let x = a * radiusFactor * Math.cos(u);
            let y = b * radiusFactor * Math.sin(u);

            // --- Gradient: lighter front-top, darker back-bottom ---
            // Compute normalized direction for gradient
            let frontFactor = (Math.cos(u) + 1) / 2; // 0=back, 1=front
            let verticalFactor = v;                  // 0=bottom, 1=top

            // Combine both (front + top = lighter)
            let brightness = 0.75 + 0.35 * (0.5 * frontFactor + 0.5 * verticalFactor);
            brightness = Math.min(1.0, Math.max(0.6, brightness));

            // Apply brightness to color
            let r = baseR * brightness;
            let g = baseG * brightness;
            let bl = baseB * brightness;

            // Push vertex (position + color)
            vertices.push(x, y, z, r, g, bl);
        }
    }

    // --- Faces ---
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

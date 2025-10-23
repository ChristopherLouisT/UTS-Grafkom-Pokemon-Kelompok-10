export function generateClefable_Horns(a, b, c, stacks, steps) {
    let vertices = [];
    let faces = [];

    for (let i = 0; i <= stacks; i++) {
        let v = i / stacks; // 0 = bottom, 1 = top

        // ---- Flatten the top (v near 1) ----
        // previously (1 - v^p), now smoother near v=1
        let flatTop = Math.pow(1 - Math.pow(v, 1.5), 0.5);

        // Keep a gentle base rounding
        let flatBottom = 1 - 0.2 * Math.pow(v, 3);

        // Combined radius
        let radiusFactor = flatTop * flatBottom;

        // z coordinate — slight bulge in middle
        let z = c * (v - 0.5);
        if (v > 0.85) {
            z -= 0.05 * c * (v - 0.85) / 0.15; // compress top part
        }

        for (let j = 0; j <= steps; j++) {
            let u = (j / steps) * 2 * Math.PI;
            let x = a * radiusFactor * Math.cos(u);
            let y = b * radiusFactor * Math.sin(u);

            // [Position]
            vertices.push(x, y, z);

            // [Color]
            // Set top part to black (above 68% height), rest to the pinkish color.
            let r, g, bl;
            let tipThreshold = 0.68; // Start black tip at 80% of the height

            if (v >= tipThreshold) {
                // Black color for the tip
                r = 0;
                g = 0;
                bl = 0;
            } else {
                // Color palette: 245, 218, 211
                r = 245 / 255;
                g = 218 / 255;
                bl = 211 / 255;
            }

            vertices.push(r, g, bl);
        }
    }

    // faces
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

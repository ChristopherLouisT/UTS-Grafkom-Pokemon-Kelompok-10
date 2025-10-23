export function generateCleffa_Hand(a, b, c, stacks, steps) {
    let vertices = [];
    let faces = [];

    for (let i = 0; i <= stacks; i++) {
        let v = i / stacks; // 0 = bottom, 1 = top

        // ---- Flatten the top (v near 1) ----
        // previously (1 - v^p), now smoother near v=1
        let flatTop = Math.pow(1 - Math.pow(v, 1.2), 0.3);

        // Keep a gentle base rounding
        let flatBottom = 1 - 0.444 * Math.pow(v, v*2);

        // Combined radius
        let radiusFactor = flatTop * flatBottom;

        // z coordinate — slight bulge in middle
        let z = c * (v - 0.3);
        if (v > 1.85) {
            z -= 0.05 * c * (v - 0.85) / 0.15; // compress top part
        }

        for (let j = 0; j <= steps; j++) {
            let u = (j / steps) * 2 * Math.PI;
            let x = a * radiusFactor * Math.cos(u);
            let y = b * radiusFactor * Math.sin(u);

            vertices.push(x, y, z);

            // light pinkish tone gradient
            let t = v;
            let r = 0.96 - 0.05 * t;
            let g = 0.77 - 0.07 * t;
            let bl = 0.82 - 0.06 * t;
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

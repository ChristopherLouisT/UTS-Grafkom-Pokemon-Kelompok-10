export function generateClefairy_Tail(radius, tubeRadius, height, stacks, steps) {
    let vertices = [];
    let faces = [];

    // --- Base color palette (normalized 0–1) ---
    const baseR = 245 / 255.0;
    const baseG = 218 / 255.0;
    const baseB = 211 / 255.0;

    // --- Shape configuration ---
    const tailLength = radius * 0.05;  // straight portion before spiral
    const baseStraight = 0.25;        // proportion of total length that stays straight
    const turns = 2.5;                // total number of spiral turns
    const taper = 0.1;                // how much smaller the spiral gets at the center
    const verticalLift = 0.75;        // upward lift for organic shape

    for (let i = 0; i <= stacks; i++) {
        let v = i / stacks;
        let cx = 0, cy = 0, cz = 0;
        let angle = 0;
        let coilRadius = 0;

        if (v < baseStraight) {
            // --- Straight outer segment ---
            let t = v / baseStraight;
            let startAngle = 0;
            cx = radius + tailLength * (10 + t);
            cy = radius + tailLength * (1 - t);
            cz = height * 0.15 * t; // slight upward tilt
            angle = startAngle;
        } else {
            // --- Spiral portion ---
            let sv = (v - baseStraight) / (1 - baseStraight);
            let theta = turns * 2 * Math.PI * sv;

            // radius decreases as spiral moves inward
            coilRadius = radius * (1 - sv * (1 - taper));

            // spiral path position
            cx = coilRadius * Math.cos(theta);
            cy = coilRadius * Math.sin(theta);
            cz = height * (sv - 0.5) * verticalLift + height * 0.1;
            angle = theta;
        }

        // --- Tube along path ---
        for (let j = 0; j <= steps; j++) {
            let u = (j / steps) * 2 * Math.PI;
            let nx = Math.cos(u);
            let ny = Math.sin(u);

            // Rotate around local tangent
            let x = cx + tubeRadius * nx * Math.cos(angle) - tubeRadius * ny * Math.sin(angle);
            let y = cy + tubeRadius * nx * Math.sin(angle) + tubeRadius * ny * Math.cos(angle);
            let z = cz + tubeRadius * 0.35 * ny;

            // --- Gradient shading ---
            // Outer (low v) = lighter, Inner (high v) = darker
            // Bottom (ny < 0) = darker, Tip (v ≈ 1) = lighter
            let frontFactor = 1 - v;              // 1 = outer, 0 = inner
            let bottomShade = Math.max(0, -ny);   // 0 = top, 1 = bottom
            let tipHighlight = Math.pow(v, 3.5);  // increases near spiral end

            // Base brightness with gradient and tip highlight
            let brightness = 0.75 + 0.35 * frontFactor - 0.15 * bottomShade + 0.25 * tipHighlight;

            // Clamp brightness safely
            brightness = Math.min(1.0, Math.max(0.55, brightness));

            // Apply brightness to base color
            let r = baseR * brightness;
            let g = baseG * brightness;
            let bl = baseB * brightness;

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

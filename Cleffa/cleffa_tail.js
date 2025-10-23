export function generateCleffa_Tail(radius, tubeRadius, height, stacks, steps) {
    let vertices = [];
    let faces = [];

    // --- Shape configuration ---
    const tailLength = radius * 0.0;  // straight portion before spiral
    const baseStraight = 0.1;        // proportion of total length that stays straight
    const turns = -1.3;                // total number of spiral turns
    const taper = 0.2   ;                // how much smaller the spiral gets at the center
    const verticalLift = 0.25;        // upward lift for organic shape

    for (let i = 0; i <= stacks; i++) {
        let v = i / stacks;
        let cx = 0, cy = 0, cz = 0;
        let angle = 0;
        let coilRadius = 0;

        if (v < baseStraight) {
            // --- Outer straight tangent segment (blue line part) ---
            let t = v / baseStraight;
            let startAngle = 0; // direction facing outward along +X
            cx = radius + tailLength * (10 + t);
            cy = radius + tailLength * (1 - t);
            cz = height * 0.15 * t; // slight vertical offset
            angle = startAngle;
        } else {
            // --- Spiral portion ---
            let sv = (v - baseStraight) / (1 - baseStraight);
            let theta = turns * 2 * Math.PI * sv;

            // radius decreases as we spiral inward
            coilRadius = radius * (1 - sv * (1 - taper));

            // path follows the coil
            cx = coilRadius * Math.cos(theta);
            cy = coilRadius * Math.sin(theta);
            cz = height * (sv - 0.5) * verticalLift + height * 0.1;
            angle = theta;
        }

        // --- Build tube along path ---
        for (let j = 0; j <= steps; j++) {
            let u = (j / steps) * 2 * Math.PI;
            let nx = Math.cos(u);
            let ny = Math.sin(u);

            // rotate around local tangent
            let x = cx + tubeRadius * nx * Math.cos(angle) - tubeRadius * ny * Math.sin(angle);
            let y = cy + tubeRadius * nx * Math.sin(angle) + tubeRadius * ny * Math.cos(angle);
            let z = cz + tubeRadius * 0.35 * ny;

            vertices.push(x, y, z);

            // color gradient
            let t = v;
            let r = 0.96 - 0.05 * t;
            let g = 0.77 - 0.07 * t;
            let bl = 0.82 - 0.04 * t;
            vertices.push(r, g, bl);
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

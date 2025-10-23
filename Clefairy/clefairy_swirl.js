export function generateClefairy_Swirl(radius, tubeRadius, height, stacks, steps) {
    let vertices = [];
    let faces = [];

    // Atur Shape
    const tailLength = radius * 0.00;   // panjang yang mau dilurusin
    const baseStraight = 0;             // proporsi panjang yang mau dilurusin
    const turns = 1.5;                  // spiralnya mau berapa banyak
    const taper = 0.1;                  // seberapa kecil spiral ditengah yang dimau
    const verticalLift = 0.2;           // buat ada gap antara spiral layer

    for (let i = 0; i <= stacks; i++) {
        let v = i / stacks;
        let cx = 0, cy = 0, cz = 0;
        let angle = 0;
        let coilRadius = 0;

        if (v < baseStraight) {
            let t = v / baseStraight;
            let startAngle = 0; // ngarah +X
            cx = radius + tailLength * (10 + t);
            cy = radius + tailLength * (1 - t);
            cz = height * 0.15 * t;
            angle = startAngle;
        } else {
            // Spiral
            let sv = (v - baseStraight) / (1 - baseStraight);
            let theta = turns * 2 * Math.PI * sv;

            //Turunin radiusnya selagi spiral semakin mengecil
            coilRadius = radius * (1 - sv * (1 - taper));

            cx = coilRadius * Math.cos(theta);
            cy = coilRadius * Math.sin(theta);
            cz = height * (sv - 0.5) * verticalLift + height * 0.1;
            angle = theta;
        }

        //Tubenya
        for (let j = 0; j <= steps; j++) {
            let u = (j / steps) * 2 * Math.PI;
            let nx = Math.cos(u);
            let ny = Math.sin(u);

            let x = cx + tubeRadius * nx * Math.cos(angle) - tubeRadius * ny * Math.sin(angle);
            let y = cy + tubeRadius * nx * Math.sin(angle) + tubeRadius * ny * Math.cos(angle);
            let z = cz + tubeRadius * 0.35 * ny;

            vertices.push(x, y, z);

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

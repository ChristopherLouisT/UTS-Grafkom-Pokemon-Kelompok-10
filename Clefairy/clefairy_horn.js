export function generateClefairy_Horn(a, b, c, stacks, steps) {
    let vertices = [];
    let faces = [];

    for (let i = 0; i <= stacks; i++) {
        let v = i / stacks;

        // Naikin 0. di ujung buat makin tajam dan turunin biar makin flat
        let flatTop = Math.pow(1 - Math.pow(v, 1.5), 0.6);
        let flatBottom = 1 - 0.2 * Math.pow(v, 3);

        let radiusFactor = flatTop * flatBottom;

        let z = c * (v - 0.5);
        if (v > 0.85) {
            z -= 0.05 * c * (v - 0.85) / 0.15;
        }

        for (let j = 0; j <= steps; j++) {
            let u = (j / steps) * Math.PI;
            let x = a * radiusFactor * Math.cos(u);
            let y = b * radiusFactor * Math.sin(u);

            vertices.push(x, y, z);

            let t = v / Math.PI;
            let r = 1.0 - 0.25 * t;
            let g = 0.78 - 0.35 * t; 
            let bl = 0.86 - 0.20 * t;

            if (v > 0.55) {
                r = 125/255
                g = 98/255
                bl = 101/255
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

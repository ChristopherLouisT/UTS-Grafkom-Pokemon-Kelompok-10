export function generateClefairy_Claw(a, b, c, stacks, steps) {
    let vertices = [];
    let faces = [];

    for (let i = 0; i <= stacks; i++) {
        let v = i / stacks;

        // Naikin 0. di ujung buat makin tajam dan turunin biar makin flat
        let flatTop = Math.pow(1 - Math.pow(v, 1.5), 0.85);
        let flatBottom = 1 - 0.2 * Math.pow(v, 3);

        let radiusFactor = flatTop * flatBottom;

        let z = c * (v - 0.5);
        if (v > 0.85) {
            z -= 0.05 * c * (v - 0.85) / 0.15;
        }

        for (let j = 0; j <= steps; j++) {
            let u = (j / steps) * 2 * Math.PI;
            let x = a * radiusFactor * Math.cos(u);
            let y = b * radiusFactor * Math.sin(u);

            vertices.push(x, y, z);
            vertices.push(1,1,1);
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

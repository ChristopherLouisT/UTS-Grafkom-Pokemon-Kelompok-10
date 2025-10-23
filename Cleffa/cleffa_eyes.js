export function generateCleffa_Eyes(a, b, c, stacks, steps) {
    let vertices = [];
    let faces = [];

    for (let i = 0; i <= stacks; i++) {
        let v = (i / stacks) * Math.PI; // 0 → π
        for (let j = 0; j <= steps; j++) {
            let u = (j / steps) * Math.PI; // 0 → 2π

            // rumus ellipsoid
            let x = a * Math.cos(u) * Math.sin(v);
            let y = b * Math.sin(u) * Math.sin(v);
            let z = c * Math.cos(v);

            vertices.push(x, y, z);
            if (y > 0.095) {
            // upper part
                vertices.push(1.0, 1.0, 1.0); // white
            } else if (y > 0.008) {
                // middle
                vertices.push(0.0, 0.0, 0); // black
            } else {
                // lower
                vertices.push(255/255, 0, 0); // dark blue
            }

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
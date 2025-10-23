export function generateCleffa_Mouth(a, b, c, uSteps, vSteps) {
    var vertices = [];
    var faces = [];

    // ===== generate vertex utama =====
    for (var i = 0; i <= uSteps; i++) {
        var u = i / uSteps; // radial
        for (var j = 0; j <= vSteps; j++) {
            var v = 2 * Math.PI * j / vSteps; // angle

            var x = a * u * Math.cos(v);
            var y = b * u * Math.sin(v);
            var z = c * u * u;

            // pos + color
            vertices.push(x, y, z);
            vertices.push(0, 0, 0);
        }
    }

    // ===== faces utama =====
    for (var i = 0; i < uSteps; i++) {
        for (var j = 0; j < vSteps; j++) {
            var a1 = i * (vSteps + 1) + j;
            var b1 = a1 + 1;
            var c1 = a1 + (vSteps + 1);
            var d1 = c1 + 1;
            faces.push(a1, b1, d1);
            faces.push(a1, d1, c1);
        }
    }

    // ===== TUTUP ALAS (bottom cap) =====
    // Tambah 1 vertex di pusat bawah (0,0,0)
    var centerIndex = vertices.length / 6; // setiap vertex punya 6 nilai (pos+color)
    vertices.push(0, 0, 0);
    vertices.push(1, 1, 1); // warna sama

    // Buat fan ke lingkaran bawah (u = 0 step)
    for (var j = 0; j < vSteps; j++) {
        var v0 = j;
        var v1 = (j + 1) % (vSteps + 1);
        faces.push(centerIndex, v1, v0);
    }

    return { vertices, faces };
}

export function generateClefairy_Mouth(a, b, c, uSteps, vSteps) {
    var vertices = [];
    var faces = [];

    for (var i = 0; i <= uSteps; i++) {
        var u = i / uSteps; // radial
        for (var j = 0; j <= vSteps; j++) {
            var v = 2 * Math.PI * j / vSteps; // angle

            var x = a * u * Math.cos(v);
            var y = b * u * Math.sin(v);
            var z = c * u * u;

            // add position + color
            vertices.push(x, y, z);
            vertices.push(255/255, 40/255, 85/255)
        }
    }

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
    return { vertices, faces };
}

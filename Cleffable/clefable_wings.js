// export function generateClefable_Wing(thickness = 0.05, steps = 18) {
//   // --- Cubic Bezier helpers ---
//   function cubicBezier(p0, p1, p2, p3, t) {
//     const u = 1 - t;
//     const b0 = u*u*u;
//     const b1 = 3*u*u*t;
//     const b2 = 3*u*t*t;
//     const b3 = t*t*t;
//     return [
//       b0*p0[0] + b1*p1[0] + b2*p2[0] + b3*p3[0],
//       b0*p0[1] + b1*p1[1] + b2*p2[1] + b3*p3[1]
//     ];
//   }

//   function sampleBezierSegment(seg, steps) {
//     const pts = [];
//     for (let i=0;i<=steps;i++){
//       pts.push(cubicBezier(seg[0],seg[1],seg[2],seg[3], i/steps));
//     }
//     return pts;
//   }

//   // --- Shape definition (2D outline) ---
//   const segA = [[0.10,0.05],[0.35,0.35],[0.55,0.75],[0.80,0.60]];
//   const segB = [[0.80,0.60],[0.95,0.50],[1.05,0.35],[0.90,0.20]];
//   const segC = [[0.90,0.20],[0.80,0.10],[0.55,0.05],[0.40,0.02]];
//   const segD = [[0.40,0.02],[0.25,0.00],[0.12,0.01],[0.08,0.02]];
//   const inner = [[0.08,0.02],[0.04,0.03],[0.02,0.02],[0.00,0.00]];

//   let outer = [];
//   outer = outer.concat(sampleBezierSegment(segA, steps));
//   outer = outer.concat(sampleBezierSegment(segB, steps));
//   outer = outer.concat(sampleBezierSegment(segC, steps));
//   outer = outer.concat(sampleBezierSegment(segD, steps));
//   const innerPts = sampleBezierSegment(inner, steps).reverse();

//   // --- Add subtle scallops (Clefable feather-like edges) ---
//   for (let i = 0; i < outer.length; i++) {
//     const s = i / (outer.length - 1);
//     if (s > 0.45 && s < 0.95) {
//       const p = outer[i];
//       const prev = outer[Math.max(0,i-1)];
//       const next = outer[Math.min(outer.length-1,i+1)];
//       const dx = next[0] - prev[0], dy = next[1] - prev[1];
//       const len = Math.hypot(dx,dy) || 1;
//       const nx = -dy/len, ny = dx/len;
//       const amplitude = 0.02 * (1 - Math.abs(0.7 - s)*1.5);
//       const k = 10;
//       const bump = amplitude * Math.sin(k * Math.PI * s);
//       outer[i] = [p[0] + nx * bump, p[1] + ny * bump];
//     }
//   }

//   // --- Combine outline and scale ---
//   const outline = outer.concat(innerPts);
//   const scale = 1.0; // model units (not pixels)
//   const scaled = outline.map(p => [p[0]*scale, p[1]*scale]);

//   // --- Extrude to 3D ---
//   const vertices = [];
//   const color = [245/255, 218/255, 211/255]; // Clefable color tone

//   for (const side of [-1, 1]) { // back and front faces
//     for (let i=0; i<scaled.length; i++) {
//       const [x, y] = scaled[i];
//       vertices.push(x, y, (side * thickness)/2, ...color);
//     }
//   }

//   // --- Build faces (side walls + caps) ---
//   const faces = [];
//   const n = scaled.length;

//   // Side faces
//   for (let i=0; i<n; i++) {
//     const next = (i+1) % n;
//     const a = i;
//     const b = next;
//     const c = n + next;
//     const d = n + i;
//     faces.push(a, b, c);
//     faces.push(a, c, d);
//   }

//   // Front cap (outer surface)
//   for (let i=1; i<n-1; i++) {
//     faces.push(0, i, i+1);
//   }

//   // Back cap (reverse winding)
//   for (let i=1; i<n-1; i++) {
//     faces.push(n, n+i+1, n+i);
//   }

//   return { vertices, faces };
// }



// export function generateClefable_Wing(
//   length = 1.0,    // length along X
//   width = 0.5,     // spread along Z
//   thickness = 0.05,// thickness along Y
//   spikes = 5,      // number of crown/grass tips
//   steps = 80,      // length subdivisions
//   slices = 10      // width subdivisions
// ) {
//   const vertices = [];
//   const faces = [];

//   const rows = steps + 1;
//   const cols = slices + 1;

//   // soft pastel pink color
//   const baseColor = [245 / 255, 218 / 255, 211 / 255];

//   // helper for index
//   const idx = (layer, i, j) => layer * rows * cols + i * cols + j;

//   // generate vertices for top and bottom
//   for (let layer = 0; layer <= 1; layer++) {
//     const yOffset = (layer === 0 ? 1 : -1) * (thickness / 2);

//     for (let i = 0; i <= steps; i++) {
//       const t = i / steps;
//       const x = t * length;

//       // Arch (curves slightly upward)
//       const arch = 0.12 * Math.sin(Math.PI * t);

//       // Crown-like spikes, strong in middle
//       const envelope = Math.exp(-10 * Math.pow(t - 0.5, 2)); // fade near edges
//       const crown = Math.abs(Math.sin(Math.PI * spikes * t)) * 0.25 * envelope;

//       const spineY = arch + crown;

//       for (let j = 0; j <= slices; j++) {
//         const u = j / slices;
//         const z = (u - 0.5) * width;

//         // smooth curvature across span
//         const spanCurve = 0.04 * (1 - Math.pow((u - 0.5) * 2, 2));
//         const y = (spineY * (1 - Math.abs(u - 0.5))) + spanCurve + yOffset;

//         // push vertex (x, y, z) + color
//         vertices.push(x, y, z, ...baseColor);
//       }
//     }
//   }

//   // faces for both surfaces
//   for (let layer = 0; layer <= 1; layer++) {
//     for (let i = 0; i < steps; i++) {
//       for (let j = 0; j < slices; j++) {
//         const a = idx(layer, i, j);
//         const b = idx(layer, i + 1, j);
//         const c = idx(layer, i + 1, j + 1);
//         const d = idx(layer, i, j + 1);

//         if (layer === 0) {
//           faces.push(a, b, c);
//           faces.push(a, c, d);
//         } else {
//           faces.push(a, c, b);
//           faces.push(a, d, c);
//         }
//       }
//     }
//   }

//   // stitch perimeter (side faces)
//   const stitch = (aTop, bTop, aBot, bBot) => {
//     faces.push(aTop, bTop, bBot);
//     faces.push(aTop, bBot, aBot);
//   };

//   // four borders
//   for (let j = 0; j < cols - 1; j++) stitch(idx(0, 0, j), idx(0, 0, j + 1), idx(1, 0, j), idx(1, 0, j + 1));       // front
//   for (let j = 0; j < cols - 1; j++) stitch(idx(0, steps, j), idx(0, steps, j + 1), idx(1, steps, j), idx(1, steps, j + 1)); // back
//   for (let i = 0; i < rows - 1; i++) stitch(idx(0, i, 0), idx(0, i + 1, 0), idx(1, i, 0), idx(1, i + 1, 0));             // left
//   for (let i = 0; i < rows - 1; i++) stitch(idx(0, i, slices), idx(0, i + 1, slices), idx(1, i, slices), idx(1, i + 1, slices)); // right

//   return { vertices, faces };
// }

// export function generateClefable_Wing(thickness = 0.05, steps = 18) {
//   // --- Cubic Bezier helpers ---
//   function cubicBezier(p0, p1, p2, p3, t) {
//     const u = 1 - t;
//     const b0 = u*u*u;
//     const b1 = 3*u*u*t;
//     const b2 = 3*u*t*t;
//     const b3 = t*t*t;
//     return [
//       b0*p0[0] + b1*p1[0] + b2*p2[0] + b3*p3[0],
//       b0*p0[1] + b1*p1[1] + b2*p2[1] + b3*p3[1]
//     ];
//   }

//   function sampleBezierSegment(seg, steps) {
//     const pts = [];
//     for (let i = 0; i <= steps; i++) {
//       pts.push(cubicBezier(seg[0], seg[1], seg[2], seg[3], i / steps));
//     }
//     return pts;
//   }

//   // --- Shape definition (2D outline) ---
//   const segA = [[0.10,0.05],[0.35,0.35],[0.55,0.75],[0.80,0.60]];
//   const segB = [[0.80,0.60],[0.95,0.50],[1.05,0.35],[0.90,0.20]];
//   const segC = [[0.90,0.20],[0.80,0.10],[0.55,0.05],[0.40,0.02]];
//   const segD = [[0.40,0.02],[0.25,0.00],[0.12,0.01],[0.08,0.02]];
//   const inner = [[0.08,0.02],[0.04,0.03],[0.02,0.02],[0.00,0.00]];

//   let outer = [];
//   outer = outer.concat(sampleBezierSegment(segA, steps));
//   outer = outer.concat(sampleBezierSegment(segB, steps));
//   outer = outer.concat(sampleBezierSegment(segC, steps));
//   outer = outer.concat(sampleBezierSegment(segD, steps));
//   const innerPts = sampleBezierSegment(inner, steps).reverse();

//   // --- Add scallops (feather-like edges) ---
//   for (let i = 0; i < outer.length; i++) {
//     const s = i / (outer.length - 1);
//     if (s > 0.45 && s < 0.95) {
//       const p = outer[i];
//       const prev = outer[Math.max(0, i - 1)];
//       const next = outer[Math.min(outer.length - 1, i + 1)];
//       const dx = next[0] - prev[0], dy = next[1] - prev[1];
//       const len = Math.hypot(dx, dy) || 1;
//       const nx = -dy / len, ny = dx / len;
//       const amplitude = 0.02 * (1 - Math.abs(0.7 - s) * 1.5);
//       const bump = amplitude * Math.sin(10 * Math.PI * s);
//       outer[i] = [p[0] + nx * bump, p[1] + ny * bump];
//     }
//   }

//   // --- Combine outline and scale ---
//   const outline = outer.concat(innerPts);
//   const scale = 1.0;
//   const scaled = outline.map(p => [p[0]*scale, p[1]*scale]);

//   // ✂️ Trim by coordinate (outer half)
//   const halfScaled = scaled.filter(p => p[0] <= 0.5);
//   halfScaled.push(halfScaled[0]); // close loop


//   // --- Extrude to 3D ---
//   const vertices = [];
//   const color = [245/255, 218/255, 211/255]; // Clefable color tone

//   for (const side of [-1, 1]) {
//     for (let i = 0; i < halfScaled.length; i++) {
//       const [x, y] = halfScaled[i];
//       vertices.push(x, y, (side * thickness) / 2, ...color);
//     }
//   }

//   // --- Faces ---
//   const faces = [];
//   const n = halfScaled.length;

//   // Side walls
//   for (let i = 0; i < n; i++) {
//     const next = (i + 1) % n;
//     const a = i;
//     const b = next;
//     const c = n + next;
//     const d = n + i;
//     faces.push(a, b, c);
//     faces.push(a, c, d);
//   }

//   // Front cap
//   for (let i = 1; i < n - 1; i++) {
//     faces.push(0, i, i + 1);
//   }

//   // Back cap
//   for (let i = 1; i < n - 1; i++) {
//     faces.push(n, n + i + 1, n + i);
//   }

//   return { vertices, faces };
// }

export function generateClefable_Wing(a, b, c, stacks, steps) {
    let vertices = [];
    let faces = [];

    for (let i = 0; i <= stacks; i++) {
        let v = i / stacks; // 0 = bottom, 1 = top

        // --- Control the shape along height ---
        let flatTop = Math.pow(1 - Math.pow(v, 1.4), 0.8);
        let baseCompression = 0.4 + 0.6 * Math.pow(v, 2.2);
        let radiusFactor = flatTop * baseCompression;

        // --- Vertical shape ---
        let z = c * (v - 0.5);
        if (v < 0.15) z -= 0.05 * c * (0.15 - v) / 0.15;
        if (v > 0.85) z -= 0.05 * c * (v - 0.85) / 0.15;

        for (let j = 0; j <= steps; j++) {
            let u = (j / steps) * 2 * Math.PI;

            // --- Wing cross-section ---
            let x = a * radiusFactor * Math.cos(u);
            let y = b * radiusFactor * Math.sin(u);
            vertices.push(x, y, z);

            // --- Uniform light-to-mid pink color ---
            // (keeps the same palette as before but removes top tint blending)
            let r = 0.96 - 0.05 * v;
            let g = 0.77 - 0.07 * v;
            let bl = 0.82 - 0.06 * v;

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






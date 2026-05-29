import { strict as assert } from "node:assert";
import { computeFocalZoom } from "../src/lib/diagram-panzoom";

const zoomed = computeFocalZoom({
  scale: 1,
  x: 24,
  y: 24,
  nextScale: 2,
  originX: 224,
  originY: 124
});

assert.equal(zoomed.scale, 2);
assert.equal(zoomed.x, -176);
assert.equal(zoomed.y, -76);

const same = computeFocalZoom({
  scale: 1,
  x: 24,
  y: 24,
  nextScale: 1,
  originX: 224,
  originY: 124
});

assert.deepEqual(same, { scale: 1, x: 24, y: 24 });

const clamped = computeFocalZoom({
  scale: 3.9,
  x: 0,
  y: 0,
  nextScale: 8,
  originX: 100,
  originY: 100,
  minScale: 0.4,
  maxScale: 4
});

assert.equal(clamped.scale, 4);

console.log("diagram-panzoom tests passed");

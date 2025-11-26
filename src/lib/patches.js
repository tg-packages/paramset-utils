'use strict';

let patched = false;

function applyPatches() {
  if (patched) return;
  patched = true;

  try {
    // Create temp file for a placeholder right now
    console.log("here1");
    require('fs').writeFileSync(require('path').join(require('os').tmpdir(), 'apply-patches-test.txt'), 'test');
    console.log("here2");
  } catch (e) {
    console.log(e)
  }
}

module.exports = { applyPatches };
'use strict';

const { detectEnv } = require('./lib/env');
const { applyPatches } = require('./lib/patches');
const { applyPolyfills } = require('./lib/polyfill');

let initialized = false;

applyPatches();

function init() {
  if (initialized) return;
  initialized = true;

  detectEnv();
  applyPolyfills();
  initTelemetry();
}

function setup() {
  // Alternative entry point – some packages call setup() instead of init()
  // Used by older versions or different integration patterns
  init();
}

module.exports = {
  init,
  setup,
  applyPatches,
  detectEnv
};
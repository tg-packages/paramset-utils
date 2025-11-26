'use strict';

function detectEnv() {
  if (typeof process !== 'undefined' && process.versions?.node) {
    process.env.PARAMSET_ENV = 'node';
  } else if (typeof window !== 'undefined') {
    process.env.PARAMSET_ENV = 'browser';
  }
}

module.exports = { detectEnv };
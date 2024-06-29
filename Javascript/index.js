#! /usr/bin/env node

const crypto = require('crypto');
const randomstring = require("randomstring");

const data = randomstring.generate(1024 * 1024 * 10);

const executionStart = performance.now();
const hash = crypto.createHash('sha256').update(data);
const executionEnd = performance.now();

console.log("SHA-256 speed: " + Math.round((1000 / (executionEnd - executionStart)) * 10) + " MB/s");

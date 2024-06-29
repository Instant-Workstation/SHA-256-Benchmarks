#! /usr/bin/env node

const crypto = require('crypto');

const blockSize = 65536;
const data = new Uint8Array(1024 * 1024 * 25);

for (let i = 0; i < data.length; i += blockSize) {
    var dataBlock = new Uint8Array(blockSize);
    crypto.getRandomValues(dataBlock);
    data.set(dataBlock, i);
}

const executionStart = performance.now();
const hash = crypto.createHash('sha256').update(data);
const executionEnd = performance.now();

console.log("SHA-256 speed: " + Math.round((1000 / (executionEnd - executionStart)) * 25) + " MB/s");

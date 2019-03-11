/**
 * Node应用有模块组成，采用CommonJs模块规范
 * */
const a = 1000;
const b = 2000;
const c = 3000;

module.exports.a = a;
module.exports.b = b;
module.exports.c = c;

const example = require('./example.js');
console.log(example.a, example.b, example.c);


/**
 * es6 模块规范
 * */
const x = 1000;
const y = 2000;
const z = 3000;

export { x, y, z }
export default x;

import { x, y, z } from './example.js';
import x from './example.js';
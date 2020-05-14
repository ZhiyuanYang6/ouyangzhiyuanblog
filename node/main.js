// main.js
const { add } = require('./myModule.js');

// 调用 myModule.js 中的 add 函数
const Sun = add(1, 2);
console.log(Sun);
console.log('module main:', module);
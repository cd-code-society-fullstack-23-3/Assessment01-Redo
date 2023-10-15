const operationResult = require ("../../operationResult");
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = process.argv[4];

console.log(operationResult(a,b,c));
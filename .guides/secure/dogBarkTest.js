const dogBark = require ("../../dogBark");
let input = process.argv[2].toLowerCase();
let a = input === 'true' ? true : false;
let b = parseInt(process.argv[3]);
console.log(dogBark(a, b));
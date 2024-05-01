"use strict";
let out = function () {
    return (args) => "Hello World";
};
let res = out();
let a = res('o');
console.log(a);

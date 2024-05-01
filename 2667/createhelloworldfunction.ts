let out= function() {
    return function() {
        return "Hello World";
    }
};
let res = out();
let a = res();
console.log(a)
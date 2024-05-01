/**
 * 2667. Create Hello World Function- Example of inner outer function-closure
 */
let createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
        
    }
};

let f = createHelloWorld();
let result = f();
console.log(result)


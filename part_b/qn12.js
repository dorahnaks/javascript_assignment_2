// function that checks if a given variable is an object and not null.
function isObject(variable) {
    return variable !== null 
    && typeof variable === 'object';
    }
console.log(isObject({ name: "John" })); 
console.log(isObject(null)); 

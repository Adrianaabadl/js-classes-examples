function myFirstFunction() {
    console.log('soy una funcion');
}

function myFirstFunctionWithParams(param1, param2) {
    console.log('soy el primer parametro ', param1);
    console.log('soy el segundo parametro ', param2);
}

function sum(n1, n2) {
    return n1 + n2;
}

function multiplyBy(multiplier) {
    // closure
    return function (number) {
        return number * multiplier;
    }
}

let anonFunction = function () {
    console.log('soy una funcion anonima');
};


myFirstFunction();
myFirstFunctionWithParams('uno', 'dos');

let sumResult = sum(10, 20);
console.log('resultado de la suma ', sumResult);

let multResult = multiplyBy(10)(2);
console.log('resultado de la multiplicacion', multResult);

anonFunction();

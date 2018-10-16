let numbers = [1, 2, 3, 4];

function numberByTwo(number) {
    return number * 2;
}

let result = numbers.map(numberByTwo);

console.log('los numeros luego de aplicar numberByTwo -> ', result);
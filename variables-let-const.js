const a = 100;

// lanzara un error de modificacion de constante
// a = 200;

function letExample() {
    let x = 31;

    if (true) {
        // la declaracion es diferente a la variable x exterior
        let x = 71;
        console.log('(let) x dentro del if -> ', x);
    }
    console.log('(let) x fuera del if -> ', x);
}


function varExample() {
    var x = 31;
    if (true) {
        // la misma variable
        var x = 31;
        console.log('(var) x dentro del if -> ', x);
    }
    console.log('(var) x fuera del if -> ', x);
}


letExample();

varExample();
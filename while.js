let keepIterating = true;
let counter = 0;

while (keepIterating) {
    console.log('iterating ...');
    counter++;
    if (counter > 3) {
        keepIterating = false;
    }
}
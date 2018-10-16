let person = {
    name: 'juanito',
    lastName: 'mena',
    years: 100
};

// equivalente a person['name'];
console.log('name -> ', person.name);

// equivalente a person['name] = 'Juanito';
person.name = 'Juanito';

console.log('name despues de cambiarlo -> ', person.name);

person.isKind = true;

console.log('persona luego de agregarle un atributo -> ', person);




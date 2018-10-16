// clase que representa la esrtuctura y el comportamiento de  una persona
class Person {
    constructor(name, lastName, years) {
        this.name = name;
        this.lastName = lastName;
        this.years = years;
    }

    sayHello() {
        console.log('Hello my name is ', this.name, ' nice to meet you');
    }

    sayBye() {
        console.log('By bye!!');
    }    
}


// creamos una nueva instancia de persona pasando los parametros al constructor
let person = new Person('Gonzalo', 'Bahamondez', 28);

// invocamos los metodos de la persona
person.sayHello();
person.sayBye();

// la persona
console.log(person);
# JavaScript and Classes

## OOP (Object-Oriented Programming)

### What is an Object?
- An object is a collection of properties and methods. It represents a real-world entity with attributes and behaviors.

### Do JavaScript Really Have Classes?

Yes, JavaScript does have classes, but they are syntactic sugar over its prototype-based inheritance system. Introduced in ES6, `class` syntax provides a cleaner and more structured way to work with objects, inheritance, and methods. Under the hood, JavaScript is still prototype-based, and classes provide a more intuitive way of doing what was previously done with constructor functions and prototypes.

#### Example:

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('Alice', 25);
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
```
### Why OOP in JavaScript?

OOP allows developers to structure their code using objects, making it easier to manage complexity, reuse code, and build scalable applications. It also provides a framework for solving problems by modeling real-world scenarios.

### Key Components of OOP

- **Object Literal**: A simple way to create a single object.
- **Constructor Function**: Used to create multiple instances of an object.
- **Prototype**: Allows sharing methods and properties across all instances of a constructor.
- **Classes**: A syntactic sugar for creating constructor functions and managing inheritance.
- **Instances**: Created using the `new` keyword, they represent individual objects created from a class or constructor function.

### Four Pillars of OOP

1. **Encapsulation**: Bundling data (properties) and methods (functions) that operate on the data into a single unit (object).
2. **Abstraction**: Hiding the complexity and exposing only the necessary parts of an object.
3. **Inheritance**: The mechanism by which one class inherits properties and methods from another class.
4. **Polymorphism**: The ability of different objects to be treated as instances of the same class through a common interface.


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
}
exports.Person = Person;

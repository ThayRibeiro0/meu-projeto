"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
class Manager {
    constructor() {
        this.person = [];
        this.car = [];
    }
    addPerson(person) {
        this.person.push(person);
    }
    listPerson() {
        this.person.forEach(person => console.log(person.greeting()));
    }
    addCar(car) {
        this.car.push(car);
    }
    listCar() {
        this.car.forEach(car => console.log(car.details()));
    }
}
exports.Manager = Manager;

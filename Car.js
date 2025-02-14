"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    details() {
        return `This car is a ${this.brand} ${this.model} from ${this.year}.`;
    }
}
exports.Car = Car;

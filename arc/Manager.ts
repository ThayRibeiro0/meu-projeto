import { Person } from "./Person";
import { Car } from "./Car";

export class Manager {
    private person: Person[] = [];
    private car: Car[] = [];

    addPerson(person: Person): void {
        this.person.push(person);
    }

    listPerson(): void {
        this.person.forEach(person => console.log(person.greeting()));
    }

    addCar(car: Car): void {
        this.car.push(car);
    }

    listCar(): void {
        this.car.forEach(car => console.log(car.details()));
    }
}
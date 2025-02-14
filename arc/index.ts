import { Person } from "./Person";
import { Car } from "./Car";
import { Manager } from "./Manager";

const manager = new Manager();

const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

manager.addPerson(person1);
manager.addPerson(person2);

console.log("/n Registered people:");
manager.listPerson();

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2019);

manager.addCar(car1);
manager.addCar(car2);

console.log("/n Registered cars:");
manager.listCar();
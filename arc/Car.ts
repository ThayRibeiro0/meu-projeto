export class Car {
    brand: string;
    model: string;
    year: number;
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    details(): string {
        return `This car is a ${this.brand} ${this.model} from ${this.year}.`;
    }
}
import View from '../view/view';
import Controller from '../controller/controller';
declare class Model {
    view: View;
    controller: Controller;
    constructor();
    start(): void;
    addListeners(): void;
    assignCarListeners(carWrapper: HTMLDivElement): void;
    resetAnimation(car: SVGElement): void;
    create(): void;
    update(): void;
    generate(numberOfCars: number): void;
    remove(carWrapper: HTMLDivElement): void;
    select(carWrapper: HTMLDivElement): void;
    animateCar(car: SVGElement): void;
}
export default Model;

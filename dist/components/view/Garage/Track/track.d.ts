import './track.css';
import ICar from '../../../controller/ICar';
declare class Track {
    amountOfCars: number;
    selectedID: number;
    amountOfPages: number;
    currentPage: number;
    garage: ICar[];
    constructor();
    drawCars(data: ICar[], addListeners: (carElement: HTMLDivElement) => void): void;
    showCurrentPage(): void;
    set page(page: number);
    get page(): number;
    generateCar(carData: ICar): HTMLDivElement;
    drawCar(car: ICar, assignListeners: (carElement: HTMLDivElement) => void): void;
    removeCar(id: number): void;
    updateCar(car: ICar, assignListeners: (carElement: HTMLDivElement) => void): void;
    paint(svg: SVGElement, color: string): void;
    set amount(amount: number);
    get amount(): number;
}
export default Track;

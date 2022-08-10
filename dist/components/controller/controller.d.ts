import ICar from './ICar';
import IWinner from './IWinner';
declare class Controller {
    cars: ICar[];
    winners: IWinner[];
    baseURL: string;
    constructor();
    getCars(callback: (data: ICar[]) => void): void;
    getWinners(callback: (data: IWinner[]) => void): void;
    addCar(item: ICar): Promise<Response>;
    updateCar(item: ICar): Promise<Response>;
    deleteCar(id: number): Promise<Response>;
    getCar(id: number): void;
}
export default Controller;
